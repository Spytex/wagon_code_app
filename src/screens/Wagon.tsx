import React from 'react';
import { Text, View } from 'native-base';
import { useQuery } from 'react-query';
import { WagonService } from "../service/wagon.service";
import { WagonItem } from '../components/WagonItem';


export default function Wagon({ route }: any) {
  const { WagonNumber } = route.params;
  const { isLoading, isError, data: wagonData } = useQuery(
    'wagonData',
    async () => {
      return await WagonService.getOne(WagonNumber);
    }
  );
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError || !wagonData) {
    return <Text>Error.</Text>;
  }

  return (
    <View flex={1} justifyContent="center" p={4}>
      <WagonItem Wagon={wagonData} />
    </View>
  );
}
