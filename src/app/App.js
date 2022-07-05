import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/ui/navBar/navBar";
import Models from "./layouts/models";

function App() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route path="/models/:modelId?" component={Models}/>
            </Switch>
        </div>
    );
}

export default App;
