import "./mylabel.css";

export interface MyLabelProps {
  /**
   * This is the phase to show
   **/
  label?: string;
  /**
   * This is the size of the font
   **/
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * This is theme of the label
   **/
  theme?: "primary" | "secondary" | "tertiary";
  /**
   * If want all capitalize
   **/
  allCaps?: boolean;
  /**
   * What background color to use
   */
  color?: string;
}

/**
 * Label UI component
 **/
export const MyLabel = ({
  allCaps = false,
  theme,
  label = "No label",
  size = "normal",
  color,
}: MyLabelProps) => {
  let phrase = label;
  if (allCaps) {
    phrase = phrase.replace(/\w\S*/g, (w) =>
      w.replace(/^\w/, (c) => c.toUpperCase())
    );
  }

  return (
    <span
      className={`label ${size} ${theme && "text-" + theme}`}
      style={{ color }}
    >
      {phrase}
    </span>
  );
};
