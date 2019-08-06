import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from "mobx-react";
import RepoList from "../RepoList";
import OptionsPanelContainer from "../OptionsPanel";
import Header from "../Header";
import "./GitHubApp.scss";


const GitHubApp = ({ languages, repos, updateData }) => (
  <div className="app">
    <header className="app__header">
      <Header />
    </header>
    <div className="app__options-panel">
      <OptionsPanelContainer languages={languages} repos={repos} updateData={updateData} />
    </div>
    <main className="app__repo-list">
      <RepoList repos={repos} />
    </main>
    <footer className="app__footer">
      <p>&copy; 2019 ossowsky</p>
    </footer>
  </div>
)

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
  updateData: PropTypes.func,
}


export default inject("store")(observer(GitHubApp))
