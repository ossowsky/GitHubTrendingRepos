import React from 'react';
import { observer, inject } from "mobx-react";
import GitHubAppContainer from './components/GitHubApp/GitHubAppContainer';


const App = () => <GitHubAppContainer />


export default inject("store")(observer(App));
