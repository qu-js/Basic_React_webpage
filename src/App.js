import { useState} from 'react';
// import './App.css';
import Page from './component/Page';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [isDark, setIsDark] = useState(false);

  return ( // JSX를 리턴함
    <div className="App">
        <ThemeContext.Provider value={ {isDark, setIsDark} }>
          <Page isDark={isDark} setIsDark={setIsDark} />
        </ThemeContext.Provider>
    </div>
  );
}

export default App;
