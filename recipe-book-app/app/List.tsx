import {View, Text, Button, StyleSheet, Image} from "react-native";
import recipes from "@/assets/recipes.json";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/app/index";
import {selectImage} from "@/app/Details";
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
                <View style={styles.container} key={index}>
                    <Image style={styles.thumbnail} source={selectImage(recipe.title)}></Image>
                    <View style={styles.col}>
                        <Text>{recipe.title}</Text>
                        <Text>{recipe.description}</Text>
                    </View>
                    <View style={styles.col}>
                        <Button title="View Recipe" onPress={() =>
                            {onPressDetails(new Recipe(recipe))}}/>
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        margin: 10,
        maxHeight: 200
    },
    col: {
        flexDirection: "column",

    },
    thumbnail: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        marginRight: 5
    }
})