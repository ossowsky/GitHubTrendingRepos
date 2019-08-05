import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from "mobx-react";
import RepoList from "../RepoList/RepoList";
import OptionsPanelContainer from "../OptionsPanel/OptionsPanelContainer";
import Header from "../Header/Header";
import "./GitHubApp.scss";


class GitHubApp extends React.Component {
  render() {
    const { languages, repos, sortByStars, updateData } = this.props

    return (
      <div className="app">
        <header className="app__header">
          <Header />
        </header>
        <div className="app__options">
          <OptionsPanelContainer languages={languages} repos={repos} sortByStars={sortByStars} updateData={updateData}/>
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

GitHubApp.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      description: PropTypes.string,
      language: PropTypes.string,
      name: PropTypes.string,
      stars: PropTypes.number,
      url: PropTypes.string,
    })
  ),
  sortByStars: PropTypes.func,
  updateData: PropTypes.func,
}


export default inject("store")(observer(GitHubApp))
