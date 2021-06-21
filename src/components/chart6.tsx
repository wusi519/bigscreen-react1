import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import Lanzhou from '../geo/Lanzhou.json';
import {color} from 'echarts';

export const Chart6 = () => {
  const divRef = useRef(null);
  const colors = {'永登县': '#BB31F7', '七里河区': '#15B8FD', '榆中县': '#ee6666'};
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    echarts.registerMap('LZ', Lanzhou);
    myChart.setOption(createEchartsOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      geo: {
        show: true,
        map: 'LZ',
        label: {
          normal: {show: false},
          emphasis: {show: false,}
        },
        roam: false,
        itemStyle: {
          normal: {
            areaColor: '#0e1c47',
            borderWidth: 3,/*设置外层边框*/
            borderColor: '#0287d1',/*shadowColor: '#fff',*/
            shadowColor: '#0197e2',
            shadowBlur: 30,
            opacity: 0.4
          }
        }
      },
      series: [
        {
          type: 'map',
          mapType: 'LZ', // 自定义扩展图表类型
          data: [
            {name: '永登县', value: 10},
          ],
          label: {show: false, color: 'white'},
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['永登县'],
            borderColor: '#01A7F7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
        {
          type: 'map',
          mapType: 'LZ', // 自定义扩展图表类型
          data: [
            {name: '七里河区', value: 100},
          ],
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['七里河区'],
            borderColor: 'yellow',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
        {
          type: 'map',
          mapType: 'LZ', // 自定义扩展图表类型
          data: [
            {name: '榆中县', value: 100},
          ],
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['榆中县'],
            borderColor: '#01A7F7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
      ]
    }));
  }, []);
  return (
    <div className="bordered 籍贯">
      <h2>全市犯罪人员籍贯分布地</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart"/>
        <div className="legend bordered">
          <span className="icon" style={{background: colors['永登县']}}/>永登县
          <span className="icon" style={{background: colors['七里河区']}}/>七里河区
          <span className="icon" style={{background: colors['榆中县']}}/>榆中县
        </div>
        <div className="notes">兰州市区域地图</div>
      </div>

    </div>
  );
};