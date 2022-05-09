import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import store from './redux/Store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
