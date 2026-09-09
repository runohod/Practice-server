import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // QueryClient главное хранилище (кэш) TanStack Query. QueryClientProvider — это React-провайдер (компонент-обёртка).
import type { ReactNode } from 'react';

const queryClient = new QueryClient();

export const QueryProvider = ({ children }: { children: ReactNode  }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}




