import React from 'react';
import Demo from './components/Demo';
import DemoHeader from './components/DemoHeader';
import BaiTapLayout1 from './components/BaiTapLayout1/BaiTapLayout1';
import BaiTapLayout2 from './components/BaiTapLayout2/BaiTapLayout2';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import Styling from './StylingComponent/Styling';
import RenderWithState from './RenderWithState/RenderWithState';
import ChangeCar from './RenderWithState/ChangeCar/ChangeCar';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaiTapThucHanhLayout from './components/BaiTapThucHanhLayout/BaiTapThucHanhLayout';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BaiTapThucHanhLayout/>
      </header>
    </div>
  );
}

export default App;
