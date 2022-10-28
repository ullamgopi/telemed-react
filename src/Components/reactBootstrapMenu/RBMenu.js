import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

function RBMenu(props) {
    console.log(props)
    return (
        <>
            <Navbar fixed='top' bg="secondary" expand="lg">
                <Container fluid>
                    <Navbar.Brand href='#homepage'>Navbar Brand</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"  >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">{props.menuHeader}</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="me-auto">
                                {
                                    props.titles.map((title, index) => {
                                        if (props.isSubmenu[index] == true) {
                                            {
                                                console.log(title.url);
                                                return <NavDropdown title={title.title} id="basic-nav-dropdown">
                                                    {
                                                        title.submenu.map((submenuTitle, index) => {
                                                            return < NavDropdown.Item href={submenuTitle.url}> {submenuTitle.title}</NavDropdown.Item>
                                                        })
                                                    }
                                                </NavDropdown>
                                            }
                                        } else {
                                            return (< Nav.Link href={title.url} > {title.title}</Nav.Link>)
                                        }
                                    })}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            {/* {/ <header className='bg-primary mt-5 p-2'>Header Component</header> /} */}
        </>
    );
}

export default RBMenu;