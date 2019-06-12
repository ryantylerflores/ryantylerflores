import axios from 'axios';

export const sendEmail = formValues => async (dispatch, getState) => {
  // const response = await axios.post('https://api.mailjet.com/v3.1/send', { headers: {'Content-Type: applicatin/json'}})
  console.log(formValues);
}