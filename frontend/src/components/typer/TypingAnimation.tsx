import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function TypingAnimation() {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Chat With Your Own AI",
        1000,
        "Buit with Grok 🤖",
        2000,
        "Your Own Customized ChatGPT 💻",
        1500,
      ]}
      speed={50}
      style={{
        fontSize: isBelowMd ? "30px" : "50px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
}
