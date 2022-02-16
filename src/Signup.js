import React, { useState } from "react";
import UserPool from './UserPool';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailChange = ({ target: { value } }) => setEmail(value);
    const onPasswordChange = ({ target: { value } }) => setPassword(value);

    const onSubmit = (evt) => {
        evt.preventDefault();

        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) {
                console.error(err);
            }
            console.log(data);
        });
    }

    return (
        <div className="App">
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={onEmailChange} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={onPasswordChange} />
                <button type="submit">signUp</button>
            </form>
        </div>
    );
}

export default Signup;
