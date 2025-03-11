// // import '../css/templatemo-leadership-event.css';
// // import Image from 'next/image';

// // const Facilities = () => {
// //   return (
// //     <section className="facilities section-padding" id="section_4">
// //       <div className="container">
// //         <div className="row">
// //           <div className="col-lg-12 col-12">
// //             <h2 className="mb-5 text-center facility-heading">Our <u className="text-info">Facilities</u></h2>

// //             <div className="row">
// //               <div className="col-lg-4 col-12 mb-4">
// //                 <div className="card facility-card">
// //                   <Image
                
// //                    src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/skill module.jpg`}
// //                     className="card-img-top facility-image"
// //                     alt="Info Skills Module"
// //                     width={350} 
// //                     height={250} 
// //                   />
// //                   <div className="card-body">
// //                     <h5 className="card-title">Skills Modules</h5>
// //                     <p className="card-text">Our Information Skills Modules enhance students learning by focusing on digital literacy and critical thinking.</p>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="col-lg-4 col-12 mb-4">
// //                 <div className="card facility-card">
// //                   <Image
// //                  src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/learning program.jpg`}
// //                     className="card-img-top facility-image"
// //                     alt="Learning Program"
// //                     width={350}
// //                     height={250} 
// //                   />
// //                   <div className="card-body">
// //                     <h5 className="card-title">Learning Program</h5>
// //                     <p className="card-text">Our comprehensive learning programs are designed to cater to every student academic needs and promote holistic development.</p>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="col-lg-4 col-12 mb-4">
// //                 <div className="card facility-card">
// //                   <Image
            
// //                   src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/extra.jpg`}
// //                     className="card-img-top facility-image"
// //                     alt="Extracurricular Activities"
// //                     width={350} 
// //                     height={250} 
// //                   />
// //                   <div className="card-body">
// //                     <h5 className="card-title">Extracurricular Activities</h5>
// //                     <p className="card-text">We provide a wide range of extracurricular activities to help students develop their talents and interests beyond academics.</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="row">
// //               <div className="col-lg-4 col-12 mb-4">
// //                 <div className="card facility-card">
// //                   <Image
                 
// //                   src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/childcare.jpg`}
// //                     className="card-img-top facility-image"
// //                     alt="Child Care"
// //                     width={350} 
// //                     height={250} 
// //                   />
// //                   <div className="card-body">
// //                     <h5 className="card-title">Child Care</h5>
// //                     <p className="card-text">We ensure that every child receives the attention and care they need, providing a nurturing and supportive environment.</p>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="col-lg-4 col-12 mb-4">
// //                 <div className="card facility-card">
// //                   <Image
                 
// //                    src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/education kit.jpg`}
// //                     className="card-img-top facility-image"
// //                     alt="Education Toolkit"
// //                     width={350} 
// //                     height={250} 
// //                   />
// //                   <div className="card-body">
// //                     <h5 className="card-title">Education Toolkit</h5>
// //                     <p className="card-text">Our education toolkit is equipped with the necessary resources and tools to aid effective teaching and learning.</p>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="col-lg-4 col-12 mb-4">
// //                 <div className="card facility-card">
// //                   <Image

// //                   src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/indoorgame.jpg`}
// //                     className="card-img-top facility-image"
// //                     alt="Indoor Games"
// //                     width={350} // fixed width
// //                     height={250} // fixed height
// //                   />
// //                   <div className="card-body">
// //                     <h5 className="card-title">Indoor Games</h5>
// //                     <p className="card-text">We offer a variety of indoor games that promote physical activity and cognitive development in a safe environment.</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Facilities;




// //new code 


// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';

// interface LazyImageProps {
//   src: string;
//   alt: string;
//   width: number;
//   height: number;
// }

// const Facilities = () => {
//   const LazyImage = ({ src, alt, width, height }: LazyImageProps) => {
//     const [isVisible, setIsVisible] = useState(false);
//     const [isLoading, setIsLoading] = useState(true); 

//     useEffect(() => {
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//             observer.disconnect(); 
//           }
//         },
//         {
//           rootMargin: '0px 0px 200px 0px', 
//         }
//       );

//       const imgElement = document.querySelector(`[data-src="${src}"]`);
//       if (imgElement) observer.observe(imgElement);

//       return () => observer.disconnect();
//     }, [src]);

//     // Set loading state to false once the image is fully loaded
//     const handleImageLoad = () => {
//       setIsLoading(false);
//     };

