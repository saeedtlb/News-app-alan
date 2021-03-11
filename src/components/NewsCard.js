import React, { useState, useEffect, createRef } from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

import useStyles from './styles/newsCardStyle'

const NewsCard = ({
  activeArticle,
  newsNumber,
  article: { description, title, publishedAt, source, url, urlToImage }
}) => {
  const classes = useStyles()

  const [elRefs, setElRefs] = useState([])

  useEffect(() => {
    setElRefs((refs) => new Array(20).fill().map((_, i) => refs[i] || createRef()))
  }, [])

  useEffect(() => {
    activeArticle === newsNumber && elRefs[activeArticle] && scrollToElement(elRefs[activeArticle])
  }, [activeArticle, newsNumber, elRefs])

  const scrollToElement = (ref) => window.scrollTo(0, ref.current.offsetTop - 50)

  return (
    <Card ref={elRefs[newsNumber]} className={activeArticle === newsNumber ? classes.activeCard : classes.card}>
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.media}
          title={title}
          image={urlToImage || 'https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn.png'}
        />
        <div className={classes.detail}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>

        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
          {title}
        </Typography>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className={classes.cardActions}>
        <Button url={url} size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {newsNumber + 1}
        </Typography>
      </CardActions>
    </Card>
  )
}

export default NewsCard
