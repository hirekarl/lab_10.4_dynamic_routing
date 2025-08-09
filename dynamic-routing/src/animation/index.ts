import type { Variants } from "framer-motion"

export const variants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    filter: "blur(5px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.15,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    filter: "blur(5px)",
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
}
