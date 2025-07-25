import { type RefObject, useEffect, useState } from 'react';

export function useOnScreen(ref: RefObject<Nullable<HTMLElement>>, options?: IntersectionObserverInit) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(!!entry?.isIntersecting), options);
    if (!ref?.current) return;
    observer?.observe(ref.current);
    return () => observer?.disconnect();
  }, [ref, options]);

  return isIntersecting;
}
