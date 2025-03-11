// import React from 'react'
// import Image from 'next/image'
// const hero = () => {
//   return (
//     <div>
//        <section className="hero" id="section_1">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-5 col-12 m-auto">
//               <div className="hero-text">
//                 <h1 className="text-white mb-4"><u className="text-info">Welcome to <br /></u>Apex International School</h1>
//                 <a href="#section_2" className="custom-link bi-arrow-down arrow-icon"></a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
//     <Image
//         unoptimized
//         src="https://apexpreschool.in/assets/img/ApexBuilding.jpg"
//         alt="Apex Building"
//         fill
//         className="object-cover"
//     />
// </div>

//       </section>
//     </div>
//   )
// }

// export default hero




import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="section_1">
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-12 m-auto">
        <div className="hero-text">
          <h1 className="text-white mb-4">
            <u className="text-info">Apex International</u> School
          </h1>

          <p className="hero-description text-white">
            Welcome to Apex International School, where we inspire future leaders through academic excellence, innovation, and personal growth. Our dedicated educators foster a nurturing environment that encourages every student potential to shine.
          </p>

          <div className="d-flex justify-content-center align-items-center">
            <span className="date-text">Established in 1995</span>
            <span className="location-text">Orchid Phase II Charholi BK 412105</span>
          </div>

          <Link href="#section_2" passHref>
            <div className="custom-link bi-arrow-down arrow-icon"></div>
          </Link>
        </div>
      </div>
    </div>
  </div>

  <div className="video-wrap">
    <video autoPlay loop muted className="custom-video" poster="">
      <source src="/videos/bgvideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</section>


      {/* Highlights Section */}
      <section className="highlight">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="highlight-thumb">
                <Image
                  src="https://theapexschool.in/Website/assets/img/slide/ApexBuilding.jpg"
                  className="highlight-image img-fluid"
                  alt="2019 Highlights"
                  width={400} // Update the width and height accordingly
                  height={300}
                />

                <div className="highlight-info">
                  <h3 className="highlight-title">School Camps</h3>

                  <a href="#" className="bi-youtube highlight-icon" target="_blank" rel="noopener noreferrer"></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="highlight-thumb">
                <Image
                  src="https://theapexschool.in/Website/assets/img/slide/ApexBuilding.jpg"
                  className="highlight-image img-fluid"
                  alt="2020 Highlights"
                  width={400}
                  height={300}
                />

                <div className="highlight-info">
                  <h3 className="highlight-title">Annual School Play 2021</h3>

                  <a href="#" className="bi-youtube highlight-icon" target="_blank" rel="noopener noreferrer"></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="highlight-thumb">
                <Image
                  src="https://theapexschool.in/Website/assets/img/slide/ApexBuilding.jpg"
                  className="highlight-image img-fluid"
                  alt="2021 Highlights"
                  width={400}
                  height={300}
                />

                <div className="highlight-info">
                  <h3 className="highlight-title">School Cultural Fest 2020</h3>

                  <a href="#" className="bi-youtube highlight-icon" target="_blank" rel="noopener noreferrer"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
