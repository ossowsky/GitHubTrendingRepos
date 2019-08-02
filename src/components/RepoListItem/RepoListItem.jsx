import React from 'react';
import "./RepoListItem.scss";


const RepoListItem = ({ author, description, language, name, stars }) => (
  <div className="repoListItem">
    <header className="repoListItem__header">
      <span>{name}</span>
    </header>
    <main className="repoListItem__content">
      <p>{description}</p>
    </main>
    <footer className="repoListItem__footer">
      <div className="footer__item">
        <span>&#x270E; {author}</span>
      </div>
      <div className="footer__item">
        <span>&#9734; {stars}</span>
      </div>
      <div className="footer__item">
        <span>&#9881; {language}</span>
      </div>
    </footer>
  </div>
)

RepoListItem.defaultProps = {
  language: "-"
}

export default RepoListItem
