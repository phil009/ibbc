/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

export function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
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

function Logo() {
    return (
        <Link
            className="inline-flex items-center gap-3"
            href="/"
            aria-label="Integrity Building and Blocks home"
        >
            <span
                className="logo-mark logo-mark-light"
                aria-hidden="true"
            >
                <span />
                <span />
            </span>
            <span className="text-base font-extrabold tracking-[-0.04em] text-white">
                INTEGRITY{" "}
                <span className="hidden sm:inline">BUILDING & BLOCKS</span>
            </span>
        </Link>
    );
}

const links = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Testimonials", to: "/testimonials" },
    { label: "Gallery", to: "/gallery" },
];

export default function SiteLayout({ children }: { children: ReactNode }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMenuOpen(false);

        const hash = window.location.hash;

        if (hash) {
            requestAnimationFrame(() => {
                document
                    .getElementById(decodeURIComponent(hash.slice(1)))
                    ?.scrollIntoView();
            });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return (
        <div
            id="top"
            className="min-h-screen bg-white text-charcoal"
        >
            <header className="absolute inset-x-0 top-0 z-30 border-b border-white/20">
                <div className="page-shell flex h-20 items-center justify-between">
                    <Logo />

                    <nav
                        aria-label="Main navigation"
                        className="hidden items-center gap-8 lg:flex"
                    >
                        {links.map((item) => {
                            const isActive =
                                item.to === "/"
                                    ? pathname === "/"
                                    : pathname === item.to ||
                                      pathname.startsWith(`${item.to}/`);

                            return (
                                <Link
                                    key={item.to}
                                    href={item.to}
                                    className={`nav-link ${
                                        isActive ? "nav-link-active" : ""
                                    }`}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <Link
                        className="hidden items-center gap-3 text-sm font-bold text-white lg:flex"
                        href="/#contact"
                    >
                        Request a quote
                        <span className="grid h-9 w-9 place-items-center bg-orange text-white">
                            <ArrowIcon diagonal />
                        </span>
                    </Link>

                    <button
                        aria-expanded={menuOpen}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        className="menu-button lg:hidden"
                        onClick={() => setMenuOpen((current) => !current)}
                        type="button"
                    >
                        <span
                            className={
                                menuOpen ? "translate-y-1.5 rotate-45" : ""
                            }
                        />
                        <span className={menuOpen ? "opacity-0" : ""} />
                        <span
                            className={
                                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                            }
                        />
                    </button>
                </div>

                {menuOpen && (
                    <nav
                        aria-label="Mobile navigation"
                        className="mobile-menu"
                    >
                        {links.map((item) => (
                            <Link
                                key={item.to}
                                href={item.to}
                            >
                                {item.label}
                                <ArrowIcon diagonal />
                            </Link>
                        ))}
                        <Link href="/#contact">
                            Request a quote
                            <ArrowIcon diagonal />
                        </Link>
                    </nav>
                )}
            </header>

            {children}

            <footer className="bg-charcoal text-white">
                <div className="page-shell py-12">
                    <div className="grid gap-10 border-b border-white/15 pb-12 md:grid-cols-3">
                        <div>
                            <Logo />
                            <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">
                                Quality blocks, cement, and dependable supply
                                for every kind of builder.
                            </p>
                        </div>
                        <div>
                            <p className="footer-label">Explore</p>
                            <div className="mt-4 grid gap-2">
                                {links.slice(1).map((item) => (
                                    <Link
                                        className="w-fit text-sm text-white/65 transition-colors hover:text-orange"
                                        key={item.to}
                                        href={item.to}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="footer-label">Products</p>
                            <p className="mt-4 text-sm leading-6 text-white/65">
                                Hollow blocks · Solid blocks
                                <br />
                                Cement · Building supplies
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pt-7 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/35 sm:flex-row sm:justify-between">
                        <p>© 2025 Integrity Building & Blocks Company</p>
                        <p>Strong materials · Honest service</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
