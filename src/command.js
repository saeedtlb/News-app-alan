// import alanBtn from '@alan-ai/alan-sdk-web'
import wordsToNumbers from 'words-to-numbers'

const actionByCommand = ({ command, articles, number, color }, setArticles, setActiveArticle, alanBtnInstance) => {
  switch (command) {
    case 'newHeadlines':
      setArticles(articles)
      setActiveArticle(-1)
      break
    case 'highlight':
      setActiveArticle((prev) => ++prev)
      break
    case 'open':
      const parseNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number
      const article = articles[parseNumber - 1]

      if (parseNumber > articles.length)
        // alanBtn().playText(`There is no article number ${parseNumber}, please try that again...`)
        alanBtnInstance.playText(`There is no article number ${parseNumber}, please try that again...`)
      else if (article) {
        window.open(article.url)
        // alanBtn().playText('Opening...')
        alanBtnInstance.playText('Opening...')
        //   } else alanBtn().playText('Please try that again...')
      } else alanBtnInstance.playText('Please try that again...')
      break
    case 'change':
      color && (document.body.style.background = color)
      break
    default:
      break
  }
}

export default actionByCommand
