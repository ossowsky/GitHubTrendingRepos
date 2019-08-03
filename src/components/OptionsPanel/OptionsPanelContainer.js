import React, { Component } from 'react';
import OptionsPanel from "./OptionsPanel";
import { observer, inject } from "mobx-react"


class OptionsPanelContainer extends Component {
  state = {
    selectedInterval: "daily",
    selectedLanguage: ""
  }

  handleOptionChange = (e) => this.setState({ selectedInterval: e.target.value })

  handleLanguageChange = (e) => this.setState({ selectedLanguage: e.target.options[e.target.selectedIndex].value })

  componentDidUpdate(prevProps, prevState) {
    const { selectedInterval, selectedLanguage } = this.state;

    if (selectedInterval !== prevState.selectedInterval || selectedLanguage !== prevState.selectedLanguage) {
      
      return this.props.updateData(selectedInterval, selectedLanguage)
    }
  }

  render() {
    const { sortByStars } = this.props;
    const { selectedInterval, selectedLanguage } = this.state;

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


export default inject("store")(observer(OptionsPanelContainer))