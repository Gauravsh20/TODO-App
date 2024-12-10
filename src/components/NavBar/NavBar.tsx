import React from 'react';

interface NavBarProps {
  onFilterChange: (filter: 'all' | 'active' | 'completed') => void;
  currentFilter: 'all' | 'active' | 'completed';
}

const NavBar: React.FC<NavBarProps> = ({ onFilterChange, currentFilter }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Todo App</h1>
      </div>
      <ul className="nav-links">
        <li>
          <button
            className={`nav-link ${currentFilter === 'all' ? 'active' : ''}`}
            onClick={() => onFilterChange('all')}
          >
            All Tasks
          </button>
        </li>
        <li>
          <button
            className={`nav-link ${currentFilter === 'active' ? 'active' : ''}`}
            onClick={() => onFilterChange('active')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={`nav-link ${currentFilter === 'completed' ? 'active' : ''}`}
            onClick={() => onFilterChange('completed')}
          >
            Completed
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;