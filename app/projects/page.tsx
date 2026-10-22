"use client";

import HeroSection from "@/components/hero-section";
import { ArrowIcon } from "@/components/site-layout";
import { residential } from "@/libs/app_images";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        number: "01",
        title: "Riverside Residences",
        type: "Residential development",
        scope: "Hollow blocks · Cement",
        image: residential,
    },
    {
        number: "02",
        title: "Civic Trade Centre",
        type: "Commercial build",
        scope: "Solid blocks · Cement",
        image: residential,
    },
    {
        number: "03",
        title: "Northgate Villas",
        type: "Private residences",
        scope: "Hollow blocks · Supply",
        image: residential,
    },
    {
        number: "04",
        title: "Meridian Offices",
        type: "Workplace",
        scope: "Blocks · Cement · Delivery",
        image: residential,
    },
];

export default function ProjectsPage() {
    return (
        <main>
            <HeroSection
                eyebrow="Built with Integrity"
                heading={
                    <>
                        PROJECTS WE’RE
                        <br />
                        PROUD TO SUPPLY.
                    </>
                }
                paragraph="From family homes to major developments, our materials are helping dependable builders create places that last."
            />

            <section className="section-space bg-white">
                <div className="page-shell">
                    <div className="mb-14 flex flex-col justify-between gap-5 border-t border-charcoal/20 pt-6 md:flex-row">
                        <p className="eyebrow text-ink">
                            Selected supply partnerships
                        </p>
                        <p className="max-w-md text-sm leading-6 text-muted">
                            A sample of residential and commercial projects
                            supplied with Integrity blocks and cement.
                        </p>
                    </div>

                    <div className="grid gap-x-6 gap-y-16 md:grid-cols-2">
                        {projects.map((project, index) => (
                            <article
                                className={index % 2 ? "md:mt-24" : ""}
                                key={project.title}
                            >
                                <div className="group relative aspect-4/3 overflow-hidden bg-charcoal/10">
                                    <Image
                                        alt={`${project.title} completed building`}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                        src={project.image}
                                        width={1000}
                                        height={1000}
                                    />
                                    <span className="absolute right-4 top-4 bg-orange px-3 py-2 font-mono text-xs font-bold text-white">
                                        {project.number}
                                    </span>
                                </div>
                                <div className="mt-5 flex justify-between gap-5 border-b border-charcoal/15 pb-5">
                                    <div>
                                        <h2 className="font-display text-3xl font-semibold uppercase">
                                            {project.title}
                                        </h2>
                                        <p className="mt-1 text-sm text-muted">
                                            {project.type}
                                        </p>
                                    </div>
                                    <p className="text-right text-xs font-bold uppercase leading-5 tracking-wider text-ink">
                                        {project.scope}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-ink text-white">
                <div className="page-shell flex flex-col gap-8 py-20 md:flex-row md:items-end md:justify-between">
                    <h2 className="section-title text-white">
                        YOUR PROJECT
                        <br />
                        COULD BE NEXT.
                    </h2>
                    <Link
                        className="primary-link primary-link-light"
                        href="/#contact"
                    >
                        <span>Talk to our sales team</span>
                        <ArrowIcon />
                    </Link>
                </div>
            </section>
        </main>
    );
}
