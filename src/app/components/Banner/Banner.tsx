import Slide from "./Slide";

export default function Banner() {
  return (
   <div className="flex justify-center overflow-y-hidden">
    <div className="carousel w-10/12 h-[500px] overflow-y-hidden">
<Slide img="/assets/images/banner/1.jpg" ids="1" prev="4" next="2"/>
<Slide img="/assets/images/banner/2.jpg" ids="2" prev="1" next="3"/>
<Slide img="/assets/images/banner/3.jpg" ids="3" prev="2" next="4"/>
<Slide img="/assets/images/banner/4.jpg" ids="4" prev="3" next="1"/>

</div>
   </div>
  )
}
