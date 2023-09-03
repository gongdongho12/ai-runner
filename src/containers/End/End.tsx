import DefaultLayout from '@/components/DefaultLayout';
import FlexCenter from '@/components/FlexCenter';
import React, { FunctionComponent } from 'react';
import { Bar } from '@ant-design/plots';
import { useRecoilValue } from 'recoil';
import answerState from '@/state/answer';

interface IDemoBarProps {
  data: boolean[]
}

const ResultBar: FunctionComponent<IDemoBarProps> = ({ data }) => {
  
  const chartData = data.map((answer, i) => {
    return {
      solution: `${i + 1}번 지문`,
      result: answer ? 10 : 0
    }
  })
  console.log('chartData', chartData)
  const config: any = {
    data: chartData,
    xField: 'result',
    yField: 'solution',
    seriesField: 'solution',
    legend: null,
    width: '100%',
    height: '100%'
  };
  return <Bar {...config} style={{ width: '100%', height: '100%' }} />;
};

const End: FunctionComponent = (props) => {
  const data = useRecoilValue<boolean[]>(answerState);
  console.log('data', data)
  return <DefaultLayout>
    <FlexCenter style={{ fontSize: 20, overflow: 'auto', flexDirection: 'column', height: '100%' }}>
      <div>
        <b>최종 결과 정리</b>
      </div>
      <ResultBar data={data} />
      <div>
        점수: {data.reduce((prev, next) => prev + (next ? 10 : 0), 0)}점
      </div>
    </FlexCenter>
  </DefaultLayout>;
};

export default End;
