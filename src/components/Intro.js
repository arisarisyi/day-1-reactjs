
import {Container, Col, Row,Button} from "react-bootstrap"
const Intro =() => {
    return(
        <div className='intro'>
        <Container className="text-white d-flex text-center justify-content-center align-items-center">
          <Row>
            <Col>
              <div className="title">Dengerin Musik Asixxx</div>
              <div className="button mt-4 text-center">
                <Button variant="dark">Lihat Semua</Button>
                </div> 
            </Col>
          </Row>
          </Container> 
      </div>
    )
}
export default Intro