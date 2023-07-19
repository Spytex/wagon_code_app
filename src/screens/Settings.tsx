import React from 'react';
import {View, Input, Text, VStack, Box} from 'native-base';
import {useNavigation} from "@react-navigation/native";
import Child from "../components/Child";
import {useSettings} from "../providers/settings.provider";

export default function Settings() {
  const navigation = useNavigation();
  const { settings, InputHandler } = useSettings();

  return (
      <View flex={1} flexDirection="column" justifyContent="center" p={4}>
          <VStack space={4}>
              <Box>
                  <Text>apiKey</Text>
                  <Input placeholder="apiKey" value={settings.apiKey} onChangeText={InputHandler('apiKey')}/>
              </Box>
              <Box>
                  <Text>serverUrl</Text>
                  <Input placeholder="serverUrl" value={settings.serverUrl} onChangeText={InputHandler('serverUrl')}/>
              </Box>
              <Child/>
          </VStack>
      </View>
  );
}
