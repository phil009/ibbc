import React from "react";

interface HeroContent {
    eyebrow: string;
    heading: React.ReactNode;
    paragraph: string;
}

export default function HeroSection({
    eyebrow,
    heading,
    paragraph,
}: HeroContent) {
    return (
        <section className="interior-hero">
            <div className="page-shell relative z-10">
                <p className="eyebrow text-orange">{eyebrow}</p>
                <h1 className="interior-title mt-5">{heading}</h1>
                <p className="mt-8 max-w-xl text-base leading-7 text-white/60">
                    {paragraph}
                </p>
            </div>
        </section>
    );
}
