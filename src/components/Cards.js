import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core'

import NewsCard from './NewsCard'

const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  {
    color: '#1565c0',
    title: 'News by Categories',
    info: 'Business, Entertainment, General, Health, Science, Sports, Technology',
    text: 'Give me the latest Technology news'
  },
  {
    color: '#4527a0',
    title: 'News by Terms',
    info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...',
    text: "What's up with PlayStation 5"
  },
  {
    color: '#283593',
    title: 'News by Sources',
    info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...',
    text: 'Give me the news from CNN'
  }
]

const Cards = ({ articles, activeArticle }) => {
  return articles.length ? (
    <Grow in>
      <Grid container alignItems="stretch" spacing={3}>
        {infoCards.map((info) => (
          <Grid item xs={12} sm={6} lg={3}>
            <div style={{ background: info.color }}>
              <Typography variant="h5" component="h5">
                {info.title}
              </Typography>
              {info.info ? (
                <Typography variant="h6" component="h6">
                  <strong>{info.title.split(' ')[2]}</strong>
                  <br />
                  {info.info}
                </Typography>
              ) : null}
              <Typography variant="h6" component="h6">
                Try saying: <br /> <i>{info.text}</i>
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Grow>
  ) : (
    <Grow in>
      <Grid container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} lg={3}>
            <NewsCard activeArticle={activeArticle} newsNumber={i + 1} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  )
}

export default Cards
