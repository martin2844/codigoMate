const path = require('path');


// export for creating a Node, in graphql API
module.exports.onCreateNode = ({ node, actions }) => {
const { createNodeField } = actions


//creates slug inside graphql API
if (node.internal.type === 'MarkdownRemark') {

    //this gets the slugusing the path of the file, and removes the .md filetype
    const slug = path.basename(node.fileAbsolutePath, '.md');

    createNodeField({
        node,
        name: 'slug',
        value: slug
    });


}


}


//creates pages, first get slug, uses async instead of promise, need to check out await async first.
module.exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    const tutorialTemplate = path.resolve('./src/templates/tutorial.js')
    const tagPage = path.resolve('./src/templates/tag.js')
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            tag
                        }
                    }
                }
            }
        }
    
    `)

//creates dynamic page
//Loops for each node created on the res const. And for each node, will pass a paramater "edge", which
//will createPage function with it with a slug as the name
    res.data.allMarkdownRemark.edges.forEach((edge) =>{
        console.log("Page created!!!!!!!!!!!!!!!!!!!!!!")
        createPage({
            component: tutorialTemplate,
            path: `/tutorial/${edge.node.fields.slug}`,
            context: {
            //what to pass with each page
            slug: edge.node.fields.slug    
            }
        })
    })

    res.data.allMarkdownRemark.edges.forEach((edge) =>{
        console.log("TAGPage created!!!!!!!!!!!!!!!!!!!!!!")
        createPage({
            component: tagPage,
            path: `/tag/${edge.node.frontmatter.tag}`,
            context: {
            //what to pass with each page
            slug: edge.node.fields.slug ,
            tag:  edge.node.frontmatter.tag
            }
        })
    })


}
