import React from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

const NewsCard = ({ activeArticle, newsNumber, article: { description, publishedAt, source, url, urlToImage } }) => {
  return (
    <Card>
      <CardActionArea href={url} target="_blank">
        <CardMedia
          title={title}
          image={urlToImage || 'https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn.png'}
        />
        <div>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>

        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button url={url} size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {newsNumber}
        </Typography>
      </CardActions>
    </Card>
  )
}

export default NewsCard
