import React from 'react';
import './home.scss';
import '../shared/reset.scss';
import headerBg from '../images/header.png';
import {Chart1} from '../components/chart1';
import {Chart2} from '../components/chart2';
import {Chart3} from '../components/chart3';
import {Chart4} from '../components/chart4';
import {Chart5} from '../components/chart5';
import {Chart6} from '../components/chart6';
import {Chart7} from '../components/chart7';
import {Chart8} from '../components/chart8';
import {Chart9} from '../components/chart9';
import {Chart10} from '../components/chart10';
import {Chart11} from '../components/chart11';

export const Home = () => {
  const year = new Date().getFullYear();
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}}/>
      <main>
        <section className="section1">
          <Chart1/>
          <Chart2/>
        </section>
        <section className="section2">
          <Chart3/>
          <Chart4/>
        </section>
        <section className="bordered section3">
          <Chart5/>
        </section>
        <section className="section4">
          <Chart6/>
          <div className="bordered 年龄段">
            <h2>犯罪人员年龄段分布</h2>
            <div className="charts">
              <Chart7/>
              <Chart8/>
              <Chart9/>
            </div>
          </div>
        </section>
        <section className="section5">
          <div className="bordered row1 案发类型">
            <h2>案发类型统计</h2>
            <div className="charts">
              <Chart10/>
              <Chart11/>
            </div>
          </div>
          <div className="bordered row2 案发类型">
            <h2>案发街道统计</h2>
            <div className="charts">

            </div>
          </div>
          <div className="bordered row3 案发类型">
            <h2>作案手段分析</h2>
            <div className="charts">

            </div>
          </div>

        </section>
      </main>
      <footer>
        大屏数据平台利用大数据技术采集犯罪作案信息是一套实时监控的数据系统Copyright&copy;{year}兰州市公安局
      </footer>
    </div>
  );
};