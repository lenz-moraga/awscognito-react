import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { authenticate } = useContext(AccountContext);

    const onEmailChange = ({ target: { value } }) => setEmail(value);
    const onPasswordChange = ({ target: { value } }) => setPassword(value);

    const onSubmit = (evt) => {
        evt.preventDefault();

        authenticate(email, password).then(data => {
            console.log("Logged in!", data);
        }).catch(err => {
            console.log("Failed to login", err);
        });
    }

    return (
        <div className="App">
            <form onSubmit={onSubmit}>
                <label htmlFor="emailLogin">Email</label>
                <input type="email" id="emailLogin" onChange={onEmailChange} />
                <label htmlFor="passwordLogin">Password</label>
                <input type="password" id="passwordLogin" onChange={onPasswordChange} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
