
import React from 'react';
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-foreground mb-6">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-muted-foreground mb-8">
          The page at {location.pathname} could not be found.
        </p>
        <a href="/" className="px-5 py-2.5 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors inline-block">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
