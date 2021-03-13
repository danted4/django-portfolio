import React from 'react';

export const showStackNodes = () => {
    return <React.Fragment>
        <div className="row no-gutters">
            <div style={{ borderRight: '1px solid #303c8c' }} className="col-lg-6 col-md-6 col-xs-6 viewport-height-5 ">
            </div>
            <div style={{ borderLeft: '1px solid #303c8c' }} className="col-lg-6 col-md-6 col-xs-6 viewport-height-5 ">
            </div>
        </div>
        <div className="row no-gutters">
            <div className="col-lg-4 col-md-4 col-xs-4 viewport-height-5 ">
            </div>
            <div style={{ borderTop: '2px solid #303c8c' ,borderLeft: '2px solid #303c8c' }} className="col-lg-1 col-md-1 col-xs-1 viewport-height-5 ">
            </div>
            <div style={{ borderTop: '2px solid #303c8c' ,borderLeft: '2px solid #303c8c',borderRight: '1px solid #303c8c' }} className="col-lg-1 col-md-1 col-xs-1 viewport-height-5 ">
            </div>
            <div style={{ borderTop: '2px solid #303c8c' ,borderRight: '2px solid #303c8c',borderLeft: '1px solid #303c8c' }} className="col-lg-1 col-md-1 col-xs-1 viewport-height-5 ">
            </div>
            <div style={{ borderTop: '2px solid #303c8c' ,borderRight: '2px solid #303c8c' }} className="col-lg-1 col-md-1 col-xs-1 viewport-height-5 ">
            </div>
            <div className="col-lg-4 col-md-4 col-xs-4 viewport-height-5 ">
            </div>
        </div>
        <div className="row no-gutters">
            <div className="col-lg-4 col-md-4 col-xs-4 viewport-height-5 ">
            </div>
            <div className="col-lg-1 col-md-1 col-xs-1 viewport-height-5 fnt m2 text-left">
                reactJs
            </div>
            <div className="col-lg-1 col-md-1 col-xs-1 viewport-height-5 fnt m2 text-left">
                nodeJS
            </div>
            <div className="col-lg-1 col-md-1 col-xs-1 viewport-height-5 fnt m2 text-left">
                django3
            </div>
            <div className="col-lg-1 col-md-1 col-xs-1 viewport-height-5 fnt m2 text-left">
                expressJS
            </div>
            <div className="col-lg-1 col-md-1 col-xs-1 viewport-height-5 fnt m2 text-left">
                mongoDB
            </div>
            <div className="col-lg-4 col-md-4 col-xs-4 viewport-height-5 ">
            </div>
        </div>
    </React.Fragment>
}


export const showMobileStackNodes = () => {
    return <React.Fragment>
                <div className="row no-gutters">
            <div  className="col-lg-6 col-md-6 col-xs-3 viewport-height-5 ">
            </div>
            <div className="col-lg-6 col-md-6 col-xs-6 viewport-height-5 ">
            </div>
        </div>
    </React.Fragment>

}