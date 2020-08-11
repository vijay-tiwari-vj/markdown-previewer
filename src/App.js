import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import MarkedContextProvider from './contexts/MarkedContext';
import Editor from './components/Editor'
import Previewer from './components/Previewer';

function App() {
  return (
    <div className="md-previewer">
      <MarkedContextProvider>
        <Tabs defaultActiveKey="markdown" id="tabs">
          <Tab eventKey="markdown" title="Markdown">
            <Editor />
          </Tab>
          <Tab eventKey="preview" title="Preview">
            <Previewer />
          </Tab>
        </Tabs>
      </MarkedContextProvider>
    </div>
  );
}

export default App;
