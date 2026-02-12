"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/labs", label: "Labs" },
  { href: "#contact", label: "Contact" },
];

const transition = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] as const };

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 64);
  });

  function isActive(href: string) {
    if (href === "#contact") return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  function linkClass(href: string) {
    return isActive(href)
      ? "text-foreground font-medium"
      : "text-muted transition-colors hover:text-foreground";
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-[60] pointer-events-none">
      {/* ─── Main bar (desktop + mobile pill) ─── */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          maxWidth: isScrolled ? 2000 : 480,
          borderRadius: isScrolled ? 0 : 9999,
          marginTop: isScrolled ? 0 : 12,
          paddingLeft: isScrolled ? 24 : 32,
          paddingRight: isScrolled ? 24 : 32,
          boxShadow: isScrolled
            ? "0 0 0 0 rgba(0,0,0,0)"
            : "0 2px 16px rgba(0,0,0,0.06)",
        }}
        transition={transition}
        className="pointer-events-auto mx-auto flex h-14 items-center border border-border/60 bg-background/80 backdrop-blur-md"
      >
        {/* ─── Left zone: "Home" in extended state ─── */}
        <motion.div
          animate={{
            width: isScrolled ? "auto" : 0,
            opacity: isScrolled ? 1 : 0,
          }}
          transition={transition}
          className="hidden md:flex flex-shrink-0 overflow-hidden"
        >
          <Link
            href="/"
            className={`text-sm whitespace-nowrap ${linkClass("/")}`}
          >
            Home
          </Link>
        </motion.div>

        {/* ─── Center zone ─── */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Brand — visible in extended */}
          <motion.span
            animate={{
              opacity: isScrolled ? 1 : 0,
              scale: isScrolled ? 1 : 0.85,
            }}
            transition={transition}
            className="hidden md:block text-[15px] font-semibold tracking-tight absolute"
            aria-hidden={!isScrolled}
          >
            Lean<span className="text-muted">Ventures</span>
          </motion.span>

          {/* Compact links — visible in pill state */}
          <motion.div
            animate={{
              opacity: isScrolled ? 0 : 1,
            }}
            transition={transition}
            className={`hidden md:flex items-center gap-8 ${isScrolled ? "pointer-events-none" : ""}`}
            aria-hidden={isScrolled}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm whitespace-nowrap ${linkClass(link.href)}`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>

          {/* Mobile: hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col items-center justify-center gap-1 w-8 h-8"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: mobileOpen ? 45 : 0,
                y: mobileOpen ? 4 : 0,
              }}
              transition={{ duration: 0.2 }}
              className="block h-[1.5px] w-5 bg-foreground origin-center"
            />
            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              transition={{ duration: 0.15 }}
              className="block h-[1.5px] w-5 bg-foreground"
            />
            <motion.span
              animate={{
                rotate: mobileOpen ? -45 : 0,
                y: mobileOpen ? -4 : 0,
              }}
              transition={{ duration: 0.2 }}
              className="block h-[1.5px] w-5 bg-foreground origin-center"
            />
          </button>
        </div>

        {/* ─── Right zone: "Services Labs Contact" in extended state ─── */}
        <motion.div
          animate={{
            width: isScrolled ? "auto" : 0,
            opacity: isScrolled ? 1 : 0,
          }}
          transition={transition}
          className="hidden md:flex flex-shrink-0 items-center gap-8 overflow-hidden"
        >
          {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm whitespace-nowrap ${linkClass(link.href)}`}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      </motion.div>

      {/* ─── Mobile dropdown ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto md:hidden mx-auto mt-2 max-w-[280px] rounded-2xl border border-border/60 bg-background/90 backdrop-blur-md p-4"
          >
            <p className="text-center text-[13px] font-semibold tracking-tight text-muted mb-4">
              Lean<span className="text-foreground">Ventures</span>
            </p>
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-4 py-2.5 text-sm text-center transition-colors ${
                    isActive(link.href)
                      ? "bg-neutral-100 text-foreground font-medium"
                      : "text-muted hover:bg-neutral-50 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
