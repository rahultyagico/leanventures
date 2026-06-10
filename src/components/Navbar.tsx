"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import { ChevronDownIcon } from "./icons";

type NavChild = { href: string; label: string };
type NavGroup = { category: string; items: NavChild[] };

type NavLink = {
  href: string;
  label: string;
  groups?: NavGroup[];
};

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    groups: [
      {
        category: "AI Automation Services",
        items: [
          { href: "/services/ai-automation", label: "AI Automation" },
          { href: "/services/ai-os", label: "Build Your AI OS" },
          { href: "/services/ai-consultation", label: "One Hour AI Consultation" },
        ],
      },
      {
        category: "No Code Services",
        items: [
          { href: "/services/airtable", label: "Airtable Services" },
          { href: "/services/self-hosting", label: "Self Hosting Infrastructure" },
          { href: "/labs", label: "Customized Solutions" },
        ],
      },
    ],
  },
  { href: "#contact", label: "Contact" },
];

const transition = {
  duration: 0.35,
  ease: [0.25, 0.1, 0.25, 1.0] as const,
};

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
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

  function handleHomeClick(e: React.MouseEvent) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const openDropdown = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setDropdownOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  }, []);

  function renderDesktopLink(link: NavLink) {
    if (link.groups) {
      return (
        <div
          key={link.href}
          className="relative"
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          <span
            className={`inline-flex items-center gap-1 text-sm whitespace-nowrap cursor-default ${linkClass(link.href)}`}
          >
            {link.label}
            <motion.span
              animate={{ rotate: dropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex scale-75"
            >
              <ChevronDownIcon />
            </motion.span>
          </span>
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -4, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -4, scale: 0.97 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-72 rounded-xl border border-border/60 bg-background/90 backdrop-blur-md p-2 shadow-lg"
              >
                {link.groups.map((group, gi) => (
                  <div key={group.category} className={gi > 0 ? "mt-2 pt-2 border-t border-border/40" : ""}>
                    <p className="px-3 pt-1 pb-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted/50">
                      {group.category}
                    </p>
                    {group.items.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                          pathname === child.href
                            ? "bg-neutral-100 text-foreground font-medium"
                            : "text-muted hover:bg-neutral-50 hover:text-foreground"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <Link
        key={link.href}
        href={link.href}
        className={`text-sm whitespace-nowrap ${linkClass(link.href)}`}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-[60] pointer-events-none">
      {/* ─── Main bar (desktop + mobile pill) ─── */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          maxWidth: isScrolled ? 2000 : 560,
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
            flex: isScrolled ? 1 : 0,
            opacity: isScrolled ? 1 : 0,
          }}
          transition={transition}
          className="hidden md:flex items-center overflow-hidden"
        >
          <Link
            href="/"
            onClick={handleHomeClick}
            className={`text-sm whitespace-nowrap ${linkClass("/")}`}
          >
            Home
          </Link>
        </motion.div>

        {/* ─── Center zone ─── */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Brand — visible in extended */}
          <motion.div
            animate={{
              opacity: isScrolled ? 1 : 0,
              scale: isScrolled ? 1 : 0.85,
            }}
            transition={transition}
            className={`hidden md:block absolute ${!isScrolled ? "pointer-events-none" : ""}`}
            aria-hidden={!isScrolled}
          >
            <Link
              href="/"
              onClick={handleHomeClick}
              className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-70"
            >
              Create<span className="text-muted"> Workflow</span>
            </Link>
          </motion.div>

          {/* Compact links — visible in pill state */}
          <motion.div
            animate={{
              opacity: isScrolled ? 0 : 1,
            }}
            transition={transition}
            className={`hidden md:flex items-center gap-8 ${isScrolled ? "pointer-events-none" : ""}`}
            aria-hidden={isScrolled}
          >
            {NAV_LINKS.map((link) => renderDesktopLink(link))}
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

        {/* ─── Right zone: links in extended state ─── */}
        <motion.div
          animate={{
            flex: isScrolled ? 1 : 0,
            opacity: isScrolled ? 1 : 0,
          }}
          transition={transition}
          className={`hidden md:flex items-center justify-end gap-8 min-w-0 ${!isScrolled ? "pointer-events-none" : ""}`}
        >
          {NAV_LINKS.filter((l) => l.href !== "/").map((link) =>
            renderDesktopLink(link)
          )}
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
            <Link
              href="/"
              onClick={(e) => { handleHomeClick(e); setMobileOpen(false); }}
              className="block text-center text-[13px] font-semibold tracking-tight text-muted mb-4 transition-opacity hover:opacity-70"
            >
              Create<span className="text-foreground"> Workflow</span>
            </Link>
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  {link.groups ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileServicesOpen(!mobileServicesOpen)
                        }
                        className={`w-full flex items-center justify-center gap-1 rounded-lg px-4 py-2.5 text-sm transition-colors ${
                          isActive(link.href)
                            ? "bg-neutral-100 text-foreground font-medium"
                            : "text-muted hover:bg-neutral-50 hover:text-foreground"
                        }`}
                      >
                        {link.label}
                        <motion.span
                          animate={{
                            rotate: mobileServicesOpen ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                          className="inline-flex scale-75"
                        >
                          <ChevronDownIcon />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            {link.groups.map((group, gi) => (
                              <div key={group.category} className={gi > 0 ? "mt-2 pt-2 border-t border-border/40" : "mt-1"}>
                                <p className="px-4 pb-1 text-[10px] font-semibold uppercase tracking-widest text-muted/50 text-center">
                                  {group.category}
                                </p>
                                {group.items.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => {
                                      setMobileOpen(false);
                                      setMobileServicesOpen(false);
                                    }}
                                    className={`block rounded-lg px-6 py-2 text-sm text-center transition-colors ${
                                      pathname === child.href
                                        ? "text-foreground font-medium"
                                        : "text-muted hover:text-foreground"
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-lg px-4 py-2.5 text-sm text-center transition-colors ${
                        isActive(link.href)
                          ? "bg-neutral-100 text-foreground font-medium"
                          : "text-muted hover:bg-neutral-50 hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
