import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import QuoteBlock from './components/QuoteBlock';
import ThemeProvider from './context/ThemeProvider';
import './styles/app.scss';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route index element={<QuoteBlock />} />
      </Route>
    )
  );
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