//     return (
//       <div>
//         {isVisible ? (
//           <div>
//             {/* Actual Image */}
//             <Image
//               src={src}
//               alt={alt}
//               width={width}
//               height={height}
//               onLoadingComplete={handleImageLoad} // Image load completion handler
//             />
//           </div>
//         ) : (
//           <div
//             data-src={src}
//             style={{
//               width: `${width}px`,
//               height: `${height}px`,
//               backgroundColor: '#ddd', 
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//           >
//             {/* Loading Placeholder */}
//             {isLoading && <div>Loading...</div>}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <section className="facilities section-padding" id="section_4">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12 col-12">
//             <h2 className="mb-5 text-center facility-heading">
//               Our <u className="text-info">Facilities</u>
//             </h2>

//             <div className="row">
//               {/* Skills Modules */}
//               <div className="col-lg-4 col-12 mb-4">
//                 <div className="card facility-card">
//                   <LazyImage
//                     src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/skill module.jpg`}
//                     alt="Info Skills Module"
//                     width={350}
//                     height={250}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">Skills Modules</h5>
//                     <p className="card-text">
//                       Our Information Skills Modules enhance students learning by focusing on digital literacy and critical thinking.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Learning Program */}
//               <div className="col-lg-4 col-12 mb-4">
//                 <div className="card facility-card">
//                   <LazyImage
//                     src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/learning program.jpg`}
//                     alt="Learning Program"
//                     width={350}
//                     height={250}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">Learning Program</h5>
//                     <p className="card-text">
//                       Our comprehensive learning programs are designed to cater to every student academic needs and promote holistic development.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Extracurricular Activities */}
//               <div className="col-lg-4 col-12 mb-4">
//                 <div className="card facility-card">
//                   <LazyImage
//                     src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/extra.jpg`}
//                     alt="Extracurricular Activities"
//                     width={350}
//                     height={250}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">Extracurricular Activities</h5>
//                     <p className="card-text">
//                       We provide a wide range of extracurricular activities to help students develop their talents and interests beyond academics.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="row">
//               {/* Child Care */}
//               <div className="col-lg-4 col-12 mb-4">
//                 <div className="card facility-card">
//                   <LazyImage
//                     src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/childcare.jpg`}
//                     alt="Child Care"
//                     width={350}
//                     height={250}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">Child Care</h5>
//                     <p className="card-text">
//                       We ensure that every child receives the attention and care they need, providing a nurturing and supportive environment.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Education Toolkit */}
//               <div className="col-lg-4 col-12 mb-4">
//                 <div className="card facility-card">
//                   <LazyImage
//                     src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/education kit.jpg`}
//                     alt="Education Toolkit"
//                     width={350}
//                     height={250}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">Education Toolkit</h5>
//                     <p className="card-text">
//                       Our education toolkit is equipped with the necessary resources and tools to aid effective teaching and learning.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Indoor Games */}
//               <div className="col-lg-4 col-12 mb-4">
//                 <div className="card facility-card">
//                   <LazyImage
//                     src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/indoorgame.jpg`}
//                     alt="Indoor Games"
//                     width={350}
//                     height={250}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">Indoor Games</h5>
//                     <p className="card-text">
//                       We offer a variety of indoor games that promote physical activity and cognitive development in a safe environment.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Facilities;




// components/AboutAndSpeakers.tsx
import Link from 'next/link';
import Image from 'next/image';

