import { useState, useEffect } from 'react';

interface BreakPoints {
  [key: string]: string;
}

const breakPoints: BreakPoints = {
  sm: '640',
  md: '768',
  lg: '1024',
  xl: '1280',
  '2xl': '1536px',
};

const useMediaQuery = (props: string): boolean => {
  const query = `(max-width: ${breakPoints[props]}px)`;
  const getMatches = (query: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };
  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    console.log(matchMedia, query)
    handleChange();
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [handleChange, query]);
  return matches;
};

const useIsMobile = () => {
  const [isMobile, setMobile] = useState<boolean>(false);
  const mobile = useMediaQuery('md');
  useEffect(() => {
    setMobile(mobile);
  }, [mobile]);
  return isMobile;
};

export default useIsMobile;