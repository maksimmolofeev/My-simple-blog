import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, ThemeText } from './Text';

export default {
    title: 'shared/Text',
    component: Text,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const titleAndText = Template.bind({});
titleAndText.args = {
    title: 'Titlte',
    text: 'TEXT TEXT TEXT'
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Titlte'
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'TEXT TEXT TEXT'
};

export const titleAndTextDark = Template.bind({});
titleAndTextDark.args = {
    title: 'Titlte',
    text: 'TEXT TEXT TEXT'
};
titleAndTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Titlte'
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'TEXT TEXT TEXT'
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const titleAndTextError = Template.bind({});
titleAndTextError.args = {
    title: 'Titlte',
    text: 'TEXT TEXT TEXT',
    theme: ThemeText.ERROR
};

export const onlyTitleError = Template.bind({});
onlyTitleError.args = {
    title: 'Titlte',
    theme: ThemeText.ERROR
};

export const onlyTextError = Template.bind({});
onlyTextError.args = {
    text: 'TEXT TEXT TEXT',
    theme: ThemeText.ERROR
};