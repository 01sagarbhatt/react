"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import "../globals.css";
export default function CustomNavbar() {
  useEffect(() => {
    // Bootstrap ka JS load karne ke liye
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Navbar expand="lg" bg="white" className="shadow-sm py-2">
      <Container>
        {/* Left: Logo + Website Name */}
        <Navbar.Brand href="/" className="fw-bold text-dark d-flex align-items-center">
          <img
            src="/logo.png" // ✅ Apni logo image ka path daalein
            alt="Logo"
            width="40"
            height="40"
            className="me-2"
          />
          MyWebsite
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Center: Links */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="gap-3">
          <Link href="/" className="text-dark fw-semibold">Home</Link>
          <Link href="/services" className="text-dark fw-semibold">Services</Link>
          <Link href="/project" className="text-dark fw-semibold">Project</Link>
          <Link href="/blog" className="text-dark fw-semibold">Blog</Link>
          <Link href="/contact" className="text-dark fw-semibold">Contact</Link>
          <Link href="/about" className="text-dark fw-semibold">About</Link>
          </Nav>
        </Navbar.Collapse>

        {/* Right: Social Media Icons */}
        <div className="d-flex gap-3 d-none d-lg-flex">
        <Link href="https://facebook.com" className="text-dark"> <FaFacebook size={22}></FaFacebook></Link>
        <Link href="https://twitter.com" className="text-dark"> <FaTwitter size={22}></FaTwitter> </Link>
        <Link href="https://instagram.com" className="text-dark"> <FaInstagram size={22}></FaInstagram></Link>
    
         
        </div>
      </Container>
    </Navbar>
  );
}
