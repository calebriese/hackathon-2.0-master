import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';


export default class Navbar2 extends Component {

    render() {
      return (
  
  
          <Navbar bg="white" expand="xl">
              <Navbar.Brand href="/home"> <img alt="" src="P2PLogo.png"width="30"height="30"className="d-inline-block align-top"/>  Plan To Plate</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                
                  <Nav className="mr-auto">
                      <NavDropdown title="Inventory" id="basic-nav-dropdown">
                          <NavDropdown.Item href="/foods" className="nav-link">Food Inventory</NavDropdown.Item>
                          <NavDropdown.Item href="/recipes" className="nav-link">Recipe Inventory</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
  
        
      );
    }
  }