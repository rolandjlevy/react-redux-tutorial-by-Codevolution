import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';
import HooksIcecreamContainer from './components/HooksIcecreamContainer';
import HotdogContainer from './components/HotdogContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IcecreamContainer />
        <HooksIcecreamContainer />
        <HotdogContainer />
      </div>
    </Provider>
  );
}

export default App;