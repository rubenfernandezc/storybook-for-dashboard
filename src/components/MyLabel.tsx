
import './mylabel.css'

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

export const MyLabel = (
    // props: Props
    
    // destructuramos el objeto props
    { 
        label = 'No label', 
        size = 'normal', 
        color = 'primary', 
        allCaps = false,
        fontColor
    }: MyLabelProps
    ) => {
    return (
        <span 
            className={`label ${size} text-${color}`}
            style= {{ color: fontColor}}
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
    );
    }
