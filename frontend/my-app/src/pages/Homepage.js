import React from 'react'
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';


function Homepage() {
    const linkBtn = ['For You', 'Popular', 'Trend', 'Pop', 'EDM', 'Rock', 'More'];
  return (
    <>
    <Container fluid>
        <Row>
                <Col xs={3} className='side-bar'>
                <h1>VizkerMP</h1>   
                <nav>
                    <div>
                        <h2>Menu</h2>
                        <ul>
                            <li>Home</li>
                            <li>Notification</li>
                            <li>Settings</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h2>Playlist</h2>

                    </div>
                </nav>

            </Col>
            <Col xs={9} className='main-content'>
                    <div className='top-section'>
                    <h2>Welcome User</h2>
                    <div className='search-bar-container'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='magnifying-icon'/>
                    <Form.Control type="text" placeholder="Artist, Music, Album, etc." />
                    <FontAwesomeIcon icon={faMicrophone} className='mic-icon'/>
                    </div>
                    
                    </div>
                    <div className='premium-banner'>
                        <h2>
                            <FontAwesomeIcon icon={faCrown} className='crown-icon'/>
                            No Ads & Unlock all of Paid Songs
                            </h2>
                        <h1>
                            Premium Membership
                        </h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className='premium-banner-buttons'>
                        <Button className='premium-button-1'>Upgrade Now</Button>
                        <Button className='premium-button-2'>Learn More</Button>
                        </div>
                    </div>
                    <div className='genre-buttons'>
                    {linkBtn.map((buttonLabel, index) => (
                <Button key={index}>
                    {buttonLabel}
                </Button>
            ))}
                    </div>

            </Col>
        </Row>

    </Container>


    </>
  )
}

export default Homepage