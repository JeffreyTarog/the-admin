import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/main'; // Adjust the path accordingly
import './assets/base.css'

import { Provider } from 'react-redux';
import store from './stores/misc/store';

// Components

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
