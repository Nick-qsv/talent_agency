import React from "react";
import {HashRouter as Router, Link, Route, Routes} from 'react-router-dom'
import App from "./App";
import ClientId from "./ClientId";

export default class Main extends React.Component{
    render(){
        return(
            <Router>
                <div className="main">
                    <h1 className="mainPage--Header">Talents!</h1>
                    <Routes>
                    <Route path='/' element={App}/>
                    {/* <Route exact path='/api/clients/:clientId' component={ClientId}/> */}
                    </Routes>                
                </div>
            </Router>
        )
    }
}