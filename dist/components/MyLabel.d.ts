/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * Label contents
    */
    label: string;
    /**
    * How large should the button be?
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * What color to use
     * @default 'primary'
     * */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
    * What font color to use
    * @default 'primary'
     * */
    fontColor: string;
    /**
     * All caps
     * @default false
     * */
    allCaps: boolean;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor }: MyLabelProps) => JSX.Element;
