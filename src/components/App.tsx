import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../stylesheets/App.css";
import Home from "./Home";
import LocationList from "./LocationList";
import FilmList from "./FilmList";
import FilmCard from "./FilmCard";
import LocationCard from "./LocationCard";


class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Fragment>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/films" component={FilmList} />
                            <Route path="/films/:id" component={FilmCard} />
                            <Route exact path="/locations" component={LocationList} />
                            <Route path="/locations/:id" component={LocationCard}/>
                        </Switch>
                    </Fragment>
                </Router>
            </div>
        );



    }
}


export default App;

