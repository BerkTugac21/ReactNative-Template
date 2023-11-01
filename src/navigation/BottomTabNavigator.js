import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Screen4 from "screens/TabScreen1";
import StackNavigator from './StackNavigator'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Tab1" component={StackNavigator} />
      <Tab.Screen name="Tab2" component={Screen4} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
