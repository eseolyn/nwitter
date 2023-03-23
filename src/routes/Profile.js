import { authService } from "fbase";
import { signOut } from "firebase/auth";
// import { useHistory } from "react-router-dom";
import React from "react";

// useHistory = when logout, push url to home('/')
const Profile = () => {
    const onLogOutClick = () => {
        signOut(authService);
        // history.push("/");
    };
    // const history = useHistory();
    return (
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};
export default Profile;
