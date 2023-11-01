import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import screens
import Screen1 from 'screens/StackScreen1';
import Screen2 from 'screens/StackScreen2';
import Screen3 from 'screens/StackScreen3';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
