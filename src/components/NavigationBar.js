import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return(
        <div>
            
            <Navbar variant="dark">
            <Container>
            <Navbar.Brand href="/">Music X</Navbar.Brand>
            <Nav>
            <Nav.Link href="#johnmayer">John Mayer</Nav.Link>
            <Nav.Link href="#dreamtheater">Dream Theater</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
        </div>
    )
}
export default NavigationBar