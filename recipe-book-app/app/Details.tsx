import {View, Text, Button, StyleSheet, Image, ImageSourcePropType} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/app/index";
import {Recipe} from "@/app/List";
import {string} from "prop-types";
interface DetailsScreenProps extends NativeStackScreenProps<RootStackParamList, "Details">{}

export const images = {
    "Spaghetti": require("../assets/images/spaghetti.jpg"),
    "Salad": require("../assets/images/salad.jpg"),
    "Chicken Curry": require("../assets/images/chicken_curry.jpg"),
    "Pancakes": require("../assets/images/pancakes.jpg"),
    "Grilled Cheese Sandwich": require("../assets/images/grilled_cheese.jpg"),
    "Chocolate Cake": require("../assets/images/chocolate_cake.jpg"),
    "Fried Rice": require("../assets/images/fried_rice.jpg"),
    "Pasta Carbonara": require("../assets/images/pasta_carbonara.jpg"),
    "Tacos": require("../assets/images/tacos.jpg"),
    "Apple Pie": require("../assets/images/apple_pie.jpg")
};
export default function DetailScreen({route} : DetailsScreenProps)
{
    const recipe: Recipe = route.params.recipe;
    const imageSource: ImageSourcePropType = { uri: recipe.image };
    return (
        <View>
            <Text>{recipe.title}</Text>
            <Text>{recipe.description}</Text>
            <Text>{recipe.ingredients}</Text>
            <Text>{recipe.instructions}</Text>
            <Image style={style.image} source={selectImage(recipe.title)}></Image>
        </View>
    )
}
export function selectImage(recipeName: string)
{
    const imageArray = {
        'Spaghetti': images.Spaghetti,
        'Salad': images.Salad,
        'Chicken Curry': images['Chicken Curry'],
        'Pancakes': images.Pancakes,
        'Grilled Cheese Sandwich': images['Grilled Cheese Sandwich'],
        'Chocolate Cake': images['Chocolate Cake'],
        'Fried Rice': images['Fried Rice'],
        'Pasta Carbonara': images['Pasta Carbonara'],
        'Tacos': images.Tacos,
        'Apple Pie': images['Apple Pie']
    }
    // @ts-ignore
    return imageArray[recipeName];
}

const style = StyleSheet.create({
    image: {
        resizeMode: "contain",
        width: "100%",
        height: "100%",
    }

});