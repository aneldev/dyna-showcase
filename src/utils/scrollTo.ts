export const scrollToElement = (containerSelector: string, elementSelector: string): boolean => {
  const container: HTMLElement = document.querySelector(containerSelector) as HTMLElement;
  const element: HTMLElement = document.querySelector(elementSelector) as HTMLElement;
  if (!container || !element) return false;
  container.scrollTop += element.getBoundingClientRect().top - (container.offsetHeight / 2);
  return true;
};
