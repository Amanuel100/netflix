import React, { Component } from 'react'
import styles from './Header.module.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import NetflixLogo from "../../assets/images/netflix-logo-history-32.png"
export default class Header extends Component {
  render() {
    return (
      <div className={styles.headerOuterContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.headerLeft}>
            <ul>
              <li><img src={NetflixLogo} alt="Netflix logo" width='100px' /></li> 
              <li>Home</li>
              <li>TVshows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by Languages</li>
             
            </ul>
          </div>
          <div className = {styles.headerRight}>
            <ul>
              <li><SearchIcon /></li>
              <li><NotificationsNoneIcon /></li>
              <li><PermContactCalendarIcon /></li>
              <li><ArrowDropDownIcon /></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
