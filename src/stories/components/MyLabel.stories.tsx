import { ComponentMeta, ComponentStory } from "@storybook/react"
import { MyLabel } from "../../components/MyLabel"

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        label: { control: 'text' },
        size: { control: 'select'
        // , options: ['normal', 'h1', 'h2', 'h3'] 
        },
        color: { control: 'select' },
        allCaps: { control: 'boolean' },
        fontColor: { control: 'color' }
    },
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/>

export const Basic = Template.bind({})
// rompemos la referencia con el objeto para no estar modificando el objeto original
Basic.args = {
    size: 'normal',
    allCaps: false
}

export const AllCaps = Template.bind({})
AllCaps.args = {
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({})
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({})
CustomFontColor.args = {
    size: 'normal',
    fontColor: '#5517ac'
}