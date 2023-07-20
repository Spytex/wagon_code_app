import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../types/router.type";

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const isFocused = useIsFocused();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    let barcode = data;
    if (barcode.length != 8) {
      barcode = barcode.replace(/^0+/, '');
      barcode = barcode.slice(0, -1);
      if (barcode.length != 8) {
        return
      }
    }
    navigation.navigate('Wagon', { WagonNumber: barcode });
    if (hasPermission === null) {
      return
    }
  }

  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View flex={1} flexDirection="column" justifyContent="center">
      {isFocused && <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />}
    </View>
  );
}
