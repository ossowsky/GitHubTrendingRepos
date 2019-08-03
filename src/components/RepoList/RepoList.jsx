import React from 'react';
import RepoListItem from "../RepoListItem/RepoListItem";
import "./RepoList.scss";
import { observer, inject } from "mobx-react"


const RepoList = ({ repos }) => (
  <div className="repoList">
    <ul>
    {repos.map(({ author, description, language, name, stars }, index) => 
      <li key={index}>
        <RepoListItem 
          author={author} 
          description={description} 
          language={language} 
          name={name} 
          stars={stars} 
        />
      </li>
    )}
    </ul>
  </div>
)


export default inject("store")(observer(RepoList))