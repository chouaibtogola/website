export const checkResponsiveness = () => {
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  };

  const viewport = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  return {
    isMobile: viewport.width < breakpoints.md,
    isTablet: viewport.width >= breakpoints.md && viewport.width < breakpoints.lg,
    isDesktop: viewport.width >= breakpoints.lg
  };
}; 