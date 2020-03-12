import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import App from './App';
import { store, /*AuthIsLoaded*/ } from './__redux/store';
import { rrf } from './__redux/conf';

ReactDOM.render(
<Provider store={store}>
  <ReactReduxFirebaseProvider
    {...rrf}>
    <BrowserRouter>
      {/* <AuthIsLoaded> */}
        <App/>
      {/* </AuthIsLoaded> */}
    </BrowserRouter>
  </ReactReduxFirebaseProvider>
</Provider>,
document.getElementById('root'));
serviceWorker.unregister();
