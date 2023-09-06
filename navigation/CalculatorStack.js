import { createStackNavigator } from "@react-navigation/stack";
import MaigreurDetails from "../screens/MaigreurDetails";

const Stack = createStackNavigator();

const CalculatorStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="MaigreurDetails" component={MaigreurDetails} />
    </Stack.Navigator>
  );
};

export default CalculatorStack;
