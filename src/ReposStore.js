import { action, observable, decorate } from "mobx";
import axios from "axios";
import { fetchRepositories } from '@huchenme/github-trending';


const BASE_API_URL = "https://github-trending-api.now.sh/repositories?";


class ReposStore {
  repos = [];
  sortAsc = true;
  selectedInterval = "daily";
  selectedLanguage = "";

  loadData = () => {
    axios.get(BASE_API_URL)
    .then(response => {
      this.setData(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  setData = data => {
    this.repos = data;
  }

  updateData = (interval, language) => {
    console.log(`Interval:  ${interval}, language:  ${language}`)
    fetchRepositories({ language: language, since: interval })
    .then(repositories => {
      this.setData(repositories)
    });
  } 
  
  setLanguage = language => {
    this.selectedLanguage = language;
  }

  setInterval = interval => {
    this.selectedInterval = interval;
  }

  sortByStars = () => {
    const sortedRepos = this.repos.sort((repo1, repo2) => (
      this.sortAsc ? repo1.stars - repo2.stars : repo2.stars - repo1.stars
    ))

    this.sortAsc = !this.sortAsc;
    this.repos = sortedRepos;
  }
}

decorate(ReposStore, {
  repos: observable,
  selectedInterval: observable,
  selectedLanguage: observable,
  setData: action,
  setLanguage: action,
  setInterval: action,
  sortAsc: observable,
});

const store = window.store = new ReposStore()

export default store
