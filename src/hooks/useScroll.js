export function useScroll(scrollAmount = 320) {
  const scroll = (direction, ref) => {
    if (!ref || !ref.current) return;

    if (direction === "left") {
      ref.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return { scroll };
}
