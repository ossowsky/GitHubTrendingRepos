import React from 'react';
import GitHubAppContainer from './components/GitHubApp/GitHubAppContainer';
import { observer, inject } from "mobx-react"


const App = () => <GitHubAppContainer />


export default inject("store")(observer(App));
