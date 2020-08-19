import React from 'react';
import Demo from './components/Demo';
import DemoHeader from './components/DemoHeader';
import BaiTapLayout1 from './components/BaiTapLayout1/BaiTapLayout1';
import BaiTapLayout2 from './components/BaiTapLayout2/BaiTapLayout2';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HandleEvent />
      </header>
    </div>
  );
}

export default App;
