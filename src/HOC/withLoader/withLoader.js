import React, { Component } from "react";
import "./withLoader.scss";


const withLoader = (WrappedComponent) => {

  return class withLoader extends Component {
    render() {
      if (this.props.store.isLoading === true) {

        return (
          <div className="loader"></div>
        )
      }

      return (
        <WrappedComponent { ...this.props } />
      )
    }
  }
}


export default withLoader;
