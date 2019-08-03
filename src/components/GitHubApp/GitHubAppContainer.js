import React, { Component } from 'react';
import GitHubApp from "./GitHubApp";
import { observer, inject } from "mobx-react"


class GitHubAppContainer extends Component {
  componentDidMount() {
    this.props.store.loadData();
  }

  prepareRepos = (repos) => {
    return repos = repos.map(repo => ({ 
      author: repo.author, 
      description: repo.description,
      language: repo.language,
      name: repo.name,
      stars: repo.stars
    }))
  }

  render() {
    const { repos, sortByStars, updateData } = this.props.store;

    return (
      <GitHubApp repos={repos} sortByStars={sortByStars} updateData={updateData} />
    )
  }
}


export default inject("store")(observer(GitHubAppContainer))
