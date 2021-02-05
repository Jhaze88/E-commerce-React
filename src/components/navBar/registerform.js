import React from 'react';

const Registerform = () => {
    return (
        <div className="register-container">
            <form>
                <h2>Register</h2>
                <div className="form-group">
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name..."
                        id="name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="surname"></label>
                    <input
                        type="text"
                        name="surname"
                        placeholder="Surname..."
                        id="surname"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email..."
                        id="email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password..."
                        id="password"
                    />
                </div>
                <input type="submit" value="REGISTER" className="submit" />
            </form>
        </div>
    )
}

export default Registerform;
