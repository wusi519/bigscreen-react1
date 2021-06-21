import {px} from './px';
import * as echarts from 'echarts';

export const sectionFontColor = '#79839e';
export const baseEchartOptions = {
  textStyle: {
    fontSize: px(12),
    color: sectionFontColor
  },
  grid: {
    x: '2%',
    y: '5%',
    x2: '2%',
    y2: '1%',
    containLabel: true,
  },
  title: {show: false},
  legend: {show: false},
};