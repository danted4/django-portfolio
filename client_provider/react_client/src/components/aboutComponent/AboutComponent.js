import React from 'react';
import { isMobile } from 'react-device-detect';

export default class AboutComponent extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.reportToParent('/about','.aboutmarker')
    }
    render(){
        return <React.Fragment>
            <div className="viewport-height-80 clr d4 fnt m3">
            <div className="row no-gutters">
                <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
                    <div className="viewport-height-5"></div>
                    <h2>About</h2>
                </div>
                <div className="col-lg-12 col-sm-12 col-xs-12">
                <div className="viewport-height-10"></div>
                </div>
                <div className={isMobile ? 'aboutmarker col-lg-6 col-sm-6 col-xs-6 text-center b_b' :'aboutmarker col-lg-6 col-sm-6 col-xs-6 text-center b_r'} >
                    <h3>me()</h3>
                    <p className={isMobile ? 'padd_text text-justify':''}>Since childhood i'm drawn to computers.
                        {isMobile ? null : <br/> }
                        How they work and what they can do has always fascinated me.
                        {isMobile ? null : <br/> }
                        While scrolling down you might have noticed,
                        {isMobile ? null : <br/> }
                        I also enjoy <span className="b_light">developing games</span>, not only in javascript, but
                        {isMobile ? null : <br/> }
                        on <span className="b_light">Unity</span> and <span className="b_light">C#</span> combination as well. It's my hobby.
                        {isMobile ? ' ' : <br/> }
                        The love for new techs has steered my career
                        {isMobile ? null : <br/> }
                        from <span className="b_light">Unix</span> and <span className="b_light">Python</span> automation in early days to
                        {isMobile ? null : <br/> }
                        <span className="b_light"> Modern Web Full Stack.</span>
                    </p>
                </div>
                <div className={isMobile ?'aboutmarker col-lg-6 col-sm-6 col-xs-6 text-center b_b' :'aboutmarker col-lg-6 col-sm-6 col-xs-6 text-center b_l'}>
                    <h3><span className="fnt m2">this</span>.website()</h3>
                    <p className={isMobile ? 'padd_text text-justify':''}>The stack used to build this website is 
                        {isMobile ? ' ' : <br/> }
                    <span className="b_light">Django </span> which is hosted on pythonanywhere cloud
                    {isMobile ? null : <br/> }
                    and acts as a container for the client which
                    {isMobile ? null : <br/> }
                    is built in <span className="b_light">React. </span>
                    This is the main client app running inside django. 
                    {isMobile ? null : <br/> }This project has been 
                    used as {isMobile ? null : <br/> }an exploratory case, in order to develop my
                    knowledge on django.</p>
                </div>
            </div>
            </div>
        </React.Fragment>
    }
}