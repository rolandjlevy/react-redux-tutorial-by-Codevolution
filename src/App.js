import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
// import CakeContainer from './components/CakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        {/*<CakeContainer />*/}
      </div>
    </Provider>
  );
}

export default App;