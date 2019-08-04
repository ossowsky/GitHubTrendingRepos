import React from 'react';
import PropTypes from 'prop-types';
import "./RepoListItem.scss";


const RepoListItem = ({ author, description, language, name, stars, url }) => (
  <div className="repoListItem">
    <header className="repoListItem__header">
      <span className="header__title">{name}</span>
    </header>
    <main className="repoListItem__content">
      <p className="content__description">{description}</p>
      <a className="content__link" href={url} rel="noopener noreferrer" target="_blank">&#x27A5; visit</a>
    </main>
    <hr className="hr" />
    <footer className="repoListItem__footer">
      <div className="footer__author">
        <span>&#x270E; {author}</span>
      </div>
      <div className="footer__star">
        <span>&#9733; {stars}</span>
      </div>
      <div className="footer__language">
        <span>&#9881; {language}</span>
      </div>
    </footer>
  </div>
)

RepoListItem.defaultProps = {
  language: "-"
}

RepoListItem.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
  name: PropTypes.string,
  stars: PropTypes.number,
  url: PropTypes.string
}


export default RepoListItem
