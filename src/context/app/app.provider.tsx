import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5, refetchOnWindowFocus: false },
  },
});

function withAppProvider(Component: React.ElementType) {
  return function WrappedComponent() {
    const methods = useForm();
    return (
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <FormProvider {...methods}>
          <Component />
        </FormProvider>
      </QueryClientProvider>
    );
  };
}

export default withAppProvider;
