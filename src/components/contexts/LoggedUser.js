// display username on NavBar after login
// create user context::LoggedUser
// user:store user info

import React from "react";

// const LoggedUser = React.createContext(null);
const LoggedUser = React.createContext({
    user: null,
    setUser: () => {}
});

export default LoggedUser;