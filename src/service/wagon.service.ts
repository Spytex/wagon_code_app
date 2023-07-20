import axios from "axios";
import { IWagon, IWagonData, IWagonDataSingle } from "../interfaces/wagon.interface";
import { SettingService } from "./setting.service";


export const WagonService = {
  async getAll() {
    const { serverUrl, apiKey } = await SettingService.getSettings();
    const { data } = await axios.get<IWagonData>(`${serverUrl}/api/wagons?apiKey=${apiKey}`)
    return data
  },
  async getOne(VagonNumber: string) {
    const { serverUrl, apiKey } = await SettingService.getSettings();
    const { data } = await axios.get<IWagon>(`${serverUrl}/api/wagons/${VagonNumber}?apiKey=${apiKey}`)
    return data
  },
};
