import HeroSection from "@/components/hero-section";
import { ArrowIcon } from "@/components/site-layout";
import Link from "next/link";

const testimonials = [
    {
        quote: "The quality is consistent from one delivery to the next. That reliability makes planning our work much easier.",
        name: "Daniel K.",
        role: "Site manager · Residential development",
    },
    {
        quote: "Integrity lives up to the name. Fair pricing, clear communication, and our blocks arrived exactly when promised.",
        name: "Miriam A.",
        role: "Managing director · Buildwell Homes",
    },
    {
        quote: "Their team helped us calculate the quantities correctly and saved us from costly over-ordering. That advice mattered.",
        name: "Joseph T.",
        role: "Independent contractor",
    },
    {
        quote: "We needed a dependable supply partner for a fast-moving project. They kept pace without compromising material quality.",
        name: "Emmanuel R.",
        role: "Project lead · Meridian Offices",
    },
    {
        quote: "The blocks are clean, strong, and uniform. Our masons notice the difference, and so do our clients.",
        name: "Grace N.",
        role: "Founder · Northgate Developments",
    },
    {
        quote: "Good products are important, but good people make the partnership work. We have found both here.",
        name: "Samuel O.",
        role: "Procurement manager",
    },
];

export default function TestimonialsPage() {
    return (
        <main>
            <HeroSection
                eyebrow="In their words"
                heading={
                    <>
                        TRUST IS OUR
                        <br />
                        STRONGEST MATERIAL.
                    </>
                }
                paragraph="Strong relationships are built the same way as strong structures: with consistency, honesty, and care at every step."
            />
            <section className="section-space bg-white">
                <div className="page-shell">
                    <div className="mb-14 grid gap-6 border-t border-charcoal/20 pt-6 md:grid-cols-2">
                        <p className="eyebrow text-ink">Customer stories</p>
                        <p className="max-w-lg text-base leading-7 text-muted">
                            Builders, developers, and contractors count on us to
                            keep quality high and projects moving.
                        </p>
                    </div>

                    <div className="grid border-l border-t border-charcoal/15 md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((item, index) => (
                            <blockquote
                                className={`testimonial-card ${
                                    index === 1 || index === 4
                                        ? "testimonial-card-accent"
                                        : ""
                                }`}
                                key={item.name}
                            >
                                <span className="font-display text-6xl leading-none text-orange">
                                    “
                                </span>
                                <p className="mt-5 text-lg font-semibold leading-8">
                                    {item.quote}
                                </p>
                                <footer className="mt-10 border-t border-current/15 pt-5">
                                    <strong className="text-sm">
                                        {item.name}
                                    </strong>
                                    <p className="mt-1 text-xs leading-5 opacity-60">
                                        {item.role}
                                    </p>
                                </footer>
                            </blockquote>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-orange">
                <div className="page-shell grid gap-10 py-20 md:grid-cols-2 md:items-end">
                    <div>
                        <p className="eyebrow text-white">
                            Become our next success story
                        </p>
                        <h2 className="section-title mt-5 text-white">
                            LET’S BUILD
                            <br />
                            TRUST.
                        </h2>
                    </div>
                    <div className="md:justify-self-end">
                        <Link
                            className="primary-link border-white/50 text-white"
                            href="/#contact"
                        >
                            <span>Request a quote</span>
                            <ArrowIcon />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
