import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from "mobx-react"
import RepoListItem from "../RepoListItem/RepoListItem";
import "./RepoList.scss";


const RepoList = ({ repos }) => (
  <div className="repoList">
    <ul className="repoList__list">
    {repos && repos.map(({ author, description, language, name, stars, url }) => 
      <li className="list__item" key={url}>
        <RepoListItem 
          author={author} 
          description={description} 
          language={language} 
          name={name} 
          stars={stars}
          url={url}
        />
      </li>
    )}
    </ul>
  </div>
)

RepoList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      description: PropTypes.string,
      language: PropTypes.string,
      name: PropTypes.string,
      stars: PropTypes.number,
      url: PropTypes.string,
    })
  )
}


export default inject("store")(observer(RepoList))
