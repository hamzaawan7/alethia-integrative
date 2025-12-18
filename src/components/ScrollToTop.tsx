import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function isScrollable(el: Element) {
  const style = window.getComputedStyle(el);
  const overflowY = style.overflowY;
  return (overflowY === 'auto' || overflowY === 'scroll') && (el as HTMLElement).scrollHeight > (el as HTMLElement).clientHeight;
}

function scrollAllToTop() {
  // Window scroll
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

  // Document scroll
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  // Common app containers
  const root = document.getElementById('root');
  if (root && root instanceof HTMLElement) root.scrollTop = 0;
  const main = document.querySelector('main');
  if (main && main instanceof HTMLElement) main.scrollTop = 0;

  // Any scrollable containers inside the app
  if (root) {
    const nodes = Array.from(root.querySelectorAll('*'));
    for (const node of nodes) {
      if (node instanceof HTMLElement && isScrollable(node)) {
        node.scrollTop = 0;
      }
    }
  }
}

export default function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    // Run twice to handle cases where layout/iframes/styles adjust after first paint
    scrollAllToTop();
    requestAnimationFrame(() => {
      scrollAllToTop();
      requestAnimationFrame(() => scrollAllToTop());
    });
  }, [location.key, location.pathname, location.search, location.hash]);

  return null;
}
