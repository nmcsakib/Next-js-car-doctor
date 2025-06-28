// react icons
import {IoIosSearch} from "react-icons/io";
import {CiMenuFries} from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    // const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const NavMenu = ({title}: {title: string}) =>  <Link href={`/${title}`} className="before:w-0 hover:before:w-full before:bg-amber-500 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-amber-500 transition-all duration-300 before:left-0 cursor-pointer capitalize">{title}</Link>;
    const SmallNavMenu = ({title}: {title: string}) =>  <Link href={`/${title}`} className="before:w-0 hover:before:w-full before:bg-amber-500 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-amber-500 transition-all duration-300 before:left-0 cursor-pointer capitalize">{title}</Link>;

    return (
        <nav
            className="flex items-center justify-between w-full relative bg-white rounded-full px-[30px] py-[8px]">

            {/* logo */}
            <Image src="/assets/logo.svg" width={300} height={250} alt="logo" className="w-[55px] "/>

            {/* nav links */}
            <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">

                <NavMenu title="Home"/>
                <NavMenu title="About"/>
                <NavMenu title="Services"/>
                <NavMenu title="Blogs"/>
                <NavMenu title="Contact"/>
            </ul>

            {/* action buttons */}
            <div className="items-center gap-[10px] flex">
                <Link href={"/login"}
                    className="py-[10px] text-[1rem] px-[16px] rounded-md capitalize border border-[#ffa365] hover:bg-amber-500 cursor-pointer transition-all duration-300 sm:flex hidden"> Appointment
                </Link>
               

                <CiMenuFries
                    className="text-[1.8rem] mr-1 text-[#424242]c cursor-pointer md:hidden flex" />
            </div>

            {/* mobile sidebar */}
            <aside
                className={` translate-x-0 opacity-100 z-20 lg:translate-x-[200px] lg:opacity-0 z-[-1]"} md:hidden bg-white p-4 text-center absolute top-[65px] right-0 w-full sm:w-[50%] rounded-md transition-all duration-300`}>
                <div className="relative mb-5">
                    <input
                        className="py-1.5 pr-4 dark:border-slate-900/50 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-amber-500"
                        placeholder="Search..."/>
                    <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]"/>
                </div>
                <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">

                <SmallNavMenu title="Home"/>
                <SmallNavMenu title="About"/>
                <SmallNavMenu title="Services"/>
                <SmallNavMenu title="Blogs"/>
                <SmallNavMenu title="Contact"/>

                </ul>
            </aside>
        </nav>
    );
};

export default Navbar;
          