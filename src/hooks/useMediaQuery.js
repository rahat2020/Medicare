"use client";

import { useState, useLayoutEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useLayoutEffect(() => {
    const media = window.matchMedia(query);
    const listener = (event) => {
      setMatches(event.matches);
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

export default useMediaQuery;
