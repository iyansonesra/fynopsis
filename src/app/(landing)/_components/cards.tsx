"use client";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Poppins } from 'next/font/google'
import React from 'react';
import CardSpotlight from "./../_components/hover-card";
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
  } from "./../_components/feature-icons";

const poppinsTitle = Poppins({ weight: "600", subsets: ['latin'] })
const poppinsSub = Poppins({ weight: "300", subsets: ['latin'] })
const poppinsThin = Poppins({ weight: "200", subsets: ['latin'] })

const features = [
    {
      name: "Next.js",
      description: "The React Framework for Production",
      logo: NextjsIcon,
    },
    {
      name: "React.js",
      description: "Server and client components.",
      logo: ReactJs,
    },
    {
      name: "Authentication",
      description: "Credential authentication with password reset and email validation",
      logo: LuciaAuth,
    },
    {
      name: "Database",
      description: "Drizzle with planetscale mysql database",
      logo: Drizzle,
    },
    {
      name: "TypeSafe Backend",
      description: "Preserve type safety from backend to frontend with tRPC",
      logo: TRPC,
    },
    {
      name: "Subscription",
      description: "Subscription with stripe",
      logo: StripeLogo,
    },
    {
      name: "Tailwindcss",
      description: "Simple and elegant UI components built with Tailwind CSS",
      logo: TailwindCss,
    },
    {
      name: "Shadcn UI",
      description: "A set of beautifully designed UI components for React",
      logo: ShadcnUi,
    },
    {
      name: "React Email",
      description: "Write emails in React with ease.",
      logo: ReactEmail,
    },
  ];

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
            <section>
                <div className="container mx-auto lg:max-w-screen-lg">
                    <h1 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl font-poppins">
                        <a id="features"></a> Features
                    </h1>
                    <p className="text-balance mb-10 text-center text-muted-foreground md:text-lg lg:text-xl font-poppins">
                        This starter template is a guide to help you get started with Next.js for large scale
                        applications. Feel free to add or remove features to suit your needs.
                    </p>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {features.map((feature, i) => (
                            <CardSpotlight
                                key={i}
                                name={feature.name}
                                description={feature.description}
                                logo={<feature.logo className="h-12 w-12" />}
                            />
                        ))}
                    </div>
                </div>
            </section>



        </div>


    );
};

function NextjsIcon({ className }: { className?: string }) {
    return (
      <>
        <NextjsLight className={className + " dark:hidden"} />
        <NextjsDark className={className + " hidden dark:block"} />
      </>
    );
  }