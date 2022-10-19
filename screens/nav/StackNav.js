import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Splash } from "../Splash";
import { TabNav } from "./TabNav";

const Stack = createNativeStackNavigator();

const SplashScreen = ({ navigation }) => {
  console.log("หน้า splash ใน StackNav.js");
  return <Splash nav={navigation} />;
};

const TabScreen = () => {
  console.log("หน้า TabNav ใน StackNav.js");
  return <TabNav />;
};

export const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="TabNav" component={TabScreen} />
    </Stack.Navigator>
  );
};
