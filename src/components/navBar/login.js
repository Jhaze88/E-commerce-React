import React, { useState } from 'react';
import LoginForm from './loginForm';

export const Login = () => {

    const adminUser = {
        email: "",
        password: ""
    };

    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");

    const Login = (details) => {
        console.log(details);

        if (user.email === adminUser.email && user.password === adminUser.password) {
            console.log("Logged in");
            setUser({
                name: details.name,
                surname: details.surname,
                email: details.email,
                password: details.password
            })
        } else {
            setError("Detail no match!")
        }
    };

    const Logout = () => {
        console.log("Logout");
        setUser({ name: "", surname: "", email: "", password: "" })
    };



    return (
        <div className="form-container">
            {
                (user.email !== "") ? (
                    <div className="form-succes">
                        <h2>Welcome, <span>{user.name}</span></h2>
                        <div>
                            <a className="form-home" href='/'>Go to Shop</a>
                        </div>
                        <button
                            className="logout"
                            onClick={Logout}
                        >Logout
                        </button>

                    </div>

                ) : (
                        <>
                            <LoginForm login={Login} error={error} />
                            <span>Have an account ? <a href="/register">Sign In</a></span>
                        </>
                    )
            }

        </div>
    )
}

export default Login;
