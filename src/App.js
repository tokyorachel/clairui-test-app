import logo from './logo.svg';
import './App.css';
import '@factorizeteam/clair-ui/dist/clairui.css';
import { CUIAvatar, CUIButton, CUIToggle } from '@factorizeteam/clair-ui';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <CUIButton>Use Clair UI</CUIButton>
        <CUIButton color="abricot">Use Clair UI</CUIButton>
        <CUIAvatar
          src="https://randomuser.me/api/portraits/women/18.jpg" />
        <CUIAvatar
          square
          src="https://randomuser.me/api/portraits/men/18.jpg" />
        <CUIToggle id="checkbox-1" color='citron' checked={true} />
        <CUIToggle id="checkbox-2" />
      </header>
    </div>
  );
}

export default App;
