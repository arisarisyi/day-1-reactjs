import {Card, Container, Col, Row, Image} from 'react-bootstrap'
import Album1 from "../assets/images/dt/1.jpg"
import Album2 from "../assets/images/dt/2.jpg"
import Album3 from "../assets/images/dt/3.jpg"
const Dreamtheater = () => {
    return (
       <div>
        <Container>
            <br/>
            <h1 className='text-white'>Dream Theater</h1>
            <br/>
            <Row>
            <Col md={4} id="dreamtheater" className='movieWrapper'>
                <Card className="movieImage">
                <Image src={Album1} alt="Born Album" className='images'/>
                <div className='bg-dark'>
                <div className='p-1 m-2 text-white'>
                 <Card.Title className='text-center'>A View from the Top of the World</Card.Title>
                 <Card.Text className='text-left'>
                 A View from the Top of the World is the fifteenth
                  studio album by American progressive metal band Dream Theater,
                  released on October 22, 2021
                  </Card.Text>
                </div>
                </div>
                </Card>
            </Col>
            <Col md={4} className='movieWrapper'>
                <Card className="movieImage">
                <Image src={Album2} alt="Born Album" className='images'/>
                <div className='bg-dark'>
                <div className='p-1 m-2 text-white'>
                 <Card.Title className='text-center'>Metropolis Pt. 2: Scenes from a Memory</Card.Title>
                 <Card.Text className='text-left'>
                 Metropolis Pt. 2: Scenes from a Memory is the fifth studio album and 
                 first concept album by American progressive metal band Dream Theater,
                  released on October 26, 1999
                  </Card.Text>
                </div>
                </div>
                </Card>
            </Col>
            <Col md={4} className='movieWrapper'>
                <Card className="movieImage">
                <Image src={Album3} alt="Born Album" className='images'/>
                <div className='bg-dark'>
                <div className='p-1 m-2 text-white'>
                 <Card.Title className='text-center'>Octavarium</Card.Title>
                 <Card.Text className='text-left'>
                 Octavarium is the eighth studio album by American progressive metal band Dream Theater.
                  Released on June 7, 2005
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
export default Dreamtheater