import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        confirmpassword:"",
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
            <h3>Create account</h3>

            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="EmailInput" class="form-label mt-4">Email address</label>
                    <input type="email" class="form-control" id="EmailInput" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={handleInputChange} placeholder="saisantosh@example.com" required />
                    <small id="emailHelp" class="form-text text-muted">Please enter vaild Email.</small>
                </div>
                <div class="form-group">
                    <label for="passwordInput" class="form-label mt-4">Password</label>
                    <input type="password" class="form-control" id="passwordInput" aria-describedby="passwordHelp" name="password" value={credentials.password} onChange={handleInputChange} placeholder="Enter password" required/>
                    <small id="passwordHelp" class="form-text text-muted">Password should be more than 8 charaters</small>
                </div>
                <div class="form-group">
                    <label for="confirmpasswordInput" class="form-label mt-4">Confirm Password</label>
                    <input type="password" class="form-control" id="confirmpasswordInput" aria-describedby="passwordHelp" name="confirmpassword" value={credentials.confirmpassword} onChange={handleInputChange} placeholder="Re-enter password" required/>
                    <small id="passwordHelp" class="form-text text-muted">Password should be more than 8 charaters</small>
                </div>
                <input type="submit" value="Register" className="btn btn-primary my-3" />
                <p>Already have an account! <Link to="/login">Sign in</Link> </p>
            </form>
        </>
    );
};

export default Register;