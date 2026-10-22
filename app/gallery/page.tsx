"use client";

import { blocksSea3 } from "@/libs/app_images";
import Image from "next/image";
import { useState } from "react";

const gallery = [
    {
        category: "Materials",
        image: blocksSea3,
        alt: "Close view of concrete blockwork",
    },
    {
        category: "On site",
        image: blocksSea3,
        alt: "Mason working with concrete blocks",
    },
    {
        category: "Completed",
        image: blocksSea3,
        alt: "Completed modern concrete building",
    },
    {
        category: "On site",
        image: blocksSea3,
        alt: "Craftsperson applying mortar to masonry",
    },
    {
        category: "Materials",
        image: blocksSea3,
        alt: "Bags of building material ready for use",
    },
    {
        category: "Completed",
        image: blocksSea3,
        alt: "Modern concrete architecture",
    },
    {
        category: "Materials",
        image: blocksSea3,
        alt: "Uniform gray block wall",
    },
    {
        category: "On site",
        image: blocksSea3,
        alt: "Builder working with cement",
    },
    {
        category: "Completed",
        image: blocksSea3,
        alt: "Finished masonry building exterior",
    },
];

const filters = ["All", "Materials", "On site", "Completed"];

export default function GalleryPage() {
    const [filter, setFilter] = useState("All");
    const [selected, setSelected] = useState<(typeof gallery)[number] | null>(
        null,
    );
    const visible =
        filter === "All"
            ? gallery
            : gallery.filter((item) => item.category === filter);

    return (
        <main>
            <section className="interior-hero">
                <div className="page-shell relative z-10">
                    <p className="eyebrow text-orange">Inside Integrity</p>
                    <h1 className="interior-title mt-5">
                        MATERIALS.
                        <br />
                        PEOPLE. PROGRESS.
                    </h1>
                    <p className="mt-8 max-w-xl text-base leading-7 text-white/60">
                        A closer look at the products, people, and partnerships
                        behind every dependable delivery.
                    </p>
                </div>
            </section>

            <section className="section-space bg-white">
                <div className="page-shell">
                    <div className="mb-12 flex flex-col gap-6 border-t border-charcoal/20 pt-6 md:flex-row md:items-center md:justify-between">
                        <p className="eyebrow text-ink">Browse the gallery</p>
                        <div
                            className="flex flex-wrap gap-2"
                            role="group"
                            aria-label="Filter gallery"
                        >
                            {filters.map((item) => (
                                <button
                                    className={`gallery-filter ${
                                        filter === item
                                            ? "gallery-filter-active"
                                            : ""
                                    }`}
                                    key={item}
                                    onClick={() => setFilter(item)}
                                    type="button"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
                        {visible.map((item, index) => (
                            <button
                                className="gallery-item group mb-5 block w-full overflow-hidden bg-charcoal/10 text-left"
                                key={index}
                                onClick={() => setSelected(item)}
                                type="button"
                            >
                                <Image
                                    alt={item.alt}
                                    className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                                        index % 3 === 1
                                            ? "aspect-4/5"
                                            : "aspect-4/3"
                                    }`}
                                    src={item.image}
                                    width={1000}
                                    height={1000}
                                />
                                <span className="flex items-center justify-between bg-charcoal px-4 py-3 text-xs font-bold uppercase tracking-wider text-white">
                                    {item.category}
                                    <span className="text-orange">View +</span>
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {selected && (
                <div
                    aria-label="Expanded gallery image"
                    aria-modal="true"
                    className="fixed inset-0 z-50 grid place-items-center bg-charcoal/95 p-4 md:p-10"
                    role="dialog"
                    onClick={() => setSelected(null)}
                >
                    <button
                        aria-label="Close image"
                        className="absolute right-5 top-5 grid h-11 w-11 place-items-center bg-orange text-2xl text-white"
                        onClick={() => setSelected(null)}
                        type="button"
                    >
                        ×
                    </button>
                    <Image
                        alt={selected.alt}
                        className="max-h-full max-w-full object-contain"
                        src={selected.image}
                        width={1000}
                        height={1000}
                    />
                </div>
            )}
        </main>
    );
}
