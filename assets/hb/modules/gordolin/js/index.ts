// This script will be compiled into the JS bundle automatically.
// assets/hb/modules/gordolin/js/index.ts
interface MasonryOptions {
  itemSelector: string;
  columnWidth: string;
  gutter: number;
  fitWidth: boolean;
  percentPosition: boolean;
}

interface Masonry {
  new (element: Element, options: MasonryOptions): {
    layout(): void;
  };
}

interface ImagesLoaded {
  (element: Element, callback: () => void): void;
}

interface Window {
  Masonry: Masonry;
  imagesLoaded: ImagesLoaded;
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof window.Masonry === 'undefined') {
    console.error('Masonry not loaded');
    return;
  }
  if (typeof window.imagesLoaded === 'undefined') {
    console.error('ImagesLoaded not loaded');
    return;
  }
  const grid = document.querySelector('.masonry-grid');
  const sizer = document.querySelector('.grid-sizer');
  if (grid && sizer) {
    const msnry = new window.Masonry(grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      gutter: 10,
      fitWidth: false,
      percentPosition: true
    });
    window.imagesLoaded(grid, () => {
      msnry.layout();
    });
  } else {
    console.error('Grid container (.masonry-grid) or sizer (.grid-sizer) not found');
  }
});