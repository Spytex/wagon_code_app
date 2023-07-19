import {createContext, FC, PropsWithChildren, useContext, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ISettings, ISettingsContext} from "../interfaces/settings.interface";

const defaultValues: ISettingsContext = {
    setSettings: () => {},
    InputHandler: () => () => {},
    settings: {
        apiKey: '',
        serverUrl: '',
    },
}

const SettingsContext = createContext(defaultValues);

const SettingsProvider: FC<PropsWithChildren> = (props) => {
    const {children} = props;
    const [settings, setSettings] = useState<ISettings>(defaultValues.settings);

  useEffect(() => {
    AsyncStorage.multiGet(Object.keys(defaultValues.settings))
      .then((keyValuePair) => {
        let updatedSettings = { ...settings };
        for (const [key, value] of keyValuePair) {
          updatedSettings = {
            ...updatedSettings,
            [key]: value,
          };
        }
        setSettings(updatedSettings);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



    const setAsyncSettings: ISettingsContext['setSettings'] = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value).then(() => {
                setSettings({
                    ...settings,
                    [key]: value,
                });
            });
        } catch (error) {
            console.log(error);
        }
    }
    const InputHandler = (key: keyof ISettings) => (value: string) => setAsyncSettings(key, value);
    return (
        <SettingsContext.Provider value={{settings, InputHandler, setSettings: setAsyncSettings,}}>
            {children}
        </SettingsContext.Provider>
    );
}


export function useSettings(): ISettingsContext {
    return useContext(SettingsContext);
}

export default SettingsProvider;