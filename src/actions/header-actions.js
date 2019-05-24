export const changeAppLocation = (location) => {
  switch(location) {
    case 'Projects':
      return{
        type: 'TO_PROJECTS'
      }
    case 'Home':
      return{
        type: 'TO_HOME'
      }
    case 'About':
      return{
        type: 'TO_ABOUT'
      }
    case 'Contact':
     return{
       type: 'TO_CONTACT'
     }
  }
}