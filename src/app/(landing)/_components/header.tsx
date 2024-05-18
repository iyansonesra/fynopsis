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
      <div className="flex items-center gap-2 p-0">
        {/* <DropdownMenu>
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
        </DropdownMenu> */}

        <Image
          src = {bg}
          width={60}
          height={60}
          alt="Picture of the author"
          style={{}}
        />  <span className={`${poppinsLogo.className} sm:text-2xl md:text-2xl lg:text-2xl `}>{APP_TITLE}</span>
        
        <div className="ml-auto flex items-center">
  <div>
    <Button asChild variant="secondary" style={{ marginRight: '15px', background: 'linear-gradient(to right, #004aad, #38b6ff)', width: '5rem', height: '2.5rem'}}>
      <Link href="/login" className={`${poppinsNavs.className} sm:text-lg md:text-lg lg:text-md`}>Join</Link>
    </Button>
  </div>

</div>

      </div>
    </header>
  );
};
