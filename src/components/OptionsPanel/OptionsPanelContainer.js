import React, { Component } from 'react';
import OptionsPanel from "./OptionsPanel";


export default class OptionsPanelContainer extends Component {
  state = {
    selectedInterval: "daily",
    selectedLanguage: ""
  }

  handleOptionChange = (e) => this.setState({ selectedInterval: e.target.value })

  handleLanguageChange = (e) => this.setState({ selectedLanguage: e.target.options[e.target.selectedIndex].value })

  componentDidUpdate(prevProps, prevState) {
    console.log("dupa1")
    const { selectedInterval, selectedLanguage } = this.state;

    if (selectedInterval !== prevState.selectedInterval || selectedLanguage !== prevState.selectedLanguage) {
      return this.props.updateData(selectedInterval, selectedLanguage)
    }
    console.log("dupa2")
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
