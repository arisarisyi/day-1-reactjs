import {Card, Container, Col, Row, Image} from 'react-bootstrap'
import BornImage from "../assets/images/jm/Born.jpeg"
import ContinuumImage from "../assets/images/jm/Continuum.jpg"
import SobImage from "../assets/images/jm/Sob_Rock.png"
const Johnmayer = () => {
    return (
       <div>
        <Container>
            <br/>
            <h1 className='text-white'>John Mayer</h1>
            <br/>
            <Row>
            <Col id="johnmayer" md={4} className='movieWrapper'>
                <Card className="movieImage">
                <Image src={BornImage} alt="Born Album" className='images'/>
                <div className='bg-dark'>
                <div className='p-1 m-2 text-white'>
                 <Card.Title className='text-center'>Born and Raised</Card.Title>
                 <Card.Text className='text-left'>
                 Born and Raised is the fifth studio album by American singer-songwriter John Mayer,
                  released on May 22, 2012, by Columbia Records.
                  </Card.Text>
                </div>
                </div>
                </Card>
            </Col>
            <Col md={4} className='movieWrapper'>
                <Card className="movieImage">
                <Image src={ContinuumImage} alt="Born Album" className='images'/>
                <div className='bg-dark'>
                <div className='p-1 m-2 text-white'>
                 <Card.Title className='text-center'>Continuum</Card.Title>
                 <Card.Text className='text-left'>
                 Continuum is the third studio album by American singer-songwriter John Mayer,
                  released on September 12, 2006, by Aware and Columbia Records.
                  </Card.Text>
                </div>
                </div>
                </Card>
            </Col>
            <Col md={4} className='movieWrapper'>
                <Card className="movieImage">
                <Image src={SobImage} alt="Born Album" className='images'/>
                <div className='bg-dark'>
                <div className='p-1 m-2 text-white'>
                 <Card.Title className='text-center'>Card title</Card.Title>
                 <Card.Text className='text-left'>
                 Sob Rock is the eighth studio album by American singer-songwriter John Mayer,
                  released on July 16, 2021, by Columbia Records.
                  </Card.Text>
                </div>
                </div>
                </Card>
            </Col>
            </Row>
        </Container>
       
       </div>
    )
}
export default Johnmayer