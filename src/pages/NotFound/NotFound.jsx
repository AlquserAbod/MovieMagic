// NotFound.js

import React from 'react';
import { TbError404 } from "react-icons/tb";
import './NotFound.css'
const NotFound = () => {
  return (
    <div className="not-found">
      <div className="error-icon">
        <TbError404 />

      </div>
      <p>Sorry, the page you are looking for might be in another castle.</p>
    </div>
  );
};

export default NotFound;
