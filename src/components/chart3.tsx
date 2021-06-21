import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart3 = () => {
  const divRef = useRef(null);

  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      legend: {
        bottom: '1',
        textStyle: {color: 'white'},
        itemWidth:3,
        itemHeight:3,
      },
        grid: {
          x: '3%',
          y: '5%',
          x2:'8%',
          y2: '12%',
          containLabel: true,
        },
      xAxis: {

        type: 'category',
        boundaryGap: false,
        data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(value) {
            return value * 100 + '%';
          }
        }
      },
        series: [
          {name: '抢劫', type: 'line', data: [0.41, 0.02, 0.08, 0.45, 0.45, 0.56, 0.47, 0.48, 0.39].reverse(),},
          {name: '醉驾', type: 'line', data: [0.12, 0.25, 0.24, 0.36, 0.02, 0.07, 0.08, 0.29, 0.1].reverse(),},
          {name: '故意杀人', type: 'line', data: [0.01, 0.02, 0.09, 0.05, 0.07, 0.08, 0.09, 0.21, 0.11].reverse(),},
          {name: '盗窃', type: 'line', data: [0.24, 0.01, 0.06, 0.27, 0.18, 0.19, 0.1, 0.12, 0.02].reverse(),},
        ].map(obj=>({
          ...obj,
          symbol:'circle',
          symbolSize:5,
          lineStyle:{width:1}
        }))
      })
    );
  }, []);
  return (
    <div className="bordered 发案趋势">
      <h2>发案趋势分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};