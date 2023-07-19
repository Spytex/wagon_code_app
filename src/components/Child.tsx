import { FC } from "react";
import { View, Text } from "native-base";
import SubChild from "./SubChild";
import {useSettings} from "../providers/settings.provider";

const Child: FC = () => {
    const {settings } = useSettings();
    return (
        <View>
            <Text>apiKey: {settings.apiKey}</Text>
        <SubChild />
        </View>
    );
}

export default Child;