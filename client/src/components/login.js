function Login() {
    return(
        <div className="container">
            <form>
                <label for="email">Email</label>
                <input type="text" id="email" placeholder="Type in youe email"/>
                <label for="password">Password</label>
                <input type="text" id="password" placeholder="Type in your password"/>
                <input type="button" value="submit"/>
            </form>
        </div>
    )
};

export default Login;