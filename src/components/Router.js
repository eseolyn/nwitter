import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                    // Fragment : use instead of div or span
                    // JSX문법을 맞추기 위해서 원래 작성하려는 HTML 형태가 아닌 다른 형태로 간다면 그것은 잘못된 일일 것입니다.
                    // 이런 JSX문법의 불편함을 해소할 수 있는 것이 리액트에서 제공하는 Fragment
                    <>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </>
                ) : (
                    <Route exact path="/">
                        <Auth />
                    </Route>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;
