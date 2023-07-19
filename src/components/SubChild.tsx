import { FC } from "react";
import { View, Text } from "native-base";
import {useSettings} from "../providers/settings.provider";

const SubChild: FC = () => {
    const {settings } = useSettings();
    return (
        <View>
            <Text>serverUrl: {settings.serverUrl}</Text>
        </View>
    );
}

export default SubChild;