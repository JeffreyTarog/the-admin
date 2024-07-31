import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/main'; // Adjust the path accordingly
import './assets/base.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="flex h-screen w-screen bg-slate-200 dark:bg-slate-800">
          <div className="flex flex-col w-full h-full overflow-y-auto transition-all duration-150">
            <AppRoutes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
