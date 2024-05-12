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
import bg from 'src/components/fynopsis_noBG.png'

const poppinsLogo = Poppins({ weight: "300", subsets: ['latin'] })
const poppinsNavs = Poppins({ weight: "500", subsets: ['latin'] })

const routes = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features" },
  {
    name: "Documentation",
    href: "https://www.touha.dev/posts/simple-nextjs-t3-authentication-with-lucia",
  },
] as const;

export const Header = () => {


  return (
    <header className="px-2 py-4 lg:py-6">
      <div className="container flex items-center gap-2 p-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="focus:outline-none focus:ring-1 md:hidden"
              size="icon"
              variant="outline"
            >
              <HamburgerMenuIcon className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <div className="py-1">
              {routes.map(({ name, href }) => (
                <DropdownMenuItem key={name} asChild>
                  <Link href={href}>{name}</Link>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <Image
          src = {bg}
          width={20}
          height={20}
          alt="Picture of the author"
          style={{ paddingLeft: '2%' }}
        />  <span className={`${poppinsLogo.className} text-lg`}>{APP_TITLE}</span>

        {/* <nav className="ml-auto hidden gap-4 sm:gap-6 md:flex">
          
        </nav> */}
        <div className="ml-auto flex items-center gap-10">
          <div className="ml-auto hidden gap-4 sm:gap-6 md:flex">
            {routes.map(({ name, href }) => (
              <div key={name}>
                <Link
                  className="text-sm font-medium text-muted-foreground/70 transition-colors hover:text-muted-foreground"
                  href={href}
                >
                  <span className={poppinsNavs.className}>{name}</span>
                </Link>
              </div>
            ))}

          </div>
          <Button asChild variant={"secondary"} style={{ marginRight: '15px', background: 'linear-gradient(to right, #004aad, #38b6ff)'}}>
            <Link href="/login" className={poppinsNavs.className}>Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
