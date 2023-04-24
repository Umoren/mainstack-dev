import { useState } from "react";


interface LayoutComponentProps {
    children: React.ReactNode,
}

interface NavListItem {
    label: string;
    icon: string;
}


const NavListItems: NavListItem[] = [
    { label: 'Dashboard', icon: '/assets/vectors/dashboard.svg' },
    { label: 'Item 1', icon: '/assets/vectors/edit.svg' },
    { label: 'Item 2', icon: '/assets/vectors/user.svg' },
    { label: 'Item 3', icon: '/assets/vectors/hourglass_empty.svg' },
    { label: 'Item 4', icon: '/assets/vectors/add_a_photo.svg' },
    { label: 'Item 5', icon: '/assets/vectors/delete.svg' },
    { label: 'Item 6', icon: '/assets/vectors/subscriptions.svg' },
    { label: 'Item 7', icon: '/assets/vectors/file_present.svg' },
    { label: 'Item 8', icon: '/assets/vectors/alarm.svg' },
    { label: 'Settings', icon: '/assets/vectors/settings.svg' },
    { label: 'Integrations', icon: '/assets/vectors/apps.svg' },
    { label: 'Refer and Earn', icon: '/assets/vectors/redeem.svg' },
    { label: 'Report bug', icon: '/assets/vectors/bug_report.svg' },
    { label: 'Log out', icon: '/assets/vectors/logout.svg' }
]



const LayoutComponent: React.FC<LayoutComponentProps> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <main className="container px-12 box-border overscroll-auto sm:w-11/12">
            {/* Navbar */}

            <nav className="fixed top-0 left-0 z-50 w-full sm:left-[20.65rem] sm:w-[77%] bg-white">
                <div className="px-12 py-3">
                    <h3 className="text-[20px] font-semibold leading-6 text-ms-black"> Dashboard </h3>
                </div>
            </nav>

            {/* Sidebar */}
            <aside
                className="fixed top-0 left-0 z-40 w-full sm:w-[23%] border-r border-[#EFF1F6] h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="px-12 py-6">
                    <img src={'/assets/vectors/mainstack-logo.svg'} alt="mainstack logo" />
                </div>
                <div className="h-full py-4 overflow-y-auto bg-white">
                    <ul className="space-y-2 font-medium">
                        {NavListItems.slice(0, 4).map((item, index) => (
                            <li className="hover:border-ms-orange border-l-[3px] border-white">
                                <a href="/#" className="flex items-center p-2 text-ms-gray-400 text-base hover:text-ms-orange px-12" >
                                    <img
                                        src={item.icon} alt="dashboard mainstack"
                                        className="w-[14px] h-[14px] text-gray-500 transition duration-75"
                                    />
                                    <span className="ml-3 text-base"> {item.label} </span>
                                </a>
                            </li>
                        ))}
                        <p className="text-xs uppercase text-ms-gray-400 py-3 px-12"> OTHERS 1 </p>

                        {NavListItems.slice(4, 6).map((item, index) => (
                            <li className="hover:border-ms-orange border-l-[3px] border-white" key={index}>
                                <a href="/#" className="flex items-center p-2 text-ms-gray-400 text-base hover:text-ms-orange px-12" >
                                    <img
                                        src={item.icon} alt="dashboard mainstack"
                                        className="w-[14px] h-[14px] text-gray-500 transition duration-75"
                                    />
                                    <span className="ml-3 text-base"> {item.label} </span>
                                </a>
                            </li>
                        ))}

                        <p className="text-xs uppercase text-ms-gray-400 py-3 px-12"> OTHER 2 </p>

                        {NavListItems.slice(6, 9).map((item, index) => (
                            <li className="hover:border-ms-orange border-l-[3px] border-white" key={index}>
                                <a href="/#" className="flex items-center p-2 text-ms-gray-400 text-base hover:text-ms-orange px-12" >
                                    <img
                                        src={item.icon} alt="dashboard mainstack"
                                        className="w-[14px] h-[14px] text-gray-500 transition duration-75"
                                    />
                                    <span className="ml-3 text-base"> {item.label} </span>
                                </a>
                            </li>
                        ))}

                    </ul>

                    <div className="flex items-center absolute bottom-0 w-full py-6">
                        <div className="flex items-center ml-12">
                            <div className="flex items-center justify-between w-full">
                                <button
                                    type="button"
                                    className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-100"
                                    aria-expanded="false"
                                    onClick={toggleMenu}
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-8 h-8 rounded-full" src={'/assets/images/placeholder-img.png'} alt="user" />
                                    <p className="px-3 text-base text-ms-gray-400"> Blessing Daniels </p>
                                </button>

                                <div className="right-0 absolute px-6 -mt-2">
                                    <img src={'/assets/vectors/ellipses.svg'} alt="ellipses" />
                                </div>
                            </div>
                            <div className={`absolute ${isMenuOpen ? 'block' : 'hidden'} bottom-4 left-6 w-[93%] z-50 text-base list-none bg-white rounded shadow-xl border-[6px] border-white`}>

                                <ul className="py-1" role="none">
                                    {NavListItems.slice(9, 14).map((item, index) => (
                                        <li className="" key={index}>
                                            <a
                                                href="/#"
                                                className={`${isMenuOpen ?? 'hidden'} flex items-center p-2 text-ms-gray-400 text-base px-4`}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <img
                                                    src={item.icon} alt="user mainstack"
                                                    className="w-[14px] h-[14px]   transition duration-75"
                                                />
                                                <span className="ml-3 text-sm text-ms-gray-400"> {item.label} </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </aside>
            {/* Sidebar ends here */}
            {children}
        </main>
    )
}

export default LayoutComponent;