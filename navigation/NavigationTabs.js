import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CalculatorImcScreen from "../screens/CalculatorImcScreen";
import AboutScreen from "../screens/AboutScreen";
import { Foundation as FoundationIcons } from "react-native-vector-icons";
import { FontAwesome } from 'react-native-vector-icons';



const Tab = createBottomTabNavigator();
const NavigationTabs = () => {
    return (
        <Tab.Navigator backBehavior="order">
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Accueil",
                    tabBarIcon: ({ color, size }) => (
                        <FoundationIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                    title: "Accueil",
                    tabBarActiveTintColor: "#ffc107",
                    tabBarInactiveTintColor: "#333",
                    headerShown: false // Ajoutez cette option
                }}
            />
            <Tab.Screen
                name="CalculatorImcScreen"
                component={CalculatorImcScreen}
                options={{
                    tabBarLabel: "MonIMC",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome
                            name="line-chart"
                            color={color}
                            size={size}
                        />
                    ),
                    title: "Calculer mon IMC",
                    tabBarActiveTintColor: "#ffc107",
                    tabBarInactiveTintColor: "#333",
                    headerShown: false
                }}
            />
        
            <Tab.Screen
                name="AboutScreen"
                component={AboutScreen}
                options={{
                    tabBarLabel: "A Prepos",
                    tabBarIcon: ({ color, size }) => (
                        <FoundationIcons
                            name="widget"
                            color={color}
                            size={size}
                        />
                    ),
                    title: "A Prepos de IMCFit",
                    tabBarActiveTintColor: "#ffc107",
                    tabBarInactiveTintColor: "#333",
                }}
            />
        </Tab.Navigator>
        
    );
};

export default NavigationTabs;
