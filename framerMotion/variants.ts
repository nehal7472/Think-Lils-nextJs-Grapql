import { Variants } from "framer-motion";

export const fadeIn = (
  direction: "up" | "down" | "left" | "right" = "up",
  delay: number = 0,
  duration: number = 0.8
): Variants => {
  const distance = 50; // how far elements move before fading in

  let x = 0;
  let y = 0;

  if (direction === "up") y = distance;
  if (direction === "down") y = -distance;
  if (direction === "left") x = distance;
  if (direction === "right") x = -distance;

  return {
    hidden: {
      x,
      y,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // smooth cubic bezier
      },
    },
  };
};
