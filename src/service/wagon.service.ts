import axios from "axios";
import getUuidByString  from 'uuid-by-string';
import {IWagon, IWagonData} from "../interfaces/wagon.interface";

export const WagonService = {
    async getAll(serverUrl: string, apiKey: string){
        const {data} = await axios.get<IWagonData>(`${serverUrl}/api/wagons$apiKey=${getUuidByString(apiKey)}`)
        return data
    },
    async getOne(serverUrl: string, VagonNumber: string, apiKey: string){
        const {data} = await axios.get<IWagon>(`${serverUrl}/api/wagons?VagonNumber=${VagonNumber}&apiKey=${getUuidByString(apiKey)}`)
        return data
    },
}
