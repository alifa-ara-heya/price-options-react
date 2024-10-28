import Link from "../Link/Link";

const Navbar = () => {
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
        { path: '/profile', name: 'Profile', id: 5 }
    ];


    return (
        <nav>
            <ul className="md:flex">
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