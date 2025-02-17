

import type { Meta, StoryObj } from '@storybook/react';
import BarChartInterface from '../../components/BarChart/BarChartInterface';
import { generateColor, generateNumber } from '../../utils';
//import BarChart from '../../components/BarChart';
import {BarChart} from 'graphjs-react'



const meta: Meta<typeof BarChart> = {
  component: BarChart
};

export default meta;
type Story = StoryObj<BarChartInterface>;


export const Default: Story = {

  args: {
    values: [
      {
        color: generateColor(false),
        y: generateNumber(-100, 100),
        x: 'Ocak'
      },
      {
        color: generateColor(false),
        y: generateNumber(-100, 100),
        x: 'Şubat'
      },
      {
        color: generateColor(false),
        y: generateNumber(-100, 100),
        x: 'Mart'
      },   {
        color: generateColor(false),
        y: generateNumber(-100, 100),
        x: 'Nisan'
      },
      {
        color: generateColor(false),
        y: generateNumber(-100, 100),
        x: 'Mayıs'
      },
      {
        color: generateColor(false),
        y: generateNumber(-100, 100),
        x: 'Haziran'
      },
      {
        color: generateColor(false),
        y: generateNumber(-100, 100),
        x: 'Temmuz'
      }, {
        color: generateColor(false),
        y: generateNumber(-100, 100),
        x: 'Ağustos'
      },
      {
        color: generateColor(false),
        y: generateNumber(-100, 100),
        x: 'Eylül'
      },
      {
        color: generateColor(false),
        y: generateNumber(-100, 100),
        x: 'Ekim'
      },
      {
        color: generateColor(false),
        y: generateNumber(-100, 100),
        x: 'Kasım'
      },
      {
        color: generateColor(false),
        y: generateNumber(-100, 100),
        x: 'Aralık'
      }
    ],
    width: 400,
    height: 400,
    onBarClick(_, item) {
        alert(item.x+" "+item.y)
    },
    title:{
      label:"Hello"
    }
  }
}

