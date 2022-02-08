import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import CSS from 'csstype';
import { useTheme } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  // FUNCTION FOR GIVING STYLE TO THE CARDS
  function cardStyle(value: number) {
    let x: CSS.Properties = {
      padding: '16px',
      textAlign: 'left',
      borderStyle: 'solid',
      borderColor: '#f1f1f1',
      borderWidth: '1px',
      width: '33.3%',
      backgroundColor: value > thresholdValue1 ? (value > thresholdValue2 ? cardColor2 : cardColor1) : 'transparent',
    };
    return x;
  }

  let fetchedData: any = [];
  let temp: any = [];
  let i,
    j = 0,
    k: any;
  let actualData: any = [['City', 'Store', 'Count']];

  // TO FETCH THE SQL TABLE TITLES
  for (i = 0; i < data.series[0].fields.length; i++) {
    k = data.series[0]['fields'][i]['name'];
    temp[i] = k;
  }

  fetchedData[0] = temp;

  // TO FETCH THE SQL TABLE VALUES
  for (i = 0; i < data.series[0].fields.length; i++) {
    k = data.series[0]['fields'][i]['values'];
    fetchedData[i + 1] = k.buffer;
  }

  let l = (fetchedData[0].length - 1) * fetchedData[1].length;
  let x = 1;
  let y = 0;

  console.log(fetchedData);

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

  console.log(actualData);

  // ADDING PANEL OPTIONS
  let theme = useTheme();
  let thresholdValue1: number = options.thresholdSlider1;
  let thresholdValue2: number = options.thresholdSlider2;
  let cardColor1: string, cardColor2: string;
  switch (options.cardColor1) {
    case 'red':
      cardColor1 = theme.palette.redBase;
      break;
    case 'blue':
      cardColor1 = theme.palette.blue95;
      break;
    case 'green':
      cardColor1 = theme.palette.greenBase;
      break;
  }
  switch (options.cardColor2) {
    case 'purple':
      cardColor2 = theme.palette.purple;
      break;
    case 'gray':
      cardColor2 = theme.palette.gray1;
      break;
    case 'orange':
      cardColor2 = theme.palette.orangeDark;
      break;
  }

  // VISUALIZING THE DATA ON THE PANEL
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
            <div key={index1} className="card" style={cardStyle(actualData[index][2])}>
              {actualData[index][index1]}
            </div>
          ))}
        </g>
      ))}
    </div>
  );
};
