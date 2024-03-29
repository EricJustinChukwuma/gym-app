import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "@/assets/heart-removebg-1.png"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";


type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"

    const setMenuToggled = () => {
        setIsMenuToggled(!isMenuToggled)
    }
    
    return (
        <>
            <nav>
                <div 
                    className={`${navbarBackground} ${flexBetween} fixed -top-1 z-40 w-full py-4`}
                >
                    <div className={`${flexBetween} mx-auto w-5/6`}>
                        <div className={`${flexBetween} w-full gap-16`}>
                            {/* Left Side */}
                            <img src={Logo} alt="logo" className="w-[150px] h-[60px] -ml-8"/>

                            {/* Right Side */}
                            { isAboveMediumScreens ?<div className={`${flexBetween} w-full`}>
                                {/* Inner Left Side */}
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link 
                                        page="Home" 
                                        selectedPage={selectedPage} 
                                        setSelectedPage={setSelectedPage} 
                                    />
                                    <Link 
                                        page="Benefits" 
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link 
                                        page="Our Classes" 
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link 
                                        page="Contact Us" 
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>

                                {/* Inner Right Side */}
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                                </div>
                            </div> : (
                                <button 
                                    className="rounded-full bg-secondary-500 p-2"
                                    onClick={setMenuToggled}
                                >
                                    <Bars3Icon className="h-6 w-6 text-white" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* MOBILE MENU MODAL */}
                {
                    !isAboveMediumScreens && isMenuToggled && (
                        <div 
                            className="fixed top-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl"
                        >
                            {/* CLOSE ICON */}
                            <div className="flex justify-end p-12">
                                <button onClick={setMenuToggled}>
                                    <XMarkIcon className="h-7 w-7 text-gray-400"/>
                                </button>
                            </div>

                            {/* MENU ITEMS */}
                            <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
                                <Link 
                                    page="Home" 
                                    selectedPage={selectedPage} 
                                    setSelectedPage={setSelectedPage} 
                                />
                                <Link 
                                    page="Benefits" 
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                    page="Our Classes" 
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                    page="Contact Us" 
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </div>
                        </div>
                    )
                }
            </nav>
        </>
    )
}

export default Navbar