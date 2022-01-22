import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

function Header(props) {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', changeNav);

    return () => {
      window.removeEventListener('resize', changeNav);
    };
  });

  function changeNav(e) {
    e.target.innerWidth >= 800 && setActive(false)
    
  }

  return (
    <header>
      <div
        className='logo'
        style={{
          background: '#fff',
          width: 'max-content',
          borderRadius: '50%',
        }}
      >
        <svg
          width='48'
          height='48'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='24' cy='24' r='24' fill='white' />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z'
            fill='#0B0D17'
          />
        </svg>
      </div>

      <button
        onClick={() => setActive(!isActive)}
        style={isActive ? { display: 'none' } : {}}
        className='nav-toggle'
      >
        <i className='fas fa-bars fa-3x' style={{ color: '#fff' }}></i>
      </button>

      <nav className={isActive ? 'active' : ''}>
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : '')}
          to='/'
        >
          00 Home
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : '')}
          to='/destination'
        >
          01 Destination
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : '')}
          to='/crew'
        >
          02 Crew
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : '')}
          to='/technology'
        >
          03 Technology
        </NavLink>
      </nav>

      <button
        onClick={() => setActive(!isActive)}
        style={isActive ? {} : { display: 'none' }}
        className='nav-toggle'
      >
        <i className='fas fa-times fa-3x' style={{ color: '#fff' }}></i>
      </button>
    </header>
  );
}

export default Header;
