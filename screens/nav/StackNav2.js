import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Search } from "../page/Search";
const Stack = createNativeStackNavigator();

const SearchScreen = ({ navigation }) => {
  console.log("หน้า Search ใน StackNav2.js");
  return <Search nav={navigation} />;
};

export const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};
