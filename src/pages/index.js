import React from "react";
import Layout from "../components/Layout";
import indexStyle from "../components/Index.module.scss"
import {Link , graphql, useStaticQuery} from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//material UI
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';

//scss
import center from '../pages/center.module.scss'

const useStyles = makeStyles(theme => ({
    button: {
      margin: "10px 0 0",
      backgroundColor: "#007bff",

    },
    input: {
      display: 'none',
    },
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: '#663399',
    },
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  }));

 


const Index = () => { const blog = useStaticQuery(graphql`
query {
    allMarkdownRemark (
      sort: {fields: frontmatter___date, order: DESC}
      
     )
    
    
    {
        edges {
            node { 
                frontmatter {
                    title,
                    date,
                    type,
                    abs,
                    tag,
                    featuredImage {
                        relativePath,
                        absolutePath,
                        childImageSharp{
                            fixed(width: 300) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                        
                }
                html,
                excerpt,
                fields {
                    slug
                }
            }
        }
    }
}
`
);


let cartillas = blog.allMarkdownRemark.edges;
  

    const classes = useStyles()
    return (
<Layout>
<div className={indexStyle.jumbotron}>
<h1>Bienvenidos!</h1>
<h2>La programación web crece todos los dias, aprendamos juntos</h2>
<p>En este sitio vas a poder encontrar tutoriales de diseño y programación web. Javascript, css, html, y frameworks.</p>
<p>Videos cortos, largos, cursos completos. Un poco de todo, y sobre todo en español!</p>
<div >
    <Link className={indexStyle.nodecor} to="/tutoriales">
    <Button  variant="contained" color="primary" className={classes.button}>
       Empezemos !
      </Button>
      </Link>
      
      </div>
      
</div>

<h2>Ultimos tutoriales</h2>
<div className={center.center}> 
            <div className={classes.root}>
            <Grid container spacing={2} >
            {
            cartillas.map((edge)=> {
              let url = "./tutorial/" + edge.node.fields.slug;
              let tagUrl = "./tag/" + edge.node.frontmatter.tag;
              console.log(edge.node.frontmatter.featuredImage.childImageSharp.fixed.src)
              
              return (


                  










              
                       <Grid item xs={8} sm={6} md={4} lg={3} className={center.center}>
                      
                      
     


                  <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="Recipe" className={classes.avatar}>
                        {edge.node.frontmatter.type}
                      </Avatar>
                    }
                    
                    title={<Link className={center.nodecor} to={url}>{edge.node.frontmatter.title}</Link>}
                    subheader={<Link className={center.nodecor} to={url}>{edge.node.frontmatter.date} </Link>}
                    
                  />
                  <Link to={url}>
                  
                  <CardMedia
                    className={classes.media}
                    image={edge.node.frontmatter.featuredImage.childImageSharp.fixed.src}
                    title={edge.node.frontmatter.title}
                  />
                  </Link>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {edge.node.frontmatter.abs}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                
                    <IconButton aria-label="Share">
                    <div data-href={'https://codigomate.com/' + url} 
                    data-layout="button" data-size="small"><a className={center.nodecor} title="compartir en facebook" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.codigomate.com%2F&amp;src=sdkpreparse" 
                    class="fb-xfbml-parse-ignore" rel="noopener noreferrer"><ShareIcon /></a></div>


        
                    </IconButton>
                    <div
        className={clsx(classes.expand)}
       
      >
       <Link to={tagUrl} className={center.nodecor2}>
          <div className={center.right}>  {edge.node.frontmatter.tag}  </div></Link> 
        </div>
                    
                  </CardActions>
                  
                 
                            
                </Card>
                
                </Grid>




                  
          
                      
                      
                
              )
          }).slice(0,4)
            }
            
            </Grid>
        </div>
        </div>


</Layout>
    );

}

export default Index