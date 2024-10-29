import { useState } from "react";
import Link from "../Link/Link";
import { ImMenu } from "react-icons/im";
import { MdOutlineClose } from "react-icons/md";
const Navbar = () => {

    const [open, setOpen] = useState(false)
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
        { path: '/profile', name: 'Profile', id: 5 }
    ];


    return (
        <nav className="p-6 bg-yellow-300 ">
            <div className="md:hidden" onClick={() => setOpen(!open)}>

                {
                    open === true
                        ? <MdOutlineClose className="text-2xl font-medium " />
                        : <ImMenu className="text-2xl " />
                }


            </div>
            <ul className={`md:flex duration-1000 absolute rounded-lg md:static
            ${open ? 'top-16' : '-top-60'}
             bg-yellow-300 px-6`}>
                {
                    routes.map(route =>
                        <Link route={route} key={route.id}></Link>
                    )
                }
            </ul>

        </nav>
    );
};

export default Navbar;