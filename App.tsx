import AuthProvider, { AuthContext } from '@/context/useAuthContext';
import { AppRoutes } from './src/routes/appRoutes';

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}


