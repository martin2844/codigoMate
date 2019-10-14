import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ShareIcon from '@material-ui/icons/Share';

import {Helmet} from "react-helmet";


import Grid from '@material-ui/core/Grid';

import center from './center.module.scss'




const useStyles = makeStyles(theme => ({
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


const Tutoriales = ()=> {
    
    


    const blog = useStaticQuery(graphql`
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

    
    let pijon = blog.allMarkdownRemark.edges;
    const [cards, setCards] = useState(pijon);
    const [filter, setFilter] = useState("");

    useEffect(() => {
      if (filter) {  // don't do anyhiting when filter is empty on initial render
        const filteredCards = cards.filter((card) => {
          return card.node.frontmatter.tag === filter
        })
        setCards(filteredCards)
      }
    }, [filter, setCards]);


    const classes = useStyles();
 
    const cross = (
      <div>
        <p>Mostrando los tutoriales sobre {filter}  <div onClick={ () => {
            setFilter("");
            setCards(pijon);
          
            
            
        
        }}
          
        
           className={center.bubble}>
              x  </div></p>
        
         
       
      </div>
    )

    return (
        <Layout>
          <Helmet>
        <title>codigoMate | Tutoriales</title>
        <meta name="description" content="Todos los tutoriales" />
        <meta name="keywords" content="cursos, tutoriales, programacion web, programacion español" />
      </Helmet>
           <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v3.3&appId=1061060300949201&autoLogAppEvents=1"></script>
            
            <h1>Tutoriales</h1>{filter ? cross : null}
            
            <div className={center.center}> 
            <div className={classes.root}>
            <Grid container spacing={2} >
            {
            cards.map((edge)=> {
                let url = "./tutorial/" + edge.node.fields.slug;
                let abstract = edge.node.frontmatter.abs.substring(0,200) + "...";
                console.log(edge.node.frontmatter.featuredImage.childImageSharp.fixed.src)
                
                return (                
                         <Grid item xs={8} sm={6} md={4} lg={3} className={center.center}>
      
                    <Card className={classes.card}>
                    <CardHeader
                      avatar={
                        <Avatar className={classes.avatar}>
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
                      {abstract}
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
          
          <div onClick={ () => {
            setFilter(edge.node.frontmatter.tag);

          
            
            
        
        }
          
        }
           className={center.right}>
              {edge.node.frontmatter.tag}  </div>
          </div>
                      
                    </CardActions>
                    
                   
                              
                  </Card>
                  
                  </Grid>




                    
            
                        
                        
                  
                )
            })
            }
            
            </Grid>
        </div>
        </div>
        </Layout>
    )
}

export default Tutoriales