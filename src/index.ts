export interface ScrollAvailability {
  horizontally: boolean;
  vertically: boolean;
}

/* istanbul ignore next */
export function getScrollAvailability(
  scrollable: {
    scrollTop: number;
    scrollLeft: number;
  } | null
): ScrollAvailability {
  if (!scrollable) return { horizontally: false, vertically: false };

  const y1 = scrollable.scrollTop;
  scrollable.scrollTop += 1;
  const y2 = scrollable.scrollTop;
  scrollable.scrollTop -= 1;
  const y3 = scrollable.scrollTop;
  scrollable.scrollTop = y1;

  const x1 = scrollable.scrollLeft;
  scrollable.scrollLeft += 1;
  const x2 = scrollable.scrollLeft;
  scrollable.scrollLeft -= 1;
  const x3 = scrollable.scrollLeft;
  scrollable.scrollLeft = x1;

  return {
    horizontally: x1 !== x2 || x2 !== x3,
    vertically: y1 !== y2 || y2 !== y3,
  };
}

/* istanbul ignore next */
export function getBreakpoint(width?: number): string {
  if (!width) width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (width < 576) return 'xs';
  if (width >= 576 && width < 768) return 'sm';
  if (width >= 768 && width < 992) return 'md';
  if (width >= 992 && width < 1200) return 'lg';
  if (width >= 1200 && width < 1400) return 'xl';
  return 'xxl';
}

export function colorToThemeColor(color: string): string {
  switch (color) {
    case 'blue':
      return 'primary';
    case 'green':
      return 'success';
    case 'red':
      return 'danger';
    case 'yellow':
      return 'warning';
    case 'black':
      return 'dark';
  }
  return color;
}

/* istanbul ignore next */
export function isElementVisible(element: HTMLElement): boolean {
  return !(!element.offsetParent && element.offsetWidth === 0 && element.offsetHeight === 0);
}
