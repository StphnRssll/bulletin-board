import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'react-bootstrap'
export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <Navbar color="light" light expand="md">
          <NavbarBrand>Resource Bulletin Board!</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href='#steve'>Steve</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#alice'>Alice</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#bob'>Bob</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}
