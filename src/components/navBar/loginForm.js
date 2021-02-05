import React, { useState } from 'react';

export const LoginForm = ({ login, error }) => {

    const [details, setDetails] = useState({
        name: "",
        surname: "",
        email: "",
        password: ""
    });

    const submitHandler = (e) => {
        e.preventDefault()
        login(details)
    }

    return (
        <>
            <form className="form" onSubmit={submitHandler}>
                <h2>Login</h2>
                {
                    (error != "") ? (<div className="error">{error}</div>) : ""
                }
                <div className="form-group">
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name..."
                        id="name"
                        onChange={e => setDetails({ ...details, name: e.target.value })}
                        value={details.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="surname"></label>
                    <input
                        type="text"
                        name="surname"
                        placeholder="Surname..."
                        id="surname"
                        onChange={e => setDetails({ ...details, surname: e.target.value })}
                        value={details.surname}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email..."
                        id="email"
                        onChange={e => setDetails({ ...details, email: e.target.value })}
                        value={details.email}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password..."
                        id="password"
                        onChange={e => setDetails({ ...details, password: e.target.value })}
                        value={details.password}
                    />
                </div>
                <input type="submit" value="LOGIN" className="submit" />

            </form>

        </>
    )
};
export default LoginForm;
