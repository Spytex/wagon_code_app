import React from "react";
import {NativeBaseProvider} from "native-base";
import {QueryClient, QueryClientProvider} from 'react-query';
import Navigator from "./src/components/Navigator";
import SettingsProvider from "./src/providers/settings.provider";


const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <SettingsProvider>
          <Navigator/>
        </SettingsProvider>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
