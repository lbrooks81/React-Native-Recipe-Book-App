import {createNativeStackNavigator, NativeStackScreenProps} from "@react-navigation/native-stack";
import ListScreen from "@/app/List";
import DetailsScreen from "@/app/Details";
import {Recipe} from "@/app/Recipes";

export type RootStackParamList = {
    List: undefined;
    Details: { recipe: Recipe };
}
interface HomeScreenProps extends NativeStackScreenProps<RootStackParamList, "Details"> {}
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index({navigation} : HomeScreenProps){
    const onPressMenu =
        () => {navigation.navigate("List")}

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="List"
                component={ListScreen}
                options={{
                    headerShown: false
                }}/>
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{
                    headerStyle: {
                        backgroundColor: "#009900",
                    },
                    headerTitleStyle: {
                        color: "white",
                    },
                    headerTitle: "Home",
                }}/>
        </Stack.Navigator>
    )
}