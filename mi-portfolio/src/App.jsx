import { AppProvider } from './components/context/AppProvider';
import AppRouter from './Routes/AppRouter';

function App() {
  return (
    <AppProvider>
      <AppRouter/>
    </AppProvider>
  );
}

export default App;
