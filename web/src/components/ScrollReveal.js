import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

function ScrollReveal({
  children,
  className,
  threshold = 0.18,
  rootMargin = '0px 0px 18% 0px',
  mountOnVisible = false,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible, rootMargin, threshold]);

  return (
    <div
      ref={ref}
      className={clsx('scroll-reveal', isVisible && 'is-visible', className)}
    >
      {mountOnVisible ? (isVisible ? children : null) : children}
    </div>
  );
}

export default ScrollReveal;
