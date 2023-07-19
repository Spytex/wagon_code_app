import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation, useIsFocused } from '@react-navigation/native';

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {

    navigation.navigate('Wagon' as never, { data } as never);
    if (hasPermission === null) {
      return <Text>Requesting camera permission</Text>;
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
