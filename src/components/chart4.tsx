import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart4 = () => {
  const divRef = useRef(null);

  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [0,2,4,6,8,10,12,14,16,18,20,22,24],
          splitLine:{show:true,lineStyle:{color:'#073e78'}},
          axisTick: {show: false},
          axisLine: {show: false},
        },
        yAxis: {
          type: 'value',
          splitLine:{lineStyle:{color:'#073e78'}},
          axisLabel: {
            formatter(value) {
              return value * 100 + '%';
            }
          }
        },
      grid: {
        x: '2%',
        y: '5%',
        x2: '5%',
        y2: '5%',
        containLabel: true,
      },
        series: [{
          name:'故意伤人',
          data: [
            0.15,0.23,0.16,
            0.33,0.15,0.25,
            0.28,0.11,0.21,
            0.18,0.31,0.33,
            0.35,
          ],
          symbol:'circle',
          symbolSize:5,
          lineStyle:{width:2},
          areaStyle:{
            color:new echarts.graphic.LinearGradient(0,0,0,1,[{
              offset:0,
              color:'#404b9f'
            },{
             offset: 1,
             color: "#1b1d52"
            }]),
          },
          type: 'line',
        }]
      })
    );
  }, []);
  return (
    <div className="bordered 案发时段">
      <h2>发案时段分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};