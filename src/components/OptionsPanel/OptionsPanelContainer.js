import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OptionsPanel from "./OptionsPanel";
import { observer, inject } from "mobx-react";


class OptionsPanelContainer extends Component {
  handleOptionChange = (e) => {
    this.props.store.setInterval(e.target.value);
    this.props.store.updateData(e.target.value, this.props.store.selectedLanguage);
  }

  handleLanguageChange = (e) => {
    this.props.store.setLanguage(e.target.value);
    this.props.store.updateData(this.props.store.selectedInterval, e.target.value);
  }

  render() {
    const { sortByStars, selectedInterval, selectedLanguage } = this.props.store;

    return (
      <OptionsPanel 
        handleLanguageChange={this.handleLanguageChange} 
        handleOptionChange={this.handleOptionChange}
        selectedInterval={selectedInterval} 
        selectedLanguage={selectedLanguage}
        sortByStars={sortByStars}
      />
    )
  }
}

OptionsPanelContainer.defaultProps = {
  selectedInterval: "daily",
  selectedLanguage: ""
}

OptionsPanelContainer.propTypes = {
  sortByStars: PropTypes.func.isRequired,
  selectedInterval: PropTypes.string.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
}

export default inject("store")(observer(OptionsPanelContainer))