import React, {useContext} from 'react';
import Authenticate from '../../context/Auth';
import classes from './Navigation.module.css';
const Navigation = (props) => {
  const ctx = useContext(Authenticate);
  return (
          <nav className={classes.nav}>
          <ul>
            {ctx.isLoggedin && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {ctx.isLoggedin && ( 
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {ctx.isLoggedin && (
              <li>
                <button onClick={props.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
  );
};

export default Navigation;
