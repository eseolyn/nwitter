import React, { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };
    const onSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div>
            <form onSubmit={onSubmit}></form>
            <form>
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={onChange}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    required
                    onChange={onChange}
                />
                <input type="submit" value="Log In" />
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    );
};
export default Auth;
