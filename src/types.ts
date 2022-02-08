type SeriesSize = 'sm' | 'md' | 'lg';
type CardColor1 = 'red' | 'blue' | 'green';
type CardColor2 = 'purple' | 'gray' | 'orange';

export interface SimpleOptions {
  text: string;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
  cardColor1: CardColor1;
  cardColor2: CardColor2;
  thresholdSlider1: number;
  thresholdSlider2: number;
}
