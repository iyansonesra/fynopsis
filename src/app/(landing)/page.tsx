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
      <section className="grid w-full max-w-[100%] flex-col py-10 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="p-4">
          <h1 className={`${poppinsTitle.className} text-white text-5xl font-bold sm:text-5xl md:text-6xl lg:text-8xl max-w-[90%] sm:max-w-[70%] md:max-w-[80%] lg:max-w-[90%]`}>
            The <span className="gradient-text">Future</span> of Financial News
          </h1>


          <p className={`${poppinsSub.className} text-balance mb-10 mt-4 text-muted-foreground md:text-lg lg:text-xl mx-auto sm:mx-auto md:mx-auto lg:mx-0`}>
            Cut the noise out. Get the news you deserve.
          </p>

          <form className="textr-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-3/4 lg:w-2/4 xl:w-1/3 border border-white bg-transparent px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
            />
            <Button
              variant="primary"
              className="ml-2"
              style={{
                backgroundImage: 'linear-gradient(to right, #004aad, #38b6ff)',
                transition: 'background-image 0.5s',
                padding: '1.9% 2%', // Adjust the padding to increase the height
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
