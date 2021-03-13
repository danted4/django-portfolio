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
                <p className="margin-t-5x padding-r-l">I have always appreciated javascript and what it can do.</p>
                <p className="padding-r-l">What can be better than exploring it's power along with HTML5 canvas to create some fun games. I've created some of those and adding for you to explore.</p>
                <h1 className="portfoliomarker">Coming Soon ...</h1>
            </div>
        </React.Fragment>
    }
}