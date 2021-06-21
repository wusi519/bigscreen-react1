import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {sectionFontColor} from '../shared/base-echart-options';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart1=()=>{
  const divRef = useRef(null);

  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
        xAxis: {
          type: 'category',
          data: ['城关区', '七里河区', '西固区', '安宁区', '红古区', '榆中县', '皋兰县', '永登县'],
          axisLabel: {
            interval:0,
            fontSize: px(12),
            formatter(value){
              if(value.length>2){
                const array=value.split('');
                array.splice(2,0,'\n');
                return array.join('')
              }else{
                return value
              }
            }
          },
          axisTick:{show:false}
        },

        yAxis: {
          type:'value',
          splitLine:{show:false},
          axisLine:{
            show: true,
            lineStyle:{color:sectionFontColor}
          },
          axisLabel: {
            fontSize: px(12)
          }
        },
        series: [{
          type: 'bar',
          data: [10, 20, 36, 41, 15, 21, 30, 18],
        }]
      })
    );
  }, []);
  return(
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"/>
    </div>
  )
}