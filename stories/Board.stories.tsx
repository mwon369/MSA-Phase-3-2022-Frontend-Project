import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Board from '../components/Board';

export default {
  title: 'Game Components/TicTacToe Grid',
  component: Board,
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args : any) => <Board {...args} />;

export const ExampleWinConfig1 = Template.bind({});
ExampleWinConfig1.play = async ({ canvasElement }) => {
  for (let i = 0; i < 7; i++) {
    const canvas = within(canvasElement);
    const square = canvas.queryAllByRole("button")[i];
    await userEvent.click(square);
  }
}

export const ExampleWinConfig2 = Template.bind({});
ExampleWinConfig2.play = async ({ canvasElement }) => {
  for (let i = 0; i < 8; i += 3) {
    const canvas = within(canvasElement);
    const square1 = canvas.queryAllByRole("button")[i];
    await userEvent.click(square1);
    if (i < 6) {
      const square2 = canvas.queryAllByRole("button")[i + 1];
      await userEvent.click(square2);
    }
  }
}

export const ExampleWinConfig3 = Template.bind({});
ExampleWinConfig3.play = async ({ canvasElement }) => {
  for (let i = 0; i < 6; i += 2) {
    const canvas = within(canvasElement);
    const square1 = canvas.queryAllByRole("button")[i / 2];
    await userEvent.click(square1);
    const square2 = canvas.queryAllByRole("button")[i + 3];
    await userEvent.click(square2);
  }
}