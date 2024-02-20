
import axios from 'axios';

const GithubLoginButton = () => {
  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:3000/login');

      window.location.href = response.data.authorizationUrl;

    }catch(error){
      console.error('Error' , error.message)
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login With Github</button>
    </div>
  )
}

export default GithubLoginButton;