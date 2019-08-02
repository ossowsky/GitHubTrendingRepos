import React from 'react';
import RepoListItem from "../RepoListItem/RepoListItem";
import "./RepoList.scss";


export const RepoList = ({ repos }) => (
  <div className="repoList">
    {console.log("repos", repos)}
    <ul>
    {repos.map(({ author, description, language, name, stars }) => 
      <li>
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


export default RepoList
