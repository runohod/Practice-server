import { QueryProvider } from '@/app/providers';
import { AppRoutes } from '@/app/routes';

export const App = () => {
  return (
    <QueryProvider>
      <AppRoutes />
    </QueryProvider>
  );
};