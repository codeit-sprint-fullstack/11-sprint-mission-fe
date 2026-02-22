import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./vars.css.js";

globalStyle("html", {
  fontSize: "62.5%", // 10px = 1rem
});

globalStyle("body", {
  fontFamily: vars.font.primary,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

globalStyle("main", {
  flex: 1,
  width: "100%",
});