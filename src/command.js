const actionByCommand = ({ command, articles, number }, setArticles, setActiveArticle) => {
  switch (command) {
    case 'newHeadlines':
      setArticles(articles)
      setActiveArticle(-1)
      break
    default:
      break
  }
}

export default actionByCommand
