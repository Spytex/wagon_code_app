import AsyncStorage from "@react-native-async-storage/async-storage";


export const SettingService = {
  async getSettings() {
    try {
      const serverUrl = await AsyncStorage.getItem('serverUrl');
      const apiKey = await AsyncStorage.getItem('apiKey');
      return {serverUrl, apiKey};
    } catch (error) {
      console.error("Error fetching data:", error);
      return {serverUrl: '', apiKey: ''};
    }
  },
};