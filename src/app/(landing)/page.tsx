import { type Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Drizzle,
  LuciaAuth,
  NextjsLight,
  NextjsDark,
  ReactJs,
  ShadcnUi,
  TRPC,
  TailwindCss,
  StripeLogo,
  ReactEmail,
} from "./_components/feature-icons";
import { Poppins } from 'next/font/google'

const poppinsTitle = Poppins({ weight: "500", subsets: ['latin'] })
const poppinsSub = Poppins({ weight: "300", subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Fynopsis",
  description:
    "The Future of Financial News",
};

const HomePage = () => {
  return (
    <>
      <section className="pl-6 md:pl-12 lg:pl-16 xl:pl-12 pt-8">
        <div className="">
          <h1 className={`${poppinsTitle.className} title-text max-w-[90%] sm:max-w-[70%] md:max-w-[80%] lg:max-w-[80%]`}>
            The <span className="gradient-text">Future</span> of Financial News
          </h1>


          <p className={`${poppinsSub.className} sub-text`}>
            Cut the noise out. Get the news you deserve.
          </p>

          <form className="textr-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-ful border border-white bg-transparent px-4 py-2 rounded-xl focus:outline-none focus:border-blue-500"
              style={{
                width: '50vw', // This makes the input 80% of the viewport width
                maxWidth: '6000px', // You can set a maximum width for larger screens
                minHeight: '50px', // This makes the input 80% of the viewport width
                height: '4vw', // This makes the input 80% of the viewport width
                maxHeight: '600px',

              }}
            />
            <Button
              variant="primary"
              className="ml-2"
              style={{
                backgroundImage: 'linear-gradient(to right, #004aad, #38b6ff)',
                transition: 'background-image 0.5s',
                padding: '1.9% 2%', 
                width: '10vw', // This makes the input 80% of the viewport width
                minWidth: '100px',
                minHeight: '50px',
                maxWidth: '200px', // You can set a maximum width for larger screens
                height: '4vw', // This makes the input 80% of the viewport width
                maxHeight: '600px',
                
              }}
            >
              Join Waitlist
            </Button>
          </form>
        </div>
      </section>


    </>
  );
};


export default HomePage;

function NextjsIcon({ className }: { className?: string }) {
  return (
    <>
      <NextjsLight className={className + " dark:hidden"} />
      <NextjsDark className={className + " hidden dark:block"} />
    </>
  );
}
