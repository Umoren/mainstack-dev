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
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <main className="container px-6 md:px-12 box-border overscroll-auto sm:w-11/12">
                {/* Navbar */}

                <nav className="inline-flex md:block items-center fixed top-0 left-0 z-10 w-full sm:left-[20.65rem] sm:w-[77%] bg-white">
                    <div className="md:hidden">
                        <button
                            aria-controls="logo-sidebar"
                            type="button"
                            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                            className="relative top-1 left-3">
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="px-12 py-3">
                        <h3 className="text-[20px] font-semibold leading-6 text-ms-black"> Dashboard </h3>
                    </div>
                </nav>

                {/* Sidebar */}
                <aside
                    className={`fixed top-0 bg-white overflow-auto md:overflow-y-hidden left-0 z-40 w-full sm:w-[23%] border-r border-[#EFF1F6] h-screen transition-transform ${isMobileNavOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
                    aria-label="Sidebar"
                >
                    <div className="px-8 md:px-16 py-6 flex justify-between items-center">
                        <img src={'/assets/vectors/mainstack-logo.svg'} alt="mainstack logo" />

                        <button
                            aria-controls="close-sidebar"
                            type="button"
                            className="md:hidden"
                            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path></svg>
                        </button>
                    </div>
                    <div className="h-full py-4 overflow-y-auto bg-white">
                        <ul className="space-y-2 font-medium">
                            {NavListItems.slice(0, 4).map((item, index) => (
                                <li className="hover:border-ms-orange border-l-[3px] border-white">
                                    <a href="/#" className="flex items-center p-2 text-ms-gray-400 text-base hover:text-ms-orange px-8 md:px-16" >
                                        <img
                                            src={item.icon} alt="dashboard mainstack"
                                            className="w-[14px] h-[14px] text-gray-500 transition duration-75"
                                        />
                                        <span className="ml-3 text-base"> {item.label} </span>
                                    </a>
                                </li>
                            ))}
                            <p className="text-xs uppercase text-ms-gray-400 py-3 px-8 md:px-16"> OTHERS 1 </p>

                            {NavListItems.slice(4, 6).map((item, index) => (
                                <li className="hover:border-ms-orange border-l-[3px] border-white" key={index}>
                                    <a href="/#" className="flex items-center p-2 text-ms-gray-400 text-base hover:text-ms-orange px-8 md:px-16" >
                                        <img
                                            src={item.icon} alt="dashboard mainstack"
                                            className="w-[14px] h-[14px] text-gray-500 transition duration-75"
                                        />
                                        <span className="ml-3 text-base"> {item.label} </span>
                                    </a>
                                </li>
                            ))}

                            <p className="text-xs uppercase text-ms-gray-400 py-3 px-8 md:px-16"> OTHER 2 </p>

                            {NavListItems.slice(6, 9).map((item, index) => (
                                <li className="hover:border-ms-orange border-l-[3px] border-white" key={index}>
                                    <a href="/#" className="flex items-center p-2 text-ms-gray-400 text-base hover:text-ms-orange px-8 md:px-16" >
                                        <img
                                            src={item.icon} alt="dashboard mainstack"
                                            className="w-[14px] h-[14px] text-gray-500 transition duration-75"
                                        />
                                        <span className="ml-3 text-base"> {item.label} </span>
                                    </a>
                                </li>
                            ))}

                        </ul>

                        <div className="flex items-center md:absolute bottom-0 w-full pt-12 md:py-6">
                            <div className="flex items-center ml-8 md:ml-16">
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
        </>
    )
}

export default LayoutComponent;