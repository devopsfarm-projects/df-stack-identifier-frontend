import Login from '../Login/Login'
import { HeaderMain } from '..'

function Home() {
  const accessToken = localStorage.getItem('accessToken')
  return (
    <>
    {accessToken ?
    <>
      <HeaderMain/>
      <h1>HomeComponent</h1>
    </>: <Login />}
    </>
  )
}

export default Home