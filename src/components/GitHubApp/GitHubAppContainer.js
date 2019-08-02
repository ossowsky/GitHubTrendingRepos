import React, { Component } from 'react';
import GitHubApp from "./GitHubApp";
import axios from "axios";
import { fetchRepositories } from '@huchenme/github-trending';


const BASE_API_URL = "https://github-trending-api.now.sh/repositories?";


export default class GitHubAppContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      repos: [],
      sortAsc: true
    }
  }

  componentDidMount() {
    axios.get(BASE_API_URL)
    .then(response => {
      this.setState({ repos: this.prepareRepos(response.data) })
    })
    .catch(error => {
      console.log(error)
    })
  }

  updateData = (interval, language) => {
    // axios.get(`${API_URL}since=${since}`)
    // .then(response => {
    //   this.setState({ repos: response.data })
    // })
    // .catch(error => {
    //   console.log(error)
    // })
    console.log(`language: ${language}, interval: ${interval}`)
    fetchRepositories({ language: language, since: interval }).then(repositories => {
      this.setState({ repos: repositories })
    });
  }  

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
    const { repos } = this.state;

    return (
      <GitHubApp repos={repos} sortByStars={this.sortByStars} updateData={this.updateData} />
    )
  }
}
