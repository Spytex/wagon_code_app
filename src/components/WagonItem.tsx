import { FC } from "react";
import { IWagonDataSingle } from "../interfaces/wagon.interface";
import { Box, Text } from "native-base";

export const WagonItem: FC<IWagonDataSingle> = ({ Wagon }) => {
  return (
    <Box borderWidth={1} borderRadius="md" width="100%" p={4}>
      {Wagon && (
        <>
          <Text>
            <Text bold>Wagon Number: </Text> {Wagon.VagonNumber}
          </Text>
          <Text>
            <Text bold>Wagon Type:</Text> {Wagon.VagonType}
          </Text>
          <Text>
            <Text bold>Cargo Name:</Text> {Wagon.CargoName}
          </Text>
          <Text>
            <Text bold>Owner Name:</Text> {Wagon.OwnerName}
          </Text>
          <Text>
            <Text bold>Departure Station:</Text> {Wagon.DepartureStationName}
          </Text>
        </>
      )}
    </Box>
  )
}