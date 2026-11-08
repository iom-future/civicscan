import React from 'react';

export default function Container({ children, className = '', as: Component = 'div' }) {
  return (
    <Component className={`mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-10 ${className}`}>
      {children}
    </Component>
  );
}

