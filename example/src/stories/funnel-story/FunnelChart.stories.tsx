

import type { Meta,StoryObj } from '@storybook/react';
import { FunnelChartProps } from '../../interfaces/funnel-interfaces';
import FunnelChart from '../../components/funnel-chart/FunnelChart';

const meta: Meta<typeof FunnelChart> = {
  component: FunnelChart
};

export default meta;
type Story = StoryObj<FunnelChartProps>;


export const Default:Story={

    args:{
      data:[ {
        value:999,
        name:"K",
        backgroundColor:"lightgreen"
      },
      {
        value:Math.round(Math.random()*1809999),
        name:"B",
        backgroundColor:"green"
      },
      {
        value:Math.round(Math.random()*18999990),
        name:"C",
        backgroundColor:"red"
      },
      {
        value:Math.round(Math.random()*18099999),
        name:"D",
        backgroundColor:"black"
      },{
        value:Math.round(Math.random()*18099999),
        name:"E",
        backgroundColor:"yellow"
      }],
      width:1000,
      height:500
    }
}

