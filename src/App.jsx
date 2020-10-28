import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimesPage } from "./pages/AnimesPage/AnimesPage";
import HomePage from "./pages/HomePage/HomePage";
import Menu from "./shared/components/Menu/Menu";

function App () {
    return (
        <Router>

            <div className="container-fluid justify-content-center my-4 u-font-size-16">
                <Menu/>

                <Switch>
                    <Route path="/animes">
                        <AnimesPage/>
                    </Route>
                    <Route path="/">
                        <HomePage/>
                    </Route>

                </Switch>
            </div>

        </Router>
    );
}

export default App;
