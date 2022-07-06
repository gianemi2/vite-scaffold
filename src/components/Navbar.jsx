import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useDarkMode } from '../context/DarkModeContext'

export function Navbar() {
    const { isDark, theme, toggleDarkMode } = useDarkMode()

    return (
        <NavbarBs bg={theme} variant={theme} className="shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                </Nav>
                <Button onClick={toggleDarkMode}>
                    {
                        isDark ? 'Lights on!' : 'Lights off..'
                    }
                </Button>
            </Container>
        </NavbarBs>
    )
}
