import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
const queryClient = new QueryClient();

function withAppProvider(Component: React.ElementType) {
  return function WrappedComponent() {
    return (
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Component />
      </QueryClientProvider>
    );
  };
}

export default withAppProvider;
