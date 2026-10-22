import {
    blockInFrontOffice,
    cementContainer,
    roadViewSign,
    seaOfBlocks,
    seaOfBlocks2,
} from "@/libs/app_images";
import Image from "next/image";
import type { ReactNode } from "react";

const images = {
    hero: seaOfBlocks,
    projectOne: blockInFrontOffice,
    projectTwo: seaOfBlocks2,
    projectThree: cementContainer,
    team: roadViewSign,
};

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
    return (
        <svg
            aria-hidden="true"
            className={diagonal ? "h-5 w-5 -rotate-45" : "h-5 w-5"}
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeLinecap="square"
                strokeWidth="1.8"
            />
        </svg>
    );
}

function HardHatIcon() {
    return (
        <svg
            aria-hidden="true"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                d="M3 15.5h18M5 15.5v-2a7 7 0 0 1 14 0v2M9 13.5V7.7M15 13.5V7.7M3 15.5V18h18v-2.5"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="1.5"
            />
        </svg>
    );
}

function RulerIcon() {
    return (
        <svg
            aria-hidden="true"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                d="m4 18 14-14 2 2L6 20H4v-2Z"
                stroke="currentColor"
                strokeWidth="1.5"
            />
            <path
                d="m12 10 2 2m-5-1 2 2m4-6 2 2M6 14l2 2"
                stroke="currentColor"
                strokeWidth="1.5"
            />
        </svg>
    );
}

function BuildingIcon() {
    return (
        <svg
            aria-hidden="true"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                d="M4 21V7l8-4v18M12 9h8v12M2 21h20"
                stroke="currentColor"
                strokeWidth="1.5"
            />
            <path
                d="M7 9h2m-2 4h2m-2 4h2m8-4h1m-1 4h1"
                stroke="currentColor"
                strokeWidth="1.5"
            />
        </svg>
    );
}

function PrimaryLink({
    children,
    href,
    light = false,
}: {
    children: ReactNode;
    href: string;
    light?: boolean;
}) {
    return (
        <a
            className={`primary-link ${light ? "primary-link-light" : ""}`}
            href={href}
        >
            <span>{children}</span>
            <ArrowIcon />
        </a>
    );
}

const services = [
    {
        number: "01",
        title: "Quality blocks",
        body: "Strong, dimensionally consistent hollow, solid, and specialty blocks for every scale of build.",
        icon: <HardHatIcon />,
    },
    {
        number: "02",
        title: "Trusted cement",
        body: "Reliable cement products selected for strength, workability, and lasting performance.",
        icon: <RulerIcon />,
    },
    {
        number: "03",
        title: "Dependable supply",
        body: "Straightforward ordering, helpful guidance, and timely delivery to keep your project moving.",
        icon: <BuildingIcon />,
    },
];

const projects = [
    {
        title: "Hollow blocks",
        meta: "Lightweight · Efficient · Versatile",
        image: images.projectOne,
        className: "md:col-span-7",
    },
    {
        title: "Solid blocks",
        meta: "Strong · Durable · Load-bearing",
        image: images.projectTwo,
        className: "md:col-span-5",
    },
    {
        title: "Premium cement",
        meta: "Consistent · Reliable · High quality",
        image: images.projectThree,
        className: "md:col-span-5 md:col-start-8",
    },
];

