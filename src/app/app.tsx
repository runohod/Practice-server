import { QueryProvider } from '@/app/providers';
import { HomePage } from '@/pages/homePage';

export const App = () => {
  return (
    <QueryProvider>
      <HomePage />
    </QueryProvider>
  );
};