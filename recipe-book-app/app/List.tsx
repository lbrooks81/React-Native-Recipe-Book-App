import {View, Text, Button, StyleSheet} from "react-native";
import recipes from "@/assets/recipes.json";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/app/index";
interface HomeScreenProps extends NativeStackScreenProps<RootStackParamList, "List"> {}

export class Recipe {
    title: string;
    description: string;
    ingredients: string;
    instructions: string;
    image: string;
    constructor(recipe: {title: string, description: string, ingredients: string, instructions: string, image: string}) {
        this.title = recipe.title;
        this.description = recipe.description;
        this.ingredients = recipe.ingredients;
        this.instructions = recipe.instructions;
        this.image = recipe.image;
    }
}
export default function ListScreen({navigation} : HomeScreenProps) {

    const onPressDetails =
        (recipe: Recipe) => {navigation.navigate("Details", { recipe })}

    return (
        <View>
            {recipes.map((recipe, index) => (
                <View key={index}>
                    <Text>{recipe.title}</Text>
                    <Text>{recipe.description}</Text>
                    <Button title="View Recipe" onPress={() =>
                        {onPressDetails(new Recipe(recipe))}}/>
                </View>
            ))}
        </View>
    );

}