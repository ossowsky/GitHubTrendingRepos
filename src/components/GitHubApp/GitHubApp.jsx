import React from 'react';
import "./GitHubApp.scss";
import RepoList from "../RepoList/RepoList";
import OptionsPanelContainer from "../OptionsPanel/OptionsPanelContainer";
import Header from "../Header/Header";
import { observer, inject } from "mobx-react"


class GitHubApp extends React.Component {
  render() {
    const {  repos, sortByStars, updateData } = this.props

    return (
      <div className="app">
        <header className="app__header">
          <Header />
        </header>
        <div className="app__options">
          <OptionsPanelContainer repos={repos} sortByStars={sortByStars} updateData={updateData}/>
        </div>
        <main className="app__repoList">
          <RepoList repos={repos } />
        </main>
        <footer className="app__footer">
          <p>&copy; ossowsky</p>
        </footer>
      </div>
    )
  }
}

export default inject("store")(observer(GitHubApp))
