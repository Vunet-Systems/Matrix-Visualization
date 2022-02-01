import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { Table } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  return (
    <div className="panel-container" style={{ width: 'auto' }}>
      <Table data={data.series[0]} height={500} width={width} />
    </div>
  );
};
