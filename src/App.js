import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

//import {persistor, store} from './stores/configureStore';
import AppNavigator from './navigation/index';

const App = () => {
  return (
//    <Provider store={store}>
//      <PersistGate persistor={persistor}>
        <AppNavigator />
//      </PersistGate>
//    </Provider>
  );
};

export default App;
