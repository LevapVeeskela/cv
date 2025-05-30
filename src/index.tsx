import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App';
import reportWebVitals from './configs/reportWebVitals';
import './layout/index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

reportWebVitals();
