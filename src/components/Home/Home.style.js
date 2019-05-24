const styles = theme => ({
  root: {
    // background: 'linear-gradient(rgba(0, 172, 237,0.55), rgba(0, 172, 237,0.55)), url(./assets/keyboard_background.jpg) no-repeat center center fixed',
    // backgroundSize: 'cover',
    // background: 'rgba(0, 172, 237,0.45)',
    background: 'white',
    height: '92%',
    // position: 'absolute',
    // top: 0
  },
  container: {
    width: '75%',
    margin: '0 auto',
    color: 'white',
    marginTop: theme.spacing(10)
  },
  profilePictureContainer: {
    width: '100%',
    margin: '0 auto',
    paddingTop: theme.spacing(10)
  },
  bodyContainer: {
    // width: '75%',
    paddingLeft: '15%',
    paddingRight: '15%',
    color: 'white',
    background: 'rgba(0, 172, 237,0.45)',
    minHeight: '37%'
  },
  margin: {
    padding: theme.spacing(3)
  },
  lineHeight: {
    lineHeight: '25px'
  }
})

export default styles