import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Only home page route */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          
          {/* Redirect all other routes to home */}
          <Route path="*" element={<MainLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
