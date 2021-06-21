import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart10 = () => {
  const divRef = useRef(null);

  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      xAxis: {
        type: 'category',
        data: ['入室抢劫', '当街偷盗', '团伙诈骗', '刑事案件', '民事案件'],
        axisTick: {show: false},
        axisLine: {lineStyle: {color: '#083b70'}},
        axisLabel:{
          formatter(value){
            if(value.length>2){
              const array=value.split('');
              array.splice(2,0,'\n');
              return array.join('')
            }else{
              return value
            }
          }
        }
        },

      yAxis: {
        splitLine:{show:false},
        axisLine: {
          show:true,
          lineStyle: {color:'#083B70'}
        },
      },
      series: [{
        data: [40,22,20,18,32],
        type: 'bar',
        color:new echarts.graphic.LinearGradient(0,0,1,0,[{
          offset:0,
          color:'#0a97fb'
        },{
          offset:1,
          color:'#1e34fa'
        }
        ])
      }]
    }));

  }, []);
  return (
      <div ref={divRef} className="chart"/>
  );
};