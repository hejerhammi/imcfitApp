import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationTabs } from "./navigation";
import { AppRegistry } from "react-native";
import ImcMaigre from "./screens/ImcMaigre";
import ImcNormal from "./screens/ImcNormal";
import ImcSurpoids from "./screens/ImcSurpoids";
import ImcObesite1 from "./screens/ImcObesite1";
import ImcObesite2 from "./screens/ImcObesite2";
import ImcObesite3 from "./screens/ImcObesite3";

AppRegistry.registerComponent("IMCFit", () => App);
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator>
                <Stack.Screen
                    name="NavigationTabs"
                    component={NavigationTabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ImcMaigre"
                    component={ImcMaigre}
                />
                <Stack.Screen
                    name="ImcNormal"
                    component={ImcNormal}
                />
                <Stack.Screen
                    name="ImcSurpoids"
                    component={ImcSurpoids}
                />
                <Stack.Screen
                    name="ImcObesite1"
                    component={ImcObesite1}
                />
                <Stack.Screen
                    name="ImcObesite2"
                    component={ImcObesite2}
                />
                <Stack.Screen
                    name="ImcObesite3"
                    component={ImcObesite3}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
