export interface ISettings {
  apiKey: string;
  serverUrl: string;
}

export interface ISettingsContext {
  setSettings: (key: keyof ISettings, value: string) => void;
  InputHandler: (key: keyof ISettings) => (value: string) => void;
  settings: ISettings;
}