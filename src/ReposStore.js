import axios from "axios";
import { action, observable, decorate } from "mobx";
import { fetchRepositories } from '@huchenme/github-trending';


const BASE_API_URL = "https://github-trending-api.now.sh/";

class ReposStore {
  isError = null;
  isLoading = true;
  languages = [{ 
    name: "all", 
    urlParam: ""
  }];
  repos = [];
  selectedInterval = (sessionStorage.getItem('gitHubFilters') !== null) ? (JSON.parse(sessionStorage.getItem("gitHubFilters"))).interval : "daily";
  selectedLanguage = (sessionStorage.getItem('gitHubFilters') !== null) ? (JSON.parse(sessionStorage.getItem("gitHubFilters"))).language : "";
  sortAsc = true;

  loadData = () => {
    if (sessionStorage.getItem('gitHubFilters') !== null) {
      const gitHubFilters = JSON.parse(sessionStorage.getItem("gitHubFilters"));
      const language = gitHubFilters.language;
      const interval = gitHubFilters.interval;

      fetchRepositories({ language: language, since: interval })
      .then(repositories => {
        this.setData(this.prepareRepos(repositories));
      })
    }
    else {
      axios.get(`${BASE_API_URL}repositories?`)
      .then(response => {
        this.setData(this.prepareRepos(response.data));
      })
      .catch(error => {
        console.log(error)
        this.setError();
      })
    }
  }

  updateData = (interval, language) => {
    fetchRepositories({ language: language, since: interval })
    .then(repositories => {
      this.setData(this.prepareRepos(repositories));
    })
  }
  
  getAllLanguages = () => {
    axios.get(`${BASE_API_URL}languages`)
    .then(response => {
      this.setAllLanguages(response.data)
    })
    .catch(error => {
      console.log(error)
      this.setError();
    })
  }

  setAllLanguages = languages => this.languages = [...this.languages, ...languages];

  setData = data => {
    this.repos = data;
    this.isLoading = false;
  }
  
  saveFilters = () => sessionStorage.setItem(
    "gitHubFilters", 
    JSON.stringify({ interval: this.selectedInterval, language: this.selectedLanguage })
  )

  setError = () => {
    this.isError = true;
    this.isLoading = false;
  }

  setLanguage = language => {
    this.selectedLanguage = language;
    this.saveFilters();
  }

  setInterval = interval => {
    this.selectedInterval = interval;
    this.saveFilters();
  }

  sortByStars = () => {
    const sortedRepos = this.repos.sort((repo1, repo2) => (
      this.sortAsc ? repo1.stars - repo2.stars : repo2.stars - repo1.stars
    ))

    this.sortAsc = !this.sortAsc;
    this.repos = sortedRepos;
  }

  prepareRepos = (repos) => {
    return repos = repos.map(repo => ({ 
      author: repo.author, 
      description: repo.description,
      language: repo.language,
      name: repo.name,
      stars: repo.stars,
      url: repo.url
    }))
  }
}

decorate(ReposStore, {
  getLanguageFromFilters: action,
  isError: observable,
  isLoading: observable,
  languages: observable,
  repos: observable,
  selectedInterval: observable,
  selectedLanguage: observable,
  setAllLanguages: observable,
  setData: action,
  setInterval: action,
  setLanguage: action,
  sortAsc: observable
});

const store = new ReposStore();


export default store;
