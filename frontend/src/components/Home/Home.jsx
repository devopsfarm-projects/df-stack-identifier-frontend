import Login from '../Login/Login'
import {useSelector} from 'react-redux';

function Home() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <>
    {isAuthenticated ? <p>User is Logged in </p>:<Login/>  }
    
    </>
  )
}

export default Home