import axios from 'axios';

export const fetchRepos = () => async dispatch => {
  let res = await axios.get('https://api.github.com/users/ryantylerflores/repos');
  dispatch({
    type: 'FETCH_REPOS',
    payload: res.data
  })
}