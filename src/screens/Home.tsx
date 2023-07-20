import React from 'react';
import {View, Button, VStack} from 'native-base';
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {StackParamList} from "../types/router.type";

export default function Home() {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  return (
    <View flex={1} flexDirection="column" justifyContent="center" p={4}>
      <VStack space={4}>
        <Button onPress={() => navigation.navigate("Scanner")}>Scan</Button>
        <Button onPress={() => navigation.navigate("Settings")}>Settings</Button>
      </VStack>
    </View>
  );
}
