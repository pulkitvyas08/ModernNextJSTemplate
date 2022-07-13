import { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "10px",
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
    },
  },
  variants: {
    solid: {
      color: "white",
      bg: "#003459",
      fontWeight: "700",
      _hover: {
        bg: "white",
        color: "#003459",
      },
    },
    outline: {
      border: "none",
      color: "#003459",
      bg: "white",
      fontWeight: "700",
      _hover: {
        bg: "#003459",
        color: "white",
      },
    },
  },
};