const AboutAndSpeakers = () => {
  return (
    <>
      {/* About Section */}
      <section className="about section-padding" id="section_2">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 col-12">
        <h2 className="mb-4">
          Our <u className="text-info">Story</u>
        </h2>
      </div>

      <div className="col-lg-6 col-12">
        <h3 className="mb-3">The Journey of Apex International School</h3>
        <p>
          Apex International School was founded with a vision to provide high-quality education that empowers students to become innovative leaders and responsible global citizens. Over the years, we have nurtured the minds of students, fostering creativity, critical thinking, and a passion for learning.
        </p>

        <Link href="#section_3" className="custom-btn custom-border-btn btn custom-link mt-3 me-3">
          Meet Our Faculty
        </Link>

        <Link href="#section_4" className="custom-btn btn custom-link mt-3">
          Explore Our Programs
        </Link>
      </div>

      <div className="col-lg-6 col-12 mt-5 mt-lg-0">
        <h4>
          At Apex International School, we believe in the holistic development of each student through academics, sports, arts, and extracurricular activities.
        </h4>

        <div className="avatar-group border-top py-5 mt-5">
          <Image
            src="/images/avatar/portrait-good-looking-brunette-young-asian-woman.jpg"
            className="img-fluid avatar-image"
            alt="Teacher 1"
            width={60}
            height={60}
          />
          <Image
            src="/images/avatar/happy-asian-man-standing-with-arms-crossed-grey-wall.jpg"
            className="img-fluid avatar-image avatar-image-left"
            alt="Teacher 2"
            width={60}
            height={60}
          />
          <Image
            src="/images/avatar/senior-man-white-sweater-eyeglasses.jpg"
            className="img-fluid avatar-image avatar-image-left"
            alt="Teacher 3"
            width={60}
            height={60}
          />
          <Image
            src="/images/avatar/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg"
            className="img-fluid avatar-image avatar-image-left"
            alt="Teacher 4"
            width={60}
            height={60}
          />
          <p className="d-inline">Over 500 students are currently part of our vibrant community</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Speakers Section */}
      <section className="speakers section-padding" id="section_3">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center">
        <div className="speakers-text-info">
          <h2 className="mb-4">
            Our <u className="text-info">Team</u>
          </h2>
          <p>Meet the dedicated team of educators and leaders who guide our students to success at Apex International School.</p>
        </div>
      </div>

      <div className="col-lg-6 col-12">
        <div className="speakers-thumb">
          <Image
            src="/images/avatar/portrait-good-looking-brunette-young-asian-woman.jpg"
            className="img-fluid speakers-image"
            alt="Director"
            width={400}
            height={400}
          />
          <small className="speakers-featured-text">Director</small>
          <div className="speakers-info">
            <h5 className="speakers-title mb-0">Dr. Ananya Deshmukh</h5>
            <p className="speakers-text mb-0">Director of Apex International School</p>
            <ul className="social-icon">
              <li><a href="#" className="social-icon-link bi-facebook"></a></li>
              <li><a href="#" className="social-icon-link bi-instagram"></a></li>
              <li><a href="#" className="social-icon-link bi-linkedin"></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-lg-12 col-12">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="speakers-thumb speakers-thumb-small">
              <Image
                src="/images/avatar/happy-asian-man-standing-with-arms-crossed-grey-wall.jpg"
                className="img-fluid speakers-image"
                alt="Principal"
                width={400}
                height={400}
              />
              <div className="speakers-info">
                <h5 className="speakers-title mb-0">Mr. Sachin Patil</h5>
                <p className="speakers-text mb-0">Principal</p>
                <ul className="social-icon">
                  <li><a href="#" className="social-icon-link bi-facebook"></a></li>
                  <li><a href="#" className="social-icon-link bi-linkedin"></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <div className="speakers-thumb speakers-thumb-small">
              <Image
                src="/images/avatar/senior-man-white-sweater-eyeglasses.jpg"
                className="img-fluid speakers-image"
                alt="Vice Principal"
                width={400}
                height={400}
              />
              <div className="speakers-info">
                <h5 className="speakers-title mb-0">Ms. Priya Kulkarni</h5>
                <p className="speakers-text mb-0">Vice Principal</p>
                <ul className="social-icon">
                  <li><a href="#" className="social-icon-link bi-instagram"></a></li>
                  <li><a href="#" className="social-icon-link bi-linkedin"></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <div className="speakers-thumb speakers-thumb-small">
              <Image
                src="/images/avatar/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg"
                className="img-fluid speakers-image"
                alt="Teacher"
                width={400}
                height={400}
              />
              <div className="speakers-info">
                <h5 className="speakers-title mb-0">Ms. Snehal Desai</h5>
                <p className="speakers-text mb-0">Senior Teacher - English</p>
                <ul className="social-icon">
                  <li><a href="#" className="social-icon-link bi-facebook"></a></li>
                  <li><a href="#" className="social-icon-link bi-instagram"></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <div className="speakers-thumb speakers-thumb-small">
              <Image
                src="/images/avatar/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university.jpg"
                className="img-fluid speakers-image"
                alt="Teacher"
                width={400}
                height={400}
              />
              <div className="speakers-info">
                <h5 className="speakers-title mb-0">Mr. Raghav Joshi</h5>
                <p className="speakers-text mb-0">Mathematics Teacher</p>
                <ul className="social-icon">
                  <li><a href="#" className="social-icon-link bi-instagram"></a></li>
                  <li><a href="#" className="social-icon-link bi-whatsapp"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


    </>
  );
};

export default AboutAndSpeakers;
