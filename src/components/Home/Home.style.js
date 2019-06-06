const styles = theme => ({
  root: {
    // background: 'linear-gradient(rgba(0, 172, 237,0.55), rgba(0, 172, 237,0.55)), url(./assets/keyboard_background.jpg) no-repeat center center fixed',
    // backgroundSize: 'cover',
    // background: 'rgba(0, 172, 237,0.45)',
    background: 'white',
    height: '92vh',
    // position: 'absolute',
    // top: 0
    display: 'flex',
    flexFlow: 'column'
  },
  container: {
    width: '85%',
    margin: '0 auto',
    color: 'white',
    marginTop: theme.spacing(10)
  },
  profilePictureContainer: {
    width: '100%',
    margin: '0 auto',
    paddingTop: theme.spacing(6),
    color: '#2f313d'
  },
  bodyContainer: {
    // width: '75%',
    paddingLeft: '15%',
    paddingRight: '15%',
    color: 'white',
    background: 'rgb(0, 172, 237)',
    // minHeight: '37%'
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center'
  },
  padding: {
    padding: theme.spacing(3)
  },
  margin: {
    margin: theme.spacing(3,0)
  },
  lineHeight: {
    // lineHeight: '40px'
  },
  nameTitle: {
    fontWeight: '500 !important'
  }
})

export default styles