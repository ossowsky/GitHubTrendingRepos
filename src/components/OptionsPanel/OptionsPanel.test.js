import React from 'react';
import ReactDOM from 'react-dom';
import OptionsPanel from './OptionsPanel';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OptionsPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});

