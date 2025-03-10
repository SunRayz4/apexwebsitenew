import React from 'react'
import Image from 'next/image'
const hero = () => {
  return (
    <div>
       <section className="hero" id="section_1">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12 m-auto">
              <div className="hero-text">
                <h1 className="text-white mb-4"><u className="text-info">Welcome to <br /></u>Apex International School</h1>
                <a href="#section_2" className="custom-link bi-arrow-down arrow-icon"></a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
    <Image
        unoptimized
        src="https://apexpreschool.in/assets/img/ApexBuilding.jpg"
        alt="Apex Building"
        fill
        className="object-cover"
    />
</div>

      </section>
    </div>
  )
}

export default hero
