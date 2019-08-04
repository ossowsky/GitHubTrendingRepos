import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
import GitHubAppContainer from './GitHubApp';
import GitHubApp from "./GitHubApp";
import store from "../../ReposStore";


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <GitHubAppContainer>
        <GitHubApp />
      </GitHubAppContainer>
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
