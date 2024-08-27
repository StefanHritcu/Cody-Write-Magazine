import { useSpring } from "@react-spring/web";

export function useButtonAnimation(isHovered) {
  return useSpring({
    to: {
      transform: isHovered
        ? "scale(2) rotate(360deg)"
        : "scale(1.6) rotate(0deg)",
      backgroundColor: isHovered ? "#0056b3" : "",
      color: isHovered ? "#ffff" : "",
    },
    config: { tension: 100, friction: 12 },
  });
}
