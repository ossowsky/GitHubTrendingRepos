import React, { Component } from 'react';
import GitHubApp from "./GitHubApp";
import { observer, inject } from "mobx-react"
import { action, decorate, runInAction } from "mobx"


class GitHubAppContainer extends Component {
  componentDidMount() {
    this.props.store.loadData();
  }
    
  /*

  updateData = (interval, language) => {
    console.log(interval, language)
    // axios.get(`${API_URL}since=${since}`)
    // .then(response => {
    //   this.setState({ repos: response.data })
    // })
    // .catch(error => {
    //   console.log(error)
    // })
    //console.log(`language: ${language}, interval: ${interval}`)
    fetchRepositories({ language: language, since: interval }).then(repositories => {
      //this.setState({ repos: repositories })
      this.props.store.repos = this.prepareRepos(repositories)
      console.log("nadpisane?", this.props.store.repos)
    });
  }  
*/
  sortByStars = () => {
    const sortedRepos = this.state.repos.sort((repo1, repo2) => (
      this.state.sortAsc ? repo1.stars - repo2.stars : repo2.stars - repo1.stars
    ))
    this.setState({
      repos: sortedRepos,
      sortAsc: !this.state.sortAsc
    })
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
    const { repos } = this.props.store;

    return (
      <GitHubApp repos={repos} sortByStars={this.sortByStars} updateData={this.updateData} />
    )
  }
}


export default inject("store")(observer(GitHubAppContainer))
