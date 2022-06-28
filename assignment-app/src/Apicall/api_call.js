const axios = require('axios') // It is a library which is used to make requests to an API, return data from the API, and then do    
                                //things with that data in our React application. 

export function getReq(url) {
  return axios.get(url)
}