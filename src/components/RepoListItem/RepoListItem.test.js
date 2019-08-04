import React from 'react';
import ReactDOM from 'react-dom';
import RepoListItem from './RepoListItem';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RepoListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
