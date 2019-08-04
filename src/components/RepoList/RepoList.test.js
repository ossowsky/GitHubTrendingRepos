import React from 'react';
import ReactDOM from 'react-dom';
import RepoList from './RepoList';
import store from "./../../ReposStore";


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RepoList store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
