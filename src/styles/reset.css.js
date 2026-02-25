import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("ul, ol", {
  listStyle: "none",
});

globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
});

globalStyle("button", {
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
  font: "inherit",
  color: "inherit",
});

globalStyle("input, textarea", {
  font: "inherit",
});

globalStyle("img", {
  maxWidth: "100%",
  display: "block",
});