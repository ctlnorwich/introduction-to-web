declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    "data-count"?: number;
    "data-label"?: string;
    "tabs"?: boolean;
  }

  // Add a CSS custom property to the style object
  interface CSSProperties {
    "--theme-color"?: "black" | "white";
  }
}