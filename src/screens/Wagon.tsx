import React from 'react';
import {Box, Text, View} from 'native-base';
import {useQuery} from 'react-query';
import {WagonService} from "../service/wagon.service";


export default function Wagon({route}: any) {
  const {WagonNumber} = route.params;
  const {isLoading, isError, data: wagonData} = useQuery(
    'wagonData',
    async () => {
      return await WagonService.getOne(WagonNumber);
    }
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error.</Text>;
  }

  return (
    <View flex={1} justifyContent="center" p={4}>
      <Box borderWidth={1} borderRadius="md" width="100%" p={4}>
        {wagonData && (
          <>
            <Text>
              <Text bold>Wagon Number: </Text> {wagonData.VagonNumber}
            </Text>
            <Text>
              <Text bold>Wagon Type:</Text> {wagonData.VagonType}
            </Text>
            <Text>
              <Text bold>Cargo Name:</Text> {wagonData.CargoName}
            </Text>
            <Text>
              <Text bold>Owner Name:</Text> {wagonData.OwnerName}
            </Text>
            <Text>
              <Text bold>Departure Station:</Text> {wagonData.DepartureStationName}
            </Text>
          </>
        )}
      </Box>
    </View>
  );
}
