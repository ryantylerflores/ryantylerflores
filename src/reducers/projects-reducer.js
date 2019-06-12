export default (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_REPOS': {
      return {
        ...state,
        repositories: action.payload
      }
    }
    default:
      return state
  }
}