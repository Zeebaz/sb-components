/// <reference types="react" />
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
export declare const MyLabel: ({ allCaps, theme, label, size, color, }: MyLabelProps) => JSX.Element;
