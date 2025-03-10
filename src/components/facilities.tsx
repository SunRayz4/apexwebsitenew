// import '../css/templatemo-leadership-event.css';
// import Image from 'next/image';

// const Facilities = () => {
//   return (
//     <section className="facilities section-padding" id="section_4">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12 col-12">
//             <h2 className="mb-5 text-center facility-heading">Our <u className="text-info">Facilities</u></h2>

//             <div className="row">
//               <div className="col-lg-4 col-12 mb-4">
//                 <div className="card facility-card">
//                   <Image
                
//                    src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/skill module.jpg`}
//                     className="card-img-top facility-image"
//                     alt="Info Skills Module"
//                     width={350} 
//                     height={250} 
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">Skills Modules</h5>
//                     <p className="card-text">Our Information Skills Modules enhance students learning by focusing on digital literacy and critical thinking.</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-lg-4 col-12 mb-4">
//                 <div className="card facility-card">
//                   <Image
//                  src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/learning program.jpg`}
//                     className="card-img-top facility-image"
//                     alt="Learning Program"
//                     width={350}
//                     height={250} 
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">Learning Program</h5>
//                     <p className="card-text">Our comprehensive learning programs are designed to cater to every student academic needs and promote holistic development.</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-lg-4 col-12 mb-4">
//                 <div className="card facility-card">
//                   <Image
            
//                   src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/extra.jpg`}
//                     className="card-img-top facility-image"
//                     alt="Extracurricular Activities"
//                     width={350} 
//                     height={250} 
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">Extracurricular Activities</h5>
//                     <p className="card-text">We provide a wide range of extracurricular activities to help students develop their talents and interests beyond academics.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-lg-4 col-12 mb-4">
//                 <div className="card facility-card">
//                   <Image
                 
//                   src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/childcare.jpg`}
//                     className="card-img-top facility-image"
//                     alt="Child Care"
//                     width={350} 
//                     height={250} 
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">Child Care</h5>
//                     <p className="card-text">We ensure that every child receives the attention and care they need, providing a nurturing and supportive environment.</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-lg-4 col-12 mb-4">
//                 <div className="card facility-card">
//                   <Image
                 
//                    src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/education kit.jpg`}
//                     className="card-img-top facility-image"
//                     alt="Education Toolkit"
//                     width={350} 
//                     height={250} 
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">Education Toolkit</h5>
//                     <p className="card-text">Our education toolkit is equipped with the necessary resources and tools to aid effective teaching and learning.</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-lg-4 col-12 mb-4">
//                 <div className="card facility-card">
//                   <Image

//                   src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/indoorgame.jpg`}
//                     className="card-img-top facility-image"
//                     alt="Indoor Games"
//                     width={350} // fixed width
//                     height={250} // fixed height
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">Indoor Games</h5>
//                     <p className="card-text">We offer a variety of indoor games that promote physical activity and cognitive development in a safe environment.</p>
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




//new code 


'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Facilities = () => {
  const LazyImage = ({ src, alt, width, height }: LazyImageProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); 
          }
        },
        {
          rootMargin: '0px 0px 200px 0px', 
        }
      );

      const imgElement = document.querySelector(`[data-src="${src}"]`);
      if (imgElement) observer.observe(imgElement);

      return () => observer.disconnect();
    }, [src]);

    // Set loading state to false once the image is fully loaded
    const handleImageLoad = () => {
      setIsLoading(false);
    };

    return (
      <div>
        {isVisible ? (
          <div>
            {/* Actual Image */}
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              onLoadingComplete={handleImageLoad} // Image load completion handler
            />
          </div>
        ) : (
          <div
            data-src={src}
            style={{
              width: `${width}px`,
              height: `${height}px`,
              backgroundColor: '#ddd', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Loading Placeholder */}
            {isLoading && <div>Loading...</div>}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="facilities section-padding" id="section_4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <h2 className="mb-5 text-center facility-heading">
              Our <u className="text-info">Facilities</u>
            </h2>

            <div className="row">
              {/* Skills Modules */}
              <div className="col-lg-4 col-12 mb-4">
                <div className="card facility-card">
                  <LazyImage
                    src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/skill module.jpg`}
                    alt="Info Skills Module"
                    width={350}
                    height={250}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Skills Modules</h5>
                    <p className="card-text">
                      Our Information Skills Modules enhance students learning by focusing on digital literacy and critical thinking.
                    </p>
                  </div>
                </div>
              </div>

              {/* Learning Program */}
              <div className="col-lg-4 col-12 mb-4">
                <div className="card facility-card">
                  <LazyImage
                    src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/learning program.jpg`}
                    alt="Learning Program"
                    width={350}
                    height={250}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Learning Program</h5>
                    <p className="card-text">
                      Our comprehensive learning programs are designed to cater to every student academic needs and promote holistic development.
                    </p>
                  </div>
                </div>
              </div>

              {/* Extracurricular Activities */}
              <div className="col-lg-4 col-12 mb-4">
                <div className="card facility-card">
                  <LazyImage
                    src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/extra.jpg`}
                    alt="Extracurricular Activities"
                    width={350}
                    height={250}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Extracurricular Activities</h5>
                    <p className="card-text">
                      We provide a wide range of extracurricular activities to help students develop their talents and interests beyond academics.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Child Care */}
              <div className="col-lg-4 col-12 mb-4">
                <div className="card facility-card">
                  <LazyImage
                    src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/childcare.jpg`}
                    alt="Child Care"
                    width={350}
                    height={250}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Child Care</h5>
                    <p className="card-text">
                      We ensure that every child receives the attention and care they need, providing a nurturing and supportive environment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education Toolkit */}
              <div className="col-lg-4 col-12 mb-4">
                <div className="card facility-card">
                  <LazyImage
                    src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/education kit.jpg`}
                    alt="Education Toolkit"
                    width={350}
                    height={250}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Education Toolkit</h5>
                    <p className="card-text">
                      Our education toolkit is equipped with the necessary resources and tools to aid effective teaching and learning.
                    </p>
                  </div>
                </div>
              </div>

              {/* Indoor Games */}
              <div className="col-lg-4 col-12 mb-4">
                <div className="card facility-card">
                  <LazyImage
                    src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/indoorgame.jpg`}
                    alt="Indoor Games"
                    width={350}
                    height={250}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Indoor Games</h5>
                    <p className="card-text">
                      We offer a variety of indoor games that promote physical activity and cognitive development in a safe environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
