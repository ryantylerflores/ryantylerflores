export default (state = {current: 'HOME'}, action) => {
  switch(action.type) {
    case 'TO_HOME':
      return {
        ...state,
        current: 'HOME'
      };
    case 'TO_PROJECTS':
      return {
        ...state,
        current: 'PROJECTS'
      };
    case 'TO_CONTACT':
      return {
        ...state,
        current: 'CONTACT'
      }
    case 'TO_ABOUT':
      return {
        ...state,
        current: 'ABOUT'
      }
  }
  return state
}