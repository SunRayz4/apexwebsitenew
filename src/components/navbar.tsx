// 'use client';
// import '../css/templatemo-leadership-event.css';
// import Link from 'next/link';
// import { useState } from 'react';
// import Image from 'next/image';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div>
//      <div className="school-header text-center fs-2 fw-bold" style={{ backgroundColor: '#273053', color: 'white',paddingLeft: '20%' }}>
//   Apex International School
// </div>

//       <nav className="navbar navbar-expand-lg custom-navbar">
//   <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//     {/* Logo */}
//     <Link href="/" className="navbar-brand d-flex align-items-center">
//   <Image
//     unoptimized
//     width={50}
//     height={80}
//     src="https://apexpreschool.in/assets/img/Logo2.png"
//     className="w-auto h-full rounded-circle"
//     alt="logo"
//   />
//  <span className="ms-2">
//   <span style={{ color: '#3477d9' }}>Apex</span>
//   <span style={{ color: '#c14848' }}> School</span>
// </span>

// </Link>


//     {/* Navbar Toggler */}
//     <button 
//       className="navbar-toggler custom-navbar-toggler" 
//       type="button" 
//       onClick={toggleMenu} 
//       aria-controls="navbarNav" 
//       aria-expanded={isMenuOpen ? "true" : "false"} 
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon"></span>
//     </button>

//     {/* Navbar Links */}
//     <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
//       <ul className="navbar-nav ms-auto">
//         <li className="nav-item">
//           <Link href="#section_1" className="nav-link custom-nav-link">Home</Link>
//         </li>
//         <li className="nav-item">
//   <Link href="/about" className="nav-link custom-nav-link">About Us</Link>
// </li>

//         <li className="nav-item">
//           <Link href="#section_3" className="nav-link custom-nav-link">Academics</Link>
//         </li>
//         <li className="nav-item">
//           <Link href="#section_4" className="nav-link custom-nav-link">Admission</Link>
//         </li>
//         <li className="nav-item">
//   <Link href="#" className="nav-link custom-nav-link">Academics</Link>
// </li>
//         <li className="nav-item">
//           <Link href="" className="nav-link custom-nav-link">Apex Gallery</Link>
//         </li>
//         <li className="nav-item">
//   <Link href="/#" className="nav-link custom-nav-link">Faculty</Link>
// </li>
//         <li className="nav-item">
//           <Link href="" className="nav-link custom-nav-link">Career</Link>
//         </li>
        
//         <li className="nav-item">
//   <Link href="#" className="nav-link custom-nav-link">Events</Link>
// </li>
//         <li className="nav-item">
//           <Link href="/contact" className="nav-link custom-nav-link">Contact</Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>


     
//     </div>
//   );
// }

// export default Navbar;


'use client';
import '../css/templatemo-leadership-event.css';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
     
      <div 
        className="school-header text-center fs-2 fw-bold" 
        style={{ backgroundColor: 'white', color: 'white', padding: '10px 0', position: 'relative' }}
      >
      
        <div style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
          <Image
            unoptimized
            width={50}
            height={80}
            src="https://apexpreschool.in/assets/img/Logo2.png"
            className="w-auto h-full rounded-circle"
            alt="logo"
          />
        </div>
        
        <span style={{ color: '#000', marginLeft: '80px' }}>
          Apex International School
        </span>
      </div>

      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container" >
          {/* Navbar Toggler */}
          <button 
            className="navbar-toggler custom-navbar-toggler" 
            type="button" 
            onClick={toggleMenu} 
            aria-controls="navbarNav" 
            aria-expanded={isMenuOpen ? "true" : "false"} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="#section_1" className="nav-link custom-nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link custom-nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link href="#section_3" className="nav-link custom-nav-link">Academics</Link>
              </li>
              <li className="nav-item">
                <Link href="#section_4" className="nav-link custom-nav-link">Admission</Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link custom-nav-link">Academics</Link>
              </li>
              <li className="nav-item">
                <Link href="" className="nav-link custom-nav-link">Apex Gallery</Link>
              </li>
              <li className="nav-item">
                <Link href="/#" className="nav-link custom-nav-link">Faculty</Link>
              </li>
              <li className="nav-item">
                <Link href="" className="nav-link custom-nav-link">Career</Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link custom-nav-link">Events</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link custom-nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
