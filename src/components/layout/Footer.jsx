import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Ropa Diferente. Derechos reservados</p>
      </div>
    </footer>
  );
}
