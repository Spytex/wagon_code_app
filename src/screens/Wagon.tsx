import React from 'react';
import {Box, Text, View} from 'native-base';
import {useQuery} from 'react-query';
import {WagonService} from "../service/wagon.service";
import {useSettings} from "../providers/settings.provider";

export default function Wagon({ route }: any) {
  let { data: VagonNumber } = route.params;
  if (VagonNumber.length != 8) {
      VagonNumber = VagonNumber.replace(/^0+/, '');
      VagonNumber = VagonNumber.slice(0, -1);
      if (VagonNumber.length != 8) {
        return <Text>Scanned bar code is not supported</Text>;
      }
  }
  const {settings } = useSettings();

  const { isLoading, isError, data: wagonData } = useQuery(
    'wagonData',
    async () => {
        return await WagonService.getOne(settings.serverUrl, VagonNumber, settings.apiKey);
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
                <Text bold>Vagon Number: </Text> {wagonData.VagonNumber}
              </Text>
              <Text>
                <Text bold>Vagon Type:</Text> {wagonData.VagonType}
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
