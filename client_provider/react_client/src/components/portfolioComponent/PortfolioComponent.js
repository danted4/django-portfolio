import React from 'react';

export default class PortfolioComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.reportToParent('/portfolio', '.portfoliomarker')
    }

    render() {
        return <React.Fragment>
            <div className="full-viewport-height clr d4 text-center fnt m3">
                <div className={"viewport-height-5"}>
                </div>
                <h2>Portfolio</h2>
                <p className="margin-t-5x padding-r-l">I have always appreciated <span className="fnt m2">javascript</span> and what it can do.</p>
                <p className="padding-r-l">What can be better than exploring it's power along with <span className="fnt m2">HTML5 canvas</span> to create some fun <span className="b_light">games</span>. I've created some of those and adding for you to explore.</p>
                <a className="portfoliomarker no-decor" target="_new" rel="noopener" href="https://danted4.github.io/jsGaming/"><img className="hvrAnimLight" height='200' src="./games.jpg" /></a>
                <div className={"viewport-height-5"}></div>
                <h1>More Coming Soon ...</h1>
            </div>
        </React.Fragment>
    }
}