import React, { Component } from 'react';
import ReportDetailes from './ReportDetailes';

export default class Report extends Component {
  render() {
    
    const { res, isDefect } = this.props.res;
    console.log(res, isDefect);
    console.log(this.props)
    const hasDefect = true;
    return (
      true ? <div className="report">
        <nav className=" text-white shadow-sm py-2">
          <p className="display-4 text-center">Report</p>
        </nav>
        <div className="text-center mt-5 h2">
        {isDefect == 1 ? <p className="text-danger">The image is Defected</p> : <p className="text-success">The image is NOT defected</p>}
        </div>
        {hasDefect ? <ReportDetailes input={this.props.res.input}  mask={res} /> : <p>There are no defects</p>}
      </div> : <h1 className="display-2 text-center">404</h1>
    )
  }
}
