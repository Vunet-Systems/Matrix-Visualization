import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import CSS from 'csstype';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const cardStyle: CSS.Properties = {
    padding: '16px',
    textAlign: 'left',
    borderStyle: 'solid',
    borderColor: '#f1f1f1',
    borderWidth: '1px',
    width: '33.3%',
  };

  let fetchedData: any = [];
  let temp: any = [];
  let i,
    j = 0,
    k: any;
  let actualData: any = [['City', 'Store', 'Count']];

  // TO FETCH THE TABLE TITLES
  for (i = 0; i < data.series[0].fields.length; i++) {
    k = data.series[0]['fields'][i]['name'];
    temp[i] = k;
  }

  fetchedData[0] = temp;

  // TO FETCH THE TABLE VALUES
  for (i = 0; i < data.series[0].fields.length; i++) {
    k = data.series[0]['fields'][i]['values'];
    fetchedData[i + 1] = k.buffer;
  }

  let l = (fetchedData[0].length - 1) * fetchedData[1].length;
  let x = 1;
  let y = 0;

  // FORMATTING THE DATA AS PER REQUIRED
  for (i = 0; i < l; i++) {
    temp = [];
    if (x === fetchedData[0].length) {
      x = 1;
      y++;
    }
    for (j = 0; j < fetchedData[0].length - 1; j++) {
      if (j === 0) {
        temp[j] = fetchedData[1][y];
      } else if (j === 1) {
        temp[j] = fetchedData[0][x];
      } else {
        temp[j] = fetchedData[x + 1][y];
      }
    }
    actualData[i + 1] = temp;
    x++;
  }

  return (
    <div
      style={{
        height: height,
        width: width,
        paddingLeft: 30,
        paddingRight: 30,
        overflow: 'auto',
        overflowY: 'auto',
        overflowX: 'auto',
      }}
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
