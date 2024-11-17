import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (event) => {
        const {name , value} = event.target;

        setCredentials({...credentials, [name]: value});
    }

    const handleSubmit =(event) =>{
        event.preventDefault();
    }
    return (
        <>
            <h3>LOGIN</h3>

            <form onsubmit={handleSubmit}>
                <div class="form-group">
                    <label for="EmailInput" class="form-label mt-4">Email address</label>
                    <input type="email" class="form-control" id="EmailInput" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={handleInputChange} placeholder="saisantosh@example.co" required/>
                    <small id="emailHelp" class="form-text text-muted">Please enter vaild Email.</small>
                </div>
                <div class="form-group">
                    <label for="passwordInput" class="form-label mt-4">Password</label>
                    <input type="password" class="form-control" id="passwordInput" aria-describedby="passwordHelp" name="password" value={credentials.password} onChange={handleInputChange} placeholder="Enter password" required />
                    <small id="passwordHelp" class="form-text text-muted">Password should be more than 8 charaters</small>
                </div>
                <input type="submit" value="Login" className="btn btn-primary my-3" />
                <p>Don't have an account? <Link to="/register">Create an account</Link> </p>
            </form>
        </>
    );
};

export default Login;