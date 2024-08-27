import { useState } from "react";
import { animated } from "@react-spring/web";
import { useButtonAnimation } from "./../../animations/button/buttonAnimations";

function ButtonWithEffect({ children, onClick, ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  // Ottieni gli stili in base allo stato
  const styles = useButtonAnimation(isHovered);

  return (
    <animated.button
      style={styles}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </animated.button>
  );
}

export default ButtonWithEffect;
