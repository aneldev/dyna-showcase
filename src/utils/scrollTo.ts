export const scrollToElement___ = (containerSelector: string, elementSelector: string): boolean => {
  const element: HTMLElement = document.querySelector(elementSelector) as HTMLElement;
  if (!element) return false;

  if (element.scrollIntoView)
    element.scrollIntoView({behavior: 'smooth'});
  // else
  //   scrollToElementFallback(containerSelector, elementSelector);

  return true;
};

export const scrollToElement = (containerSelector: string, elementSelector: string): boolean => {
  const container: HTMLElement = document.querySelector(containerSelector) as HTMLElement;
  const element: HTMLElement = document.querySelector(elementSelector) as HTMLElement;
  if (!container || !element) return false;
  container.scrollTop += element.getBoundingClientRect().top - (container.offsetHeight / 2);
  return true;
};
