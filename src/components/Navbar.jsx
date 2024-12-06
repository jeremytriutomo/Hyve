import { useState } from "react";
import { IKImage, IKVideo, IKContext, IKUpload } from 'imagekitio-react';
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
const [open, setOpen] = useState(false);
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
        {/*LOGO*/}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <Image src="Hyve.png" alt="lama logo" w={32} h={32}></Image>
            <span>Hyve</span>
        </Link>

        {/*MOBILE MENU*/}
        <div className="md:hidden">
            <div className="cursor-pointer text-2xl" onClick={()=>setOpen((prev) => !prev)}>
                {open ? "X" : "≡"}
            </div>
            {/*MOBILE LINK LIST*/}
            <div className={`transition-all ease-in-out bg-body w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16
                ${open ? "-right-0" : "-right-[100%]"}`}>
                <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Mostpopular</Link>
                <Link to="/">About</Link>
                <Link to="/">
                    <button className="py-2 px-4 rounded-3xl bg-hyve text-white">Login</button>
                </Link>
            </div>
        </div>

        {/*DESKTOP MENU*/}
        <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Mostpopular</Link>
            <Link to="/">About</Link>
            <SignedOut>
                <Link to="/login">
                    <button className="py-2 px-4 rounded-3xl bg-hyve text-white">Login</button>
                </Link>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    </div>
  )
}

export default Navbar