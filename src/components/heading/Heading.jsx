import React from 'react';
import './Heading.css';

function Heading({ children }) {
  return (
    <div className="heading">
        { children }
    </div>
  )
}

export default Heading