import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductWidgetList from './components/ProductWidgetList';
import WidgetContextProvider from './context/WidgetContext';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
       <WidgetContextProvider>
      <div className="App p-20 max-w-6xl mx-auto my-20 border rounded-lg bg-[#f9f9f9]">
        <h1 className='text-2xl font-bold'>Per product widgets</h1>
        <hr className='my-4 border-2' />
        <ProductWidgetList />
      </div>
      </WidgetContextProvider>
    </QueryClientProvider>
  );
};

export default App;