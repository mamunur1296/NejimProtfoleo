import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useScrollToNavigate = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 10) {
        // Adjust these paths as needed
        if (pathname === '/') {
          navigate('/about');
        } else if (pathname === '/about') {
          navigate('/contact');
        } // Add more conditions as needed
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, navigate]);
};

export default useScrollToNavigate;
