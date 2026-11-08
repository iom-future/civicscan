import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 22,
  duration = 0.65,
  stagger = 0,
  as: Component = 'div',
}) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion || !containerRef.current) return;

      const targets =
        stagger > 0 ? containerRef.current.children : containerRef.current;

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger: stagger > 0 ? stagger : undefined,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 86%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <Component ref={containerRef} className={className}>
      {children}
    </Component>
  );
}

