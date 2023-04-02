import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    async function logout() {
        // Make an OPTIONS request to the backend to check for CORS support
        // await fetch('/logout', { method: 'OPTIONS' });
        // Make a POST request to the backend to log out the user
        await fetch('/logout', { method: 'DELETE' });
        // Redirect the user to the home page
        navigate('/');
      }

    logout();
  }, [navigate]);

  return <div>Logging out...</div>;
}

export default Logout;
