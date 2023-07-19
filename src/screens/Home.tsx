import React from 'react';
import {View, Button, VStack} from 'native-base';
import {useNavigation} from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
      <View flex={1} flexDirection="column" justifyContent="center" p={4}>
        <VStack space={4}>
          <Button onPress={() => navigation.navigate("Scanner" as never)}>Scan</Button>
          <Button onPress={() => navigation.navigate("Settings" as never)}>Settings</Button>
        </VStack>
      </View>
  );
}
