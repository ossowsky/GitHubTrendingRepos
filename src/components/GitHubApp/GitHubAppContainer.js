import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GitHubApp from "./GitHubApp";
import { observer, inject } from "mobx-react";


class GitHubAppContainer extends Component {
  componentDidMount() {
    this.props.store.loadData();
  }

  render() {
    const { repos, sortByStars, updateData } = this.props.store;

    return (
      <GitHubApp repos={repos} sortByStars={sortByStars} updateData={updateData} />
    )
  }
}

GitHubAppContainer.defaultProps = {
  language: "-"
}

GitHubAppContainer.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      description: PropTypes.string,
      language: PropTypes.string,
      name: PropTypes.string,
      stars: PropTypes.number,
      url: PropTypes.string,
    }).isRequired
  ),
  sortByStars: PropTypes.func,
  updateData: PropTypes.func,
}



export default inject("store")(observer(GitHubAppContainer))
