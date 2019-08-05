import React from 'react'
import "./Header.scss"


const Header = () => (
  <div>
    <a href="https://github.com/ossowsky/GitHubTrendingRepos">
      <img alt="gitHub logo" src={require("../../assets/images/GitHub-Mark-Light-64px.png")} />
    </a>
    <hgroup className="hgroup">
      <h1 className="hgroup__title">GitHub</h1>
      <h3 className="hgroup__subtitle">trending repositories</h3>
    </hgroup>
  </div>
)


export default Header
