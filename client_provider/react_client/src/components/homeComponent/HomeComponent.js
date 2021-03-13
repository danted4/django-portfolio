import React from 'react';
import PortfolioComponent from '../portfolioComponent/PortfolioComponent';
import ResumeComponent from '../resumeComponent/resumeComponent';
import DescComponent from '../descComponent/DescComponent';
import AboutComponent from '../aboutComponent/AboutComponent';
import FooterComponent from '../footerComponent/FooterComponent';

export default class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }


  gatherComponentMountingData = (componentName, componentMarkerElementClass) => {
    this.props.reportToMaster(componentName, componentMarkerElementClass);
  }

  render() {
    return <React.Fragment>
      {/* Main Description Component */}
      <DescComponent reportToParent={this.gatherComponentMountingData} />

      {/* Portfolio Component */}
      <PortfolioComponent reportToParent={this.gatherComponentMountingData} />

      {/* Resume Component */}
      <ResumeComponent reportToParent={this.gatherComponentMountingData} />

      {/* About Component */}
      <AboutComponent reportToParent={this.gatherComponentMountingData} />
      
      {/* Footer Component */}
      <FooterComponent/>
    </React.Fragment>
  }
}