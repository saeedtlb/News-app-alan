import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottom: '10px solid white'
  },

  activeCard: {
    transition: 'all 0.5s ease',
    borderBottom: '10px solid #22289a'
  },

  media: {
    height: 250
  },

  detail: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 20
  },

  title: {
    padding: '0 16px'
  },

  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 16px 8px 16px'
  }
})
