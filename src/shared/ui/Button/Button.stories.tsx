import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, SizeButton, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Button',
    component: Button,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'TEXT'
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'TEXT',
    theme: ThemeButton.CLEAR
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'TEXT',
    theme: ThemeButton.CLEAR_INVERTED
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'TEXT',
    theme: ThemeButton.OUTLINE
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    children: 'TEXT',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.M
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'TEXT',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.L
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'TEXT',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.XL
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'TEXT',
    theme: ThemeButton.BACKGROUND
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'TEXT',
    theme: ThemeButton.BACKGROUND_INVERTED
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    square: true
};

export const SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    square: true,
    size: SizeButton.M
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    square: true,
    size: SizeButton.L
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    square: true,
    size: SizeButton.XL
};

