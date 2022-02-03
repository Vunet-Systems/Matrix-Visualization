import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import CSS from 'csstype';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const cardStyle: CSS.Properties = {
    padding: '16px',
    textAlign: 'center',
    borderStyle: 'solid',
    borderColor: '#f1f1f1',
    borderWidth: '1px',
    width: '100px',
  };

  let actualData: any = [];
  for (let i = 0; i < 4; i++) {
    let y: any = data.series[0]['fields'][i]['values'];
    console.log(y.buffer);
    actualData[i] = y.buffer;
  }

  console.log(actualData);

  // SOME ALGORITHM

  return (
    <div
      style={{ height: height, width: width, paddingLeft: 30, overflow: 'auto', overflowY: 'auto', overflowX: 'auto' }}
    >
      {actualData.map((value: any, index: any) => (
        <g key={index} className="row">
          {actualData[index].map((value1: any, index1: any) => (
            <div key={index1} className="card" style={cardStyle}>
              {actualData[index][index1]}
            </div>
          ))}
        </g>
      ))}
    </div>
  );
};
