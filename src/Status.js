import React, { useState, useEffect, useContext } from "react";
import { AccountContext } from "./Account";

const Status = () => {
    const [status, setStatus] = useState(false);
    const { getSession, logout } = useContext(AccountContext);

    useEffect(() => {
        getSession().then((session) => {
            console.log("Status Session: ", session);
            setStatus(true);
        }).catch((err) => {
            console.log("No active Session", err);
        });
    }, [getSession]);

    return (
        <div>
            {status ? <button onClick={logout}>Logout</button> : "Please Login"}
        </div>
    );
}

export default Status;
