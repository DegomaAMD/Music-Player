import React from 'react'
import '../App.css';
import vizmakerMP_logo from '../assets/img/vizmakerMP_logo-transparent.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown, faMagnifyingGlass, faMicrophone, faHouse, faBell, faGear, faArrowRightFromBracket, faRectangleList } from '@fortawesome/free-solid-svg-icons';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Playlist
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function Homepage() {
    const linkBtn = ['For You', 'Popular', 'Trend', 'Pop', 'EDM', 'Rock', 'More'];

    const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
    <Container fluid>
        <Row>
                <Col xs={3} className='side-bar'>
                    <div className='brand-name-container'>
                        <img src={vizmakerMP_logo} alt='VizmakerMP logo'/>
                        <h1>VizkerMP</h1>
                    </div>
                   
                <nav>
                    <div className='menu-container'>
                        <h2>Menu</h2>
                        <ul>
                            <li><FontAwesomeIcon icon={faHouse} className='menu-icon'/> Home</li>
                            <li><FontAwesomeIcon icon={faBell} className='menu-icon'/> Notification</li>
                            <li><FontAwesomeIcon icon={faGear} className='menu-icon'/> Settings</li>
                            <li><FontAwesomeIcon icon={faArrowRightFromBracket} className='menu-icon'/> Logout</li>
                        </ul>
                    </div>
                    
                    <div className='playlist-container'>
                        <h2>Playlist</h2>
                        <ul>
                            <li onClick={() => setModalShow(true)}className='add-new-playlist'><FontAwesomeIcon icon={faRectangleList} className='menu-icon'/> Add New +</li>
                        </ul>

                    </div>
                </nav>
                <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

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