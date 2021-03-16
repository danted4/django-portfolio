import React from 'react';
import { isMobile, isMobileOnly } from 'react-device-detect';
import { showStackNodes, showMobileStackNodes } from '../treeComponent/treeComponent';
export default class DescComponent extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      showFullStack: false,
      viewTrigger: true,
      screenOrientation: 'P'
    }
  }
  setScreenOrientation = () => {
    if (window.matchMedia("(orientation: portrait)").matches) {
      console.log('orientation: portrait');
      this.setState({
        screenOrientation: 'P'
      });
    }

    if (window.matchMedia("(orientation: landscape)").matches) {
      console.log('orientation: landscape');
      this.setState({
        screenOrientation: 'L'
      });
    }
  }

  componentDidMount() {
    this.props.reportToParent('/home', '.homemarker');
    window.addEventListener("resize", this.setScreenOrientation);
  }

  toggleHoverState = (val) => {
    this.setState({ showFullStack: val });
  }

  render() {
    return <React.Fragment>
      <div className="viewport-height-80 text-center">
        <div className={isMobile && (this.screenOrientation === 'P') ? "viewport-height-10" : "viewport-height-20"}>
        </div>
        <h1 className="fnt m2">
          Hi
                </h1>
        <br />
        <h4>
          <span className="fnt d3">I am </span> <span className="fnt m2">Kanav Sharma.</span>
        </h4>
        <br />
        <h6 className="fnt d3 homemarker"> I am a <span className="lnk-anim fnt m2" onMouseEnter={() => { this.toggleHoverState(true) }} >javascript full stack</span> developer.</h6>
        {!this.state.showFullStack ? <div className="viewport-height-20"> {isMobile ? <span className="fnt m2"><div>reactJs</div><div>expressJs</div><div>mongoDB</div><div>nodeJs</div></span> : null} </div> : this.state.showFullStack && !isMobileOnly ? showStackNodes() : showMobileStackNodes()}
        <br />
        <div><img className="cog" src="../static/frontend/public/cog.png"/>
        <img className="cog-back" style={{'margin-left':'-5px'}} src="../static/frontend/public/cog.png"/>
        {/* <img className="cog" style={{'margin-left':'-7px'}} src="./cog.png"/> */}
        </div>
      </div>

    </React.Fragment>
  }
}