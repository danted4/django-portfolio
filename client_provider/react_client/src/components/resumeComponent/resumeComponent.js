import { Button } from 'react-bootstrap';
import React from 'react';
import { isMobile } from 'react-device-detect';

export default class ResumeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { downloading : false };

    }
    componentDidMount() {
        this.props.reportToParent('/resume', '.resumemarker')
    }

    downloadHandler = () => {
        this.setState({downloading : true}, ()=>{ setTimeout(()=>{this.setState({downloading:false})},5000) })
    }
    render() {
        return <React.Fragment>
            <div className="viewport-height-80 text-center fnt m3">
                <div className={"viewport-height-5"}>
                </div>
                <h2>Looking to <span className="fnt m2">hire</span>?</h2>
                <div className={"viewport-height-10"}>
                </div>
                <div>
                {this.state.downloading ? <span role="presentation" aria-hidden="true"><img className="cogSmall" src="../static/frontend/public/cog.png" /><img className="cogSmall-back" src="../static/frontend/public/cog.png" /></span> : null }
                <a id="downloader" className="resumemarker no-decor" onClick={this.downloadHandler} href="https://docs.google.com/document/d/1FQG5x-RQwq0eU1JXURGm6Y9oN-EDqP4JchN075hL540/export?format=pdf">
                    <Button className="hvrAnim" varient="primary" >Download Resume</Button>
                </a>
                {this.state.downloading ? <span role="presentation" aria-hidden="true"><img className="cogSmall" src="../static/frontend/public/cog.png" /><img className="cogSmall-back" src="../static/frontend/public/cog.png" /></span> : null }
                </div>
                <div className={"viewport-height-10"}>
                </div>
                <h4>Let's get in <span className="fnt m2">touch</span>...</h4>
                <div className={"viewport-height-10"}>
                </div>
                <div className={isMobile ? "" : "row no-gutters"}>
                    {isMobile ? null : <div className="col-lg-3"></div>}
                    <div style={isMobile ? { display: 'inline-block' } : {}} className={isMobile ? "" : "col-lg-2 col-xs-2"}>
                        <a className="no-decor" target="_new" rel="noopener" href="https://www.linkedin.com/in/sharma-kanav"> <img className="hvrAnim" src="../static/frontend/public/ln.png" /></a>
                    </div>
                    <div style={isMobile ? { display: 'inline-block', margin: '0px 5vw' } : {}} className={isMobile ? "" : "col-lg-2 col-xs-2"}>
                        <a className="no-decor" target="_new" rel="noopener" href="https://www.facebook.com/Danted4"><img className="hvrAnim" src="../static/frontend/public/fb.png" /></a>
                    </div>
                    <div style={isMobile ? { display: 'inline-block' } : {}} className={isMobile ? "" : "col-lg-2 col-xs-2"}>
                        <a className="no-decor" target="_new" rel="noopener" href="https://twitter.com/Kanav94sharma"> <img className="hvrAnim" src="../static/frontend/public/tw.png" /></a>
                    </div>
                    {isMobile ? null : <div className="col-lg-3"></div>}
                </div>
            </div>
        </React.Fragment>
    }
}