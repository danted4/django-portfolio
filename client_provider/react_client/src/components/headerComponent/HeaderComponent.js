import React from 'react';
import ReactDOM from 'react-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { isMobile } from 'react-device-detect';
import { scrollToElement } from '../../utils/scrollManager';

const TOPNAV = {
    resume: '/resume',
    home: '/home',
    portfolio: '/portfolio',
    about: '/about'
}
const activeRt = isMobile ? 'fnt d4 bold' : 'fnt d4 bold glow';
const regularRt = 'fnt m2';

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.lastClicked = '/home';
    }

    manageRoutes = (pathname, event) => {
        event.preventDefault();
        let componentNode = ReactDOM.findDOMNode(this),
            buttonNode = null,
            collapsedNode = null;
        if ((componentNode instanceof HTMLElement) && isMobile ) {
            buttonNode = componentNode.querySelector('button.clr.m2.navbar-toggler');
            collapsedNode = componentNode.querySelector('button.clr.m2.navbar-toggler.collapsed');
            /*Simulate button click to hide nav */
            if(buttonNode && !collapsedNode){
            setTimeout(() => {
                buttonNode.click();
            })}
        }
        /* discourage multiple unnecessary clicks when component is already in view*/
        if (this.lastClicked !== pathname) {
            this.lastClicked = pathname;
            this.props.handleScroll(pathname);
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.activeRouteName !== nextProps.activeRouteName) {
            return true;
        }
        else return false;
    }
    componentDidUpdate() {
        this.lastClicked = this.props.activeRouteName;
        this.props.history.push(this.props.activeRouteName);
    }

    render() {
        let path = this.props.activeRouteName;
        return <React.Fragment>
            <Navbar className="clr d4 shadownav" expand="lg" fixed="top">
                <Navbar.Brand onClick={(e) => { this.manageRoutes(TOPNAV.home, e) }} className={path == TOPNAV.home ? activeRt : regularRt} as={Link} to={TOPNAV.home}>{path == TOPNAV.home ? '|< / >' : '|< \\ >'}</Navbar.Brand>
                <Navbar.Toggle className="clr m2" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={(e) => { this.manageRoutes(TOPNAV.portfolio, e) }} className={path == TOPNAV.portfolio ? activeRt : regularRt} as={Link} to={TOPNAV.portfolio}>.portfolio()</Nav.Link>
                        <Nav.Link onClick={(e) => { this.manageRoutes(TOPNAV.resume, e) }} className={path == TOPNAV.resume ? activeRt : regularRt} as={Link} to={TOPNAV.resume}>.getResume()</Nav.Link>
                        <Nav.Link onClick={(e) => { this.manageRoutes(TOPNAV.about, e) }} className={path == TOPNAV.about ? activeRt : regularRt} as={Link} to={TOPNAV.about}>.about()</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    }

}

export default withRouter(HeaderComponent);