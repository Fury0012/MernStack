import React from 'react';
import Tabs from './Tabs';
import './index.css';

const tabItems = [
  { label: 'Tab 1', content: 'Content for Tab 1' },
  { label: 'Tab 2', content: 'Content for Tab 2' },
  { label: 'Tab 3', content: 'Content for Tab 3' }
];

function App() {
  return (
    <div className="App">
      <Tabs items={tabItems} />
    </div>
  );
}

export default App;
