import {View, Text, Button, StyleSheet, Image, ImageSourcePropType} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/app/index";
import {Recipe} from "@/app/List";
interface DetailsScreenProps extends NativeStackScreenProps<RootStackParamList, "Details">{}

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
            <Image source={imageSource}></Image>
        </View>
    )
}