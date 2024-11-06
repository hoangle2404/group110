import React, {useState} from 'react';
import logo from './logo.svg';
import '../navbar/NavBar.css';
import { off } from 'process';
import { suggestTag } from '../../constants/constants';

function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };  
  
    return (
      <div id ='full-navbar'>
        <div id ='navbar'>
          <div className={`hamburger-menu ${isOpen ? 'active' : ''}`} 
          onClick={() => toggle()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
    
          <div className='top-navbar'>
            <ul>
              <li>Account</li>
              <li>Favorites</li>
              <li>Setting</li>
              <li>Sign Out</li>
            </ul>
          </div>
        </div>
        
  
        <div className={`off-screen-menu ${isOpen ? 'active' : ''}`}>
          <ul>
            <select className='cost'>
              <option value = "Co0">Cost</option>
              <option value = "Co1">Under $5</option>
              <option value = "Co2">$5-$15</option>
              <option value = "3">Over $15</option>
            </select>
  
            <select className='calories'>
              <option value = "cal0">Calories</option>
              <option value = "cal1">Under 50 Calo</option>
              <option value = "cal2">50-150 Calo</option>
              <option value = "cal3">Over 150 Calo</option>
            </select>
  
            <select className='time'>
              <option value = "T0">Time</option>
              <option value = "T1">Under 10mins</option>
              <option value = "T2">10mins-30mins</option>
              <option value = "T3">Over 30mins</option>
            </select>
  
            <select className='sort'>
              <option value = "S0">Sort By</option>
            </select>     

            <ul>
              {suggestTag.map(item => (
                <button id ={item}>{item}</button>
              ))

              }
            </ul>       
          </ul>
          
       </div>
      </div>
    );
  }
  
  export default NavBar;