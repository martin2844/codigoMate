import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

//material UI
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';

//scss
import center from '../pages/center.module.scss'




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
      backgroundColor: red[500],
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


const UltimosTuts = ()=> {
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
    
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
    setExpanded(!expanded);
    }


    return (

        <div className={center.center}> 
            <div className={classes.root}>
            <Grid container spacing={2} >
            {
            cartillas.map((edge)=> {
                let url = "./tutorial/" + edge.node.fields.slug;
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
                      action={
                        <IconButton aria-label="Settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      
                      title={<Link className={center.nodecor} to={url}>{edge.node.frontmatter.title}</Link>}
                      subheader={<Link className={center.nodecor} to={url}>{edge.node.frontmatter.date} </Link>}
                      
                    />
                    <CardMedia
                      className={classes.media}
                      image={edge.node.frontmatter.featuredImage.childImageSharp.fixed.src}
                      title="Paella dish"
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="Add to favorites">
                      <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="Share">
                        <ShareIcon />
                      </IconButton>
                      <IconButton
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="Show more"
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                          minutes.
                        </Typography>
                        <Typography paragraph>
                          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                          heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                          browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                          and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                          pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                          saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                          Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                          without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                          medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                          again without stirring, until mussels have opened and rice is just tender, 5 to 7
                          minutes more. (Discard any mussels that don’t open.)
                        </Typography>
                        <Typography>
                          Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                      </CardContent>
                    </Collapse>
                  </Card>
                  
                  </Grid>




                    
            
                        
                        
                  
                )
            }).slice(0,4)
            }
            
            </Grid>
        </div>
        </div>

    )

        }

        export default UltimosTuts