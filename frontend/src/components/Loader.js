import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader ease-linear border-t-4 border-cyan-600 border-solid rounded-full animate-spin w-12 h-12"></div>
    </div>
  );
};

export default Loader;