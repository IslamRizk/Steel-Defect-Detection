import React, { Component } from 'react'

export default class ReportDetailes extends Component {
  render() {
    console.log(this.props.input);
    return (
      <div className="container">
        <div className="row py-5">
          <div className="col-sm">
            <p className="h3">Steel Image</p>
            <img src={this.props.input} className="figure-img img-fluid rounded" alt="" />
          </div>
          <div className="col-sm">
            <p className="h3">Mask</p>
            <img src={"/imgs/output" + this.props.mask} className="figure-img img-fluid rounded" alt="" />
          </div>
        </div>
        <hr />
        <a href="/">check another one?</a>
      </div>
    )
  }
}
