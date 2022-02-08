import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'text',
      name: 'Simple text option',
      description: 'Description of panel option',
      defaultValue: 'Default value of text input option',
    })
    .addBooleanSwitch({
      path: 'showSeriesCount',
      name: 'Show series counter',
      defaultValue: false,
    })
    .addRadio({
      path: 'seriesCountSize',
      defaultValue: 'sm',
      name: 'Series counter size',
      settings: {
        options: [
          {
            value: 'sm',
            label: 'Small',
          },
          {
            value: 'md',
            label: 'Medium',
          },
          {
            value: 'lg',
            label: 'Large',
          },
        ],
      },
      showIf: (config) => config.showSeriesCount,
    })
    .addSliderInput({
      path: 'thresholdSlider1',
      name: 'Threshold value 1 (Default: 10)',
      defaultValue: 10,
      description: 'Columns above this count can be colored in the below 3 colors',
    })
    .addRadio({
      path: 'cardColor1',
      defaultValue: 'red',
      name: 'Card color 1 (Default: Red)',
      settings: {
        options: [
          {
            value: 'red',
            label: 'Red',
          },
          {
            value: 'blue',
            label: 'Blue',
          },
          {
            value: 'green',
            label: 'Green',
          },
        ],
      },
    })
    .addSliderInput({
      path: 'thresholdSlider2',
      name: 'Threshold value 2 (Default: 100)',
      defaultValue: 100,
      description: 'Columns above this count can be colored in the below 3 colors',
    })
    .addRadio({
      path: 'cardColor2',
      defaultValue: 'gray',
      name: 'Card color 2 (Default: Gray)',
      settings: {
        options: [
          {
            value: 'purple',
            label: 'Purple',
          },
          {
            value: 'gray',
            label: 'Gray',
          },
          {
            value: 'orange',
            label: 'Orange',
          },
        ],
      },
    });
});
