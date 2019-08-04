import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OptionsPanel from "./OptionsPanel";
import { observer, inject } from "mobx-react";
import withError from "../../HOC/withError/withError";


class OptionsPanelContainer extends Component {
  handleOptionChange = (e) => {
    this.props.store.setInterval(e.target.value);
    this.props.store.isLoading = true;
    this.props.store.updateData(e.target.value, this.props.store.selectedLanguage);
  }

  handleLanguageChange = (e) => {
    this.props.store.setLanguage(e.target.value);
    this.props.store.isLoading = true;
    this.props.store.updateData(this.props.store.selectedInterval, e.target.value);
  }

  render() {
    const { languages, sortByStars, selectedInterval, selectedLanguage } = this.props.store;

    return (
      <OptionsPanel
        handleLanguageChange={this.handleLanguageChange} 
        handleOptionChange={this.handleOptionChange}
        languages={languages}
        selectedInterval={selectedInterval} 
        selectedLanguage={selectedLanguage}
        sortByStars={sortByStars}
      />
    )
  }
}

OptionsPanelContainer.defaultProps = {
  selectedInterval: "daily",
  selectedLanguage: "",
}

OptionsPanelContainer.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    })
  ),
  sortByStars: PropTypes.func,
  selectedInterval: PropTypes.string.isRequired,
  selectedLanguage: PropTypes.string.isRequired
}


export default inject("store")(observer(withError(OptionsPanelContainer)))
