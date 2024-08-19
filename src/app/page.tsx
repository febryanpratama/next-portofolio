import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/src/config/site";
import { title, subtitle } from "@/src/components/primitives";
import { GithubIcon } from "@/src/components/icons";
import { BsList } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLaravel, FaLinkedin, FaNodeJs } from "react-icons/fa";
import Image from "next/image";
import { RiNextjsFill } from "react-icons/ri";
import { Button } from "@nextui-org/button";
import { TfiEmail } from "react-icons/tfi";



export default function Home() {
  return (
    // <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    //   <div className="inline-block max-w-lg text-center justify-center">
    //     <h1 className={title()}>Make&nbsp;</h1>
    //     <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
    //     <br />
    //     <h1 className={title()}>
    //       websites regardless of your design experience.
    //     </h1>
    //     <h2 className={subtitle({ class: "mt-4" })}>
    //       Beautiful, fast and modern React UI library.
    //     </h2>
    //   </div>

    //   <div className="flex gap-3">
    //     <Link
    //       isExternal
    //       className={buttonStyles({
    //         color: "primary",
    //         radius: "full",
    //         variant: "shadow",
    //       })}
    //       href={siteConfig.links.docs}
    //     >
    //       Documentation
    //     </Link>
    //     <Link
    //       isExternal
    //       className={buttonStyles({ variant: "bordered", radius: "full" })}
    //       href={siteConfig.links.github}
    //     >
    //       <GithubIcon size={20} />
    //       GitHub
    //     </Link>
    //   </div>

    //   <div className="mt-8">
    //     <Snippet hideCopyButton hideSymbol variant="bordered">
    //       <span>
    //         Get started by editing <Code color="primary">app/page.tsx</Code>
    //       </span>
    //     </Snippet>
    //   </div>
    // </section>
    <>
        <section className="flex flex-col items-center gap-4">
            {/* Navigation Header */}
            <div className="container flex justify-between px-4 py-5">
                <div className="text-3xl font-bold text-center">Febryan<span className={title({color: "violet"})}>.</span> </div>
                <div>
                    <BsList className="cursor-pointer" size={40} />
                </div>
            </div>

        </section>
        <section className="flex flex-col items-center justify-center gap-4 h-1/6 border-b-1 border-gray-400">

            {/* Hero */}
            <div className="container flex flex-col justify-center items-center ">
                <div className={title({size: "xl"})}>Creating with <span className={title({color: "violet",size:"xl"})}>Love,</span></div>
                <div className={title({size: "xl"})}>Building with <span className={title({color: "violet",size:"xl"})}>Webflow.</span></div>
                <div className="border-2 px-10 py-1 rounded-2xl border-solid border-white mt-10 cursor-pointer duration-300 hover:text-violetgradient hover:border-violetgradient">
                    Say Hi 
                </div>
            </div>
        </section>

        {/* New Content Below */}
        <section className="flex flex-col items-center gap-4 p-10">
            <div className="container flex justify-between px-4 py-5">
                <div className={title({size: "small", color: 'foreground'})}>About Me</div>
                <div className="flex gap-4">
                    <div className="p-2 rounded-full border-1 cursor-pointer border-gray-500 duration-300 hover:border-violetgradient hover:text-violetgradient">
                        <FaLinkedin className="rounded-full" size={20} />
                    </div>
                    <div className="p-2 rounded-full border-1 cursor-pointer border-gray-500 duration-300 hover:border-violetgradient hover:text-violetgradient">
                        <FaInstagram className="rounded-full" size={20} />
                    </div>
                    <div className="p-2 rounded-full border-1 cursor-pointer border-gray-500 duration-300 hover:border-violetgradient hover:text-violetgradient">
                        <FaGithub className="rounded-full" size={20} />
                    </div>
                </div>

            </div>
        </section>
        <section className="flex flex-col items-center gap-10 p-10">
            <div className="container">
                <div className={title({size: "sm", color: "foreground"})}>
                    Hi, I am Febryan! I'm a programmer with 3 years of web development
                    experience with the past 2 years spent honing my skills in
                    Laravel, And Webflow.
                </div>
                <div className="grid grid-cols-2 gap-2 mt-10 pb-10">
                    <div className={title({size: "sm", padding: "paddingtop", color: "foreground"})}>
                        1 understand the importance of a Pixel-
                        perfect Website, pride myself on
                        producing high-quality websites, and I'm
                        comfortable working solo or as part of a
                        team.
                    </div>
                    <div className="rounded-full flex items-center justify-center">
                        <Image alt="" src="/images/profile.png" className="rounded-full" width={200} height={200} />
                    </div>
                </div>
            </div>
        </section>

        {/* New Content Below */}
        <section className="flex flex-col">
            <div className="w-full border-b-1 border-t-1 px-10 py-10 border-gray-500 grid grid-cols-3 justify-items-center items-center">
                <div className="flex flex-col">
                    <div className={title({size: "small", color: "violet"})}>
                        Indiga Nusa Digitama
                    </div>
                    <div className="mt-2">
                        Laravel
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className={title({size: "small", color: "violet"})}>
                        Alatan Asasta Indonesia
                    </div>
                    <div className="mt-2">
                        Laravel, ExpressJs
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className={title({size: "small", color: "violet"})}>
                        Slog Polri
                    </div>
                    <div className="mt-2">
                        Laravel, ExpressJs, NextJs
                    </div>
                </div>
            </div>
        </section>

        {/* New Content Portofolio */}
        <section className="flex flex-col items-center p-10 border-b-1 border-foreground-600">
            <div className="container flex flex-col ">
                <div className={`${title({size: "small", color: "foreground"})} text-center`}>
                    Our Project
                </div>
                <div className={`${title({size: "md", padding: "paddingtop", color: "foreground"})} text-center`}>
                    1 craft digital solutions that showcase my
                    passion and expertise in design and
                    development. 
                </div>
                <div className="grid grid-cols-3 gap-4 mt-20">
                    <div className="mb-10">
                        <Image alt="" className="rounded-xl" src="/images/1.png" width={500} height={500} />
                        <div className="flex justify-evenly py-4">
                            <div className={`rounded-3xl border-1 py-2 px-4 hover:text-violetgradient hover:border-violetgradient`}>
                                Laravel
                            </div>
                            <div className={`rounded-3xl border-1 py-2 px-4 hover:text-violetgradient hover:border-violetgradient`}>
                                ExpressJs
                            </div>
                        </div>
                    </div>
                    <div className="mb-10">
                        <Image alt="" className="rounded-xl" src="/images/2.png" width={500} height={500} />
                        <div className="flex justify-evenly py-4">
                            <div className={`rounded-3xl border-1 py-2 px-4 hover:text-violetgradient hover:border-violetgradient`}>
                                Laravel
                            </div>
                        </div>
                    </div>
                    <div className="mb-10">
                        <Image alt="" className="rounded-xl" src="/images/3.png" width={500} height={500} />
                        <div className="flex justify-evenly py-4">
                            <div className={`rounded-3xl border-1 py-2 px-4 hover:text-violetgradient hover:border-violetgradient`}>
                                Laravel
                            </div>
                        </div>
                    </div>
                    <div className="mb-10">
                        <Image alt="" className="rounded-xl" src="/images/4.png" width={500} height={500} />
                        <div className="flex justify-evenly py-4">
                            <div className={`rounded-3xl border-1 py-2 px-4 hover:text-violetgradient hover:border-violetgradient`}>
                                NextJs
                            </div>
                            <div className={`rounded-3xl border-1 py-2 px-4 hover:text-violetgradient hover:border-violetgradient`}>
                                ExpressJs
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="flex flex-col items-center p-10 border-b-1 pb-32">
            <div className="container flex flex-col">
                <div className={`${title({size: "small", color: "foreground"})} text-center`}>
                    Our Skills
                </div>
                <div className={`${title({size: "md", padding: "paddingtop", color: "foreground"})} text-center`}>
                I enjoy solving problems with functional solutions. Here are some key skills I've developed over my career.
                </div>

                <div className="grid grid-cols-3 gap-4 mt-10">
                    <div className="flex flex-col border-1 border-foreground-500 rounded-3xl w-full px-5 pt-20 pb-10">
                        {/* Icon */}
                        <FaLaravel className="border-1 border-foreground-500 rounded-xl p-2" size={50} height={50}/>
                        <div className={`${title({size: "small", color: "violet"})} mt-5`}>
                            Laravel Framework
                        </div>
                        <div className={`${title({size: "extrasmall"})} mt-2`}>
                            I have experience developing web applications using the Laravel framework, which is known for its simplicity and elegance.
                        </div>

                    </div>
                    <div className="flex flex-col border-1 border-foreground-500 rounded-3xl w-full px-5 pt-20 pb-10">
                        {/* Icon */}
                        <RiNextjsFill className="border-1 border-foreground-500 rounded-xl p-2" size={50} height={50}/>

                        <div className={`${title({size: "small", color: "violet"})} mt-5`}>
                            NextJs Framework
                        </div>
                        <div className={`${title({size: "extrasmall"})} mt-2`}>
                            I have experience building web applications with Next.js, known for its flexibility and performance.
                        </div>

                    </div>
                    <div className="flex flex-col border-1 border-foreground-500 rounded-3xl w-full px-5 pt-20 pb-10">
                        {/* Icon */}
                        <FaNodeJs  className="border-1 border-foreground-500 rounded-xl p-2" size={50} height={50}/>
                        <div className={`${title({size: "small", color: "violet"})} mt-5`}>
                            ExpressJs Framework
                        </div>
                        <div className={`${title({size: "extrasmall"})} mt-2`}>
                            I have experience developing backend applications using Express.js with TypeScript, known for its robustness and type safety
                        </div>

                    </div>
                </div>
            </div>

            
        </section>

        <section className="flex flex-col items-center p-10">
            <div className="container grid grid-cols-2 py-10">
                <div className={`${title({size: "xl", color: "violet"})}`}>
                    Let's <br /> Work Together -
                </div>
                <div className=" flex py-10 flex-col items-center">
                    <Button size="lg" radius="full" className={` border-1 px-10 py-10 border-gray-700 bg-transparent hover:text-violetgradient hover:border-violetgradient`}>
                        <TfiEmail size={50} className=""/>
                        <div className={`${title({size: 'small'})}`}>
                            febryancpratama@gmail.com
                        </div>
                    </Button>
                </div>

            </div>
        </section>

        {/* Footer */}
        <section className="flex flex-col items-center p-10 border-t-1 border-gray-500">
            <div className="container flex justify-between">
                <div>
                    created by <span className={`${title({size: 'extrasmall', color: "violet"})}`}>febryan.</span>
                </div>
                <div>
                    All rights reserved @2024
                </div>
            </div>
        </section>
    </>

    // Hero

    
  );
}
