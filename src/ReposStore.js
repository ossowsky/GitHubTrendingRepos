import { action, configure, observable, decorate } from "mobx";
import axios from "axios";
import { fetchRepositories } from '@huchenme/github-trending';


const BASE_API_URL = "https://github-trending-api.now.sh/repositories?";

configure({ enforceActions: true });

class ReposStore {
  repos = [];
  sortAsc = true;

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
      //this.props.store.repos = this.prepareRepos(repositories)
      this.setData(repositories)
    });
  }  






}

decorate(ReposStore, {
  repos: observable,
  sortAsc: observable,
  setData: action
});

const store = window.store = new ReposStore()


export default store

//export default new ReposStore()