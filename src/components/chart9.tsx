import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart9 = () => {
  const divRef = useRef(null);

  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      grid:{
        x:'20%',
        y:'10%',
        x2:'5%',
        y2:'15%',
      },
      color: '#f7a110',
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 18,28,38,48,58,78,],
        splitLine:{show:true,lineStyle:{color:'#073e78'}},
        axisTick:{show:false},
        axisLine:{show:false},
      },
      yAxis: {
        type: 'value',
        splitLine:{show:true,lineStyle:{color:'#073e78'}},
        axisTick:{show:false},
        axisLine:{show:false},
        axisLabel:{
          formatter(value){
            return value*100+'%'
          },
        },
      },
      series: [{
        data: [0.19,0.20,0.25,0.36,0.26,0.20,0.08,0.06],
        type: 'line',
        symbol:'circle',
        symbolSize:8,
        lineStyle:{width:2},
        areaStyle: {
          color:new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
            offset:0,
            color:'#f7a110'
          },{
            offset:1,
            color:'#1b1d52'
          }])
        },
      }]

    }));

  }, []);
  return (
    <div className="年龄段-图3">
      <h3>犯罪年龄趋势图</h3>
      <div ref={divRef} className="chart"/>
    </div>
  );
};