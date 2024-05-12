import Link from "next/link";
import { RocketIcon } from "@/components/icons";
import { APP_TITLE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from 'next/image';
import { Poppins } from 'next/font/google'
import MyImg from '@/Private/MyImg.jpg'


const poppinsTitle = Poppins({ weight: "500", subsets: ['latin'] })
const poppinsSub = Poppins({ weight: "300", subsets: ['latin'] })

const routes = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    {
        name: "Documentation",
        href: "https://www.touha.dev/posts/simple-nextjs-t3-authentication-with-lucia",
    },
] as const;

export const CardBottom = () => {


    return (
        <div style={{ minHeight: "100vh", overflowY: "auto", paddingTop: "8rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 className={`${poppinsTitle.className} text-white text-5xl font-bold sm:text-5xl md:text-6xl lg:text-7.5xl max-w-[90%] sm:max-w-[70%] md:max-w-[80%] lg:max-w-[90%] text-center mx-auto mb-8`}>
                More <span className="gradient-text">stuff!</span>
            </h1>
            <div style={{ maxWidth: "90%", margin: "0 auto", width: "100%" }}>
                <div style={{
                    backgroundColor: "#020b17",
                    borderRadius: "50px",
                    padding: "9rem",
                    boxShadow: "0 0 5px #0048aa",
                    margin: "0 2rem", // Adjust margin to maintain original width
                    width: "100%" // Set initial width to full width
                }}>
                    {/* Your content for the rounded rectangle */}
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "90%", margin: "2rem auto", width: "100%" }}>
                <div style={{
                    backgroundColor: "#020b17",
                    borderRadius: "50px",
                    padding: "16rem",
                    boxShadow: "0 0 5px #0048aa",
                    flex: "1 0 auto", 
                    margin: "0 1rem", 
                    width: "calc(50% - 2rem)" 
                }}>
              
                </div>
                <div style={{
                    backgroundColor: "#020b17",
                    borderRadius: "50px",
                    padding: "16rem",
                    boxShadow: "0 0 5px #0048aa",
                    flex: "1 0 auto",
                    margin: "0 1rem", 
                    width: "calc(50% - 2rem)" 
                }}>
                   
                </div>
            </div>
        </div>


    );
};
