import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Splash } from "../Splash";
import { TabNav } from "./TabNav";
import { Search } from "../page/Search";

const Stack = createNativeStackNavigator();

const SplashScreen = ({ navigation }) => {
  console.log("หน้า splash ใน StackNav.js");
  return <Splash nav={navigation} />;
};

const TabScreen = () => {
  console.log("หน้า TabNav ใน StackNav.js");
  return <TabNav />;
};

const SearchScreen = ({ navigation }) => {
  console.log("หน้า Search ใน StackNav2.js");
  return <Search nav={navigation} />;
};

export const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="TabNav" component={TabScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};
