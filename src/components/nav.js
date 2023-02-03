import React from 'react';
import data from '../js/data';
import '../css/styles.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";


export default function Navmain(){
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href='#/'>Keeping Kalm</Navbar.Brand>
        </Navbar>
    )

}