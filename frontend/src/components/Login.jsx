const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const Login = () => {
    const handleLogin =() => {
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo%20user&20repo_deployment`;
    };

    return (
        <>
            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogin}>Login With Github</button>
        </>
    )
}

export default Login