export default function Home() {
    return (
        <main className="min-h-screen overflow-hidden bg-sand text-charcoal">
            <section className="hero min-h-[800px] bg-charcoal">
                <Image
                    alt="Strong concrete block wall showcasing quality masonry"
                    className="absolute brightness-50 inset-0 h-full w-full object-cover object-bottom-right"
                    src={images.hero}
                />
                <div className="absolute inset-0 bg-linear-to-r from-ink/90 via-ink/60 to-ink/20" />
                <div className="absolute inset-0 bg-linear-to-t from-ink/60 via-transparent to-ink/30" />

                <div className="page-shell relative flex min-h-[800px] flex-col justify-end pb-12 pt-36 text-white md:pb-16">
                    <div className="max-w-5xl">
                        <div className="mb-7 flex items-center gap-4">
                            <span className="h-px w-12 bg-orange" />
                            <p className="eyebrow text-white/80">
                                Strength you can build on.
                            </p>
                        </div>
                        <h1 className="display-title max-w-4xl">
                            BUILD ON
                            <span className="block text-orange">
                                INTEGRITY.
                            </span>
                        </h1>
                        <div className="mt-8 flex flex-col gap-8 border-t border-white/30 pt-7 md:flex-row md:items-end md:justify-between">
                            <p className="max-w-xl text-base leading-7 text-white/75 md:text-lg">
                                Quality blocks, trusted cement, and dependable
                                service for builders who refuse to compromise.
                            </p>
                            <PrimaryLink
                                href="#products"
                                light
                            >
                                Explore our products
                            </PrimaryLink>
                        </div>
                    </div>
                    <div className="mt-16 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                        <span>Blocks · Cement · Building supplies</span>
                        <span className="hidden sm:block">
                            Scroll to discover
                        </span>
                    </div>
                </div>
            </section>

            <section className="bg-orange">
                <div className="page-shell grid divide-y divide-ink/20 md:grid-cols-3 md:divide-x md:divide-y-0">
                    {[
                        ["10+", "Block varieties"],
                        ["100%", "Quality focused"],
                        ["On time", "Reliable supply"],
                    ].map(([value, label]) => (
                        <div
                            className="flex items-end text-white gap-5 py-8 md:px-8 md:first:pl-0 md:last:pr-0"
                            key={label}
                        >
                            <strong className="font-display text-5xl font-bold leading-none">
                                {value}
                            </strong>
                            <span className="pb-1 text-xs font-bold uppercase tracking-[0.16em]">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <section
                className="section-space"
                id="products"
            >
                <div className="page-shell">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">Our core products</p>
                            <h2 className="section-title mt-4">
                                MADE FOR THE WORK.
                            </h2>
                        </div>
                        <p className="section-copy">
                            From foundations to finishing, our materials deliver
                            the consistency and confidence every good build
                            needs.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-12 md:items-start">
                        {projects.map((project, index) => (
                            <article
                                className={project.className}
                                key={project.title}
                            >
                                <a
                                    className="project-card group"
                                    href="#contact"
                                >
                                    <div
                                        className={`project-image ${
                                            index === 0
                                                ? "aspect-[1.38]"
                                                : "aspect-[1.1]"
                                        }`}
                                    >
                                        <Image
                                            alt={`${project.title} from Integrity Building and Blocks`}
                                            src={project.image}
                                            width={1000}
                                            height={1000}
                                        />
                                        <span className="project-action">
                                            <ArrowIcon diagonal />
                                        </span>
                                    </div>
                                    <div className="mt-5 flex items-start justify-between gap-5">
                                        <div>
                                            <h3 className="text-xl font-extrabold tracking-tight">
                                                {project.title}
                                            </h3>
                                            <p className="mt-1 text-sm text-muted">
                                                {project.meta}
                                            </p>
                                        </div>
                                        <span className="font-mono text-xs text-muted">
                                            0{index + 1}
                                        </span>
                                    </div>
                                </a>
                            </article>
                        ))}
                    </div>

                    <div className="mt-16 flex justify-end">
                        <PrimaryLink href="#contact">
                            Request a price list
                        </PrimaryLink>
                    </div>
                </div>
            </section>

            <section
                className="bg-charcoal text-white"
                id="supply"
            >
                <div className="page-shell section-space">
                    <div className="grid gap-10 border-b border-white/15 pb-12 lg:grid-cols-2">
                        <div>
                            <p className="eyebrow text-orange">
                                What we supply
                            </p>
                            <h2 className="section-title mt-4 text-white">
                                SOLID PRODUCTS.
                                <br />
                                HONEST SERVICE.
                            </h2>
                        </div>
                        <div className="flex items-end">
                            <p className="max-w-xl text-lg leading-8 text-white/60">
                                Whether you are building one home or an entire
                                development, we make it simple to get the right
                                materials in the right quantities, right when
                                you need them.
                            </p>
                        </div>
                    </div>

                    <div>
                        {services.map((service) => (
                            <article
                                className="service-row group"
                                key={service.number}
                            >
                                <span className="text-xs font-bold text-orange">
                                    {service.number}
                                </span>
                                <span className="text-orange">
                                    {service.icon}
                                </span>
                                <h3 className="font-display text-3xl font-semibold uppercase tracking-tight md:text-4xl">
                                    {service.title}
                                </h3>
                                <p className="max-w-md text-sm leading-6 text-white/55">
                                    {service.body}
                                </p>
                                <span className="hidden h-11 w-11 place-items-center border border-white/20 transition-colors group-hover:border-orange group-hover:bg-orange group-hover:text-ink md:grid">
                                    <ArrowIcon diagonal />
                                </span>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section
                className="section-space"
                id="about"
            >
                <div className="page-shell">
                    <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                        <div className="relative lg:col-span-6">
                            <div className="aspect-[4/5] overflow-hidden bg-ink/10">
                                <Image
                                    alt="Building professionals reviewing materials on site"
                                    className="h-full w-full object-cover grayscale"
                                    src={images.team}
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="absolute -bottom-5 -right-3 w-44 bg-orange p-5 md:-right-10 md:w-52 md:p-7">
                                <span className="font-display text-5xl font-bold">
                                    4.9
                                </span>
                                <p className="mt-2 text-xs font-bold uppercase leading-5 tracking-[0.15em]">
                                    Customer rating
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-5 lg:col-start-8">
                            <p className="eyebrow">The Integrity promise</p>
                            <h2 className="section-title mt-5">
                                BETTER MATERIALS. STRONGER FOUNDATIONS.
                            </h2>
                            <p className="mt-7 text-base leading-7 text-muted">
                                We believe a strong building begins long before
                                the first block is laid. It starts with
                                dependable materials, fair dealing, and a
                                supplier who keeps their word.
                            </p>
                            <div className="mt-10">
                                <PrimaryLink href="#contact">
                                    Why choose Integrity
                                </PrimaryLink>
                            </div>
                            <blockquote className="mt-12 border-l-2 border-orange pl-6">
                                <p className="text-lg font-semibold leading-7">
                                    “Consistent quality, fair prices, and the
                                    delivery arrived exactly when promised.”
                                </p>
                                <footer className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-muted">
                                    A valued building partner
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="bg-orange"
                id="contact"
            >
                <div className="page-shell py-20 md:py-28">
                    <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
                        <div className="lg:col-span-8">
                            <p className="eyebrow">Have a project in mind?</p>
                            <h2 className="font-display mt-5 text-[clamp(3.8rem,9vw,8rem)] font-bold uppercase leading-[0.8] tracking-[-0.045em]">
                                LET’S BUILD
                                <br />
                                SOMETHING.
                            </h2>
                        </div>
                        <div className="lg:col-span-4">
                            <p className="mb-7 max-w-sm text-base leading-7">
                                Tell us what you are building and what you need.
                                We’ll help with quantities, pricing, and supply.
                            </p>
                            <a
                                className="contact-link"
                                href="mailto:sales@integrityblocks.com"
                            >
                                sales@integrityblocks.com
                                <ArrowIcon diagonal />
                            </a>
                            <a
                                className="contact-link mt-3"
                                href="tel:+10000000000"
                            >
                                Call our sales team
                                <ArrowIcon diagonal />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
