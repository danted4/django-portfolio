import React, { Component } from "react";
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import HeaderComponent from "./headerComponent/HeaderComponent";
import HomeComponent from './homeComponent/HomeComponent';
import { isInViewport, isHomeInViewport, addScrollListener, removeScrollListener, scrollToElement } from '../utils/scrollManager';
import { ACTION_TYPES } from "../actions/actions";
class App extends Component {
    constructor() {
        super();
        this.dataObj = {};
        this.latestProperty = "/home"
        this.state = { currentRoute: "/home" };
        window.scrollTo(0, 0);
    }
    trackComponentMountings = (componentName, componentMarkerElementClass) => {
        this.dataObj = { ...this.dataObj, [componentName]: componentMarkerElementClass };
    }
    componentDidMount() {
        //add a scroll listener
        addScrollListener(this.scrollListener);
    }
    componentWillUnmount(){
        //remove the scroll listener
        removeScrollListener(this.scrollListener);
    }
    scrollListener = () => {
        for (const property in this.dataObj) {
            let node = ReactDOM.findDOMNode(this);
            let markerElement;
            if (node instanceof HTMLElement) {
                markerElement = node.querySelector(this.dataObj[property])
            }
            if (markerElement) {
                if (isInViewport(markerElement)) {
                    if (this.latestProperty !== property) {
                        this.latestProperty = property;
                        this.setState({ currentRoute: this.latestProperty });
                    }
                    break;
                }
            }
        }
    }
    scrollHandler = (path) => {
        let node = ReactDOM.findDOMNode(this);
        console.log('the node', node)
        let markerElement;
        if (node instanceof HTMLElement) {
            markerElement = node.querySelector(this.dataObj[path])
        }
        console.log(markerElement)
        if (markerElement) {
            scrollToElement(markerElement);
        }
    }

    render() {
        console.log('app state is ', this.props.appState.reducer1);
        // setTimeout(() => {
        //     var htmlString = document.getElementById('root').innerHTML;
        //     console.log(htmlString);
        // }, 10000)
        return <div className="container-fluid no-padding">
            <div className="row no-gutters">
                <div className="col-xs-12 col-md-12 col-lg-12 full-viewport-height clr d1">
                    <Router>
                        <HeaderComponent activeRouteName={this.state.currentRoute} handleScroll={this.scrollHandler} />
                        <Switch>
                            <div className={"row no-gutters"} >
                                <div className={"col-xs-12 col-md-12 col-lg-12 margin-t-1x"}>
                                    <Route exact path="/" component={() => {return <Redirect to="/home" /> }} />
                                    <Route path="/home" component={() => { if(this.props.appState.reducer1.init === false) this.props.confirmInit(); return <HomeComponent reportToMaster={this.trackComponentMountings} />}} />
                                    <Route path={['/portfolio', '/resume', '/about']} component={() => {
                                        if(this.props.appState.reducer1.init) return <HomeComponent reportToMaster={this.trackComponentMountings} />
                                        else return <Redirect to="/home" />
                                    }
                                    } />
                                </div>
                            </div>
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    }

}

const mapStateToProps = state => {
    return {
        appState: state
    }

}

const mapDispatchToProps = dispatch => {
    return {
        confirmInit: () => dispatch({ 'type': ACTION_TYPES.INIT }),
        loggedAction: () => dispatch({ 'type': 'A' }),
        logoutAction: () => dispatch({ 'type': 'B' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);