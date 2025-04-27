import React, { Component } from 'react';
import footerStyle from "./Footer.module.css";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default class Footer extends Component {
  render() {
    return (
      <div className={footerStyle.footer_outer_container}>  
        <div className={footerStyle.footer_inner_container}>  
          <div className={footerStyle.footer_icons}>
            <FacebookRoundedIcon />
            <InstagramIcon />
            <YouTubeIcon />
            </div>
            <div className={footerStyle.footer_data}>  
              <div>
              <ul>  
                <li>Audio Description</li>  
                <li>Investor Relations</li>  
                <li>Legal Notice</li>  
              </ul>    
          </div>  
          <div>  
            <ul>  
              <li>Help Center</li>  
              <li>Jobs</li>  
              <li>Cookie Preferences</li>  
            </ul>  
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          </div>
          <div className={footerStyle.service_code}>
            <p>
              Service code
            </p>
          </div>
          <div className={footerStyle.copy_write}>
            &copy; 1997-2025 Netflix, Tnc:-
            </div>
        </div>
        </div>
    ) }}