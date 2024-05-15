import React, { useState } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>Menu</button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <a href="/">Homepage</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
