import './index.css';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const client = new QueryClient({
  defaultOptions: {},
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  </RecoilRoot>,
);
