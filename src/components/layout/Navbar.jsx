import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Container from './Container';
import CivicScanLogo from '../ui/CivicScanLogo';
import Button from '../ui/Button';
import { navLinks } from '../../data/siteData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      if (prefersReducedMotion || !headerRef.current) return;

      gsap.fromTo(
        headerRef.current,
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out' }
      );
    },
    { scope: headerRef }
  );

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_1px_2px_rgba(16,28,44,0.03)]'
          : 'bg-white border-b border-slate-200/70'
      }`}
    >
      <div className="mx-auto w-full max-w-[1360px] min-[900px]:max-w-none px-4 sm:px-6 min-[900px]:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between sm:h-[70px]">
          <a
            href="#top"
            onClick={handleLinkClick}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] rounded shrink-0"
            aria-label="CivicScan Home"
          >
            <CivicScanLogo variant="dark" />
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden min-[900px]:flex min-[900px]:items-center min-[900px]:gap-6 lg:gap-8 xl:gap-9"
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-1 text-sm font-medium text-[#142235] transition-colors hover:text-[#3978E8] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#3978E8] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] rounded-xs"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden min-[900px]:flex min-[900px]:items-center min-[900px]:gap-3 shrink-0">
            <Button
              href="#pilot-programme"
              variant="navy"
              size="sm"
              icon={ArrowUpRight}
            >
              Partner With Us
            </Button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex min-[900px]:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-[#142235] hover:bg-[#F4F7FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`min-[900px]:hidden overflow-hidden border-t border-slate-200 bg-white transition-all duration-250 ease-out ${
          mobileMenuOpen ? 'max-h-[420px] opacity-100 shadow-lg' : 'max-h-0 opacity-0 border-t-0'
        }`}
      >
        <div className="px-4 py-5 sm:px-6">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between rounded-md px-3 py-2.5 text-base font-medium text-[#142235] hover:bg-[#F4F7FA] hover:text-[#3978E8] transition-colors"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[#68788D]">→</span>
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <Button
              href="#pilot-programme"
              onClick={handleLinkClick}
              variant="primary"
              size="md"
              className="w-full"
              icon={ArrowUpRight}
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

