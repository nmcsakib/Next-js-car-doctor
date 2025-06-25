"use client"
import Image from 'next/image';
type Prop = {
    [key: string]: string
}
const Slide = ({img, ids, prev, next}: Prop) => {
    

    return (
          <div id={`slide1${ids}`} className="carousel-item h-full relative w-full">
            <Image width={700} height={300} alt=""
              src={img}
              className="w-full" />
            <div className="absolute right-8 top-1/2 flex gap-3 z-20 bottom-0 translate-y-40 transform ">
              <a href={`#slide1${prev}`} className="btn btn-circle btn-xl border-orange-500 text-orange-500 bg-white">❮</a>
              <a href={`#slide1${next}`} className="btn btn-circle btn-xl border-orange-500 text-orange-500 bg-white">❯</a>
            </div>
              <div className="absolute top-0 flex gap-5 p-8 bg-gradient-to-l flex-col to-black h-full">
                    <h2 className="mt-15 text-6xl w-1/2 text-white font-bold">Affordable card services</h2>
                    <p className="text-sm w-1/2 text-white font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aspernatur provident molestias, qui asperiores aliquam totam ullam assumenda quasi exercitationem eaque et accusamus ex cumque similique illo quos iusto debitis.</p>
                    <div className="flex w-1/3 gap-3">
                    
                    <button className="p-3 text-sm bg-orange-500 rounded-xl text-white">Discover More</button>
                    <button className="p-3 text-sm border border-orange-500 rounded-xl text-white">Discover More</button></div>
                </div>
          </div>
    );
};

export default Slide;