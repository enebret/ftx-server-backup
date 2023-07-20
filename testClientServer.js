const axios = require ('axios');
const getAPI = async () => {
    try {
      let response = await axios.get('http://localhost:5045/signup');
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  };
  getAPI();