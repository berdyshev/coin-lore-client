import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import {LineChart, Grid, XAxis, YAxis} from 'react-native-svg-charts';

const axesSvg = {fontSize: 10, fill: 'grey'};
const verticalContentInset = {top: 10, bottom: 10};
const xAxisHeight = 30;

const styles = StyleSheet.create({
  container: {height: 400, padding: 20, flexDirection: 'row'},
  yAxis: {marginBottom: xAxisHeight},
  xAxis: {marginHorizontal: -20, height: xAxisHeight},
  chartWrapper: {flex: 1, marginLeft: 10},
  chart: {flex: 1},
  chartSvg: {stroke: 'rgb(134, 65, 244)'},
});

export function Chart({data}) {
  const [yMin, yMax] = useMemo(() => {
    const prices = data.map(item => item.price_usd);
    const minValue = Math.min(...prices) * 0.8;
    const maxValue = Math.max(...prices) * 1.2;
    return [minValue, maxValue];
  }, [data]);

  return (
    <View style={styles.container}>
      <YAxis
        data={data}
        yAccessor={({item}) => item.price_usd}
        formatLabel={value => value.toFixed(2)}
        style={styles.yAxis}
        contentInset={verticalContentInset}
        svg={axesSvg}
      />
      <View style={styles.chartWrapper}>
        <LineChart
          style={styles.chart}
          data={data}
          xAccessor={({index}) => index}
          yAccessor={({item}) => item.price_usd}
          yMin={yMin}
          yMax={yMax}
          contentInset={verticalContentInset}
          svg={styles.chartSvg}>
          <Grid />
        </LineChart>
        <XAxis
          style={styles.xAxis}
          data={data}
          xAccessor={({index}) => index}
          formatLabel={value => data[value].time}
          contentInset={{left: 20, right: 20}}
          svg={axesSvg}
        />
      </View>
    </View>
  );
}
