const axios = require ('axios');
const getAPI = async () => {
    try {
      let response = await axios.get('http://localhost:5045/user');
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  };
  //getAPI();
  const postAPISignUp = async ()=> {
    try {
      let response = await axios.post('http://localhost:5045/user/signup',  {
        firstname: 'Ikenna',
        lastname: 'Ene',
        email: 'awsumbret@gmail.com',
        phone: '+2348130135975',
        password: '0090448869'
      });
      console.log(response.data.msg)
    } catch (error) {
      console.log(console.error())
    }
  };
  //postAPISignUp();
  
  const postAPISignIn = async ()=> {
    try {
      let response = await axios.post('https://ftx-server-backup.onrender.com/user/signin',  {
        email: 'sis@yahoo.com',
        password: 'sis'
      });
      console.log(response.data)
    } catch (error) {
      console.log(console.error())
    }
  };

postAPISignIn()