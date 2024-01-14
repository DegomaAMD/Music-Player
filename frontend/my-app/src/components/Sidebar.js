import React from 'react'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBell, faGear, faArrowRightFromBracket, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import vizmakerMP_logo from '../assets/img/vizmakerMP_logo-transparent.png'
import { useNavigate } from 'react-router-dom';



function Sidebar() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
            navigate(path);
        


    }
  return (
    <>
    <div className='side-bar'>
    <div className='brand-name-container'>
                        <img src={vizmakerMP_logo} alt='VizmakerMP logo'/>
                        <h1>VizkerMP</h1>
                    </div>
    <nav>
                    <div className='menu-container'>
                        <h2>Menu</h2>
                        <ul>
                            <li onClick={() => handleNavigation('/home')}><FontAwesomeIcon icon={faHouse} className='menu-icon'/> Home</li>
                            <li onClick={() => handleNavigation('/notification')}><FontAwesomeIcon icon={faBell} className='menu-icon'/> Notification</li>
                            <li onClick={() => handleNavigation('/settings')}><FontAwesomeIcon icon={faGear} className='menu-icon'/> Settings</li>
                            <li onClick={() => handleNavigation('/login')}><FontAwesomeIcon icon={faArrowRightFromBracket} className='menu-icon'/> Logout</li>
                        </ul>
                    </div>
                    
                    <div className='playlist-container'>
                        <h2>Playlist</h2>
                        <ul>
                            <li className='add-new-playlist'><FontAwesomeIcon icon={faRectangleList} className='menu-icon'/> Add New +</li>
                        </ul>

                    </div>
                </nav>

            </div>
    </>
  )
}

export default Sidebar