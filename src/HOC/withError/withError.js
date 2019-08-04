import React, { Component } from "react";
import "./withError.scss"


const withError = (WrappedComponent) => {

  return class withError extends Component {
    render() {
      if (this.props.store.isError !== null) {

        return (
          <div className="error">
            <p>gitHub API error please try again later...</p>
            <span className="error__emoji">&#9785;</span>
          </div>
        )
      }

      return (
        <WrappedComponent { ...this.props } />
      )
    }
  }
}


export default withError;
