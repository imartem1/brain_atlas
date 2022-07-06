import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/ui/navBar/navBar";
import Main from "./layouts/main";

function App() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route path="/models/:modelId?" component={Main}/>
            </Switch>
        </div>
    );
}

export default App;
