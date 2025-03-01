import {View, Text, StyleSheet, Image, ScrollView, FlatList} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/app/index";
import {selectImage, Recipe} from "@/app/Recipes";
import {useState} from "react";
import {Recipes} from "./Recipes";
interface DetailsScreenProps extends NativeStackScreenProps<RootStackParamList, "Details">{}



export default function DetailScreen({route} : DetailsScreenProps)
{
    const recipe: Recipe = route.params.recipe;
    return (
        <ScrollView overScrollMode="never">
            <View style={style.header}>
                <Text style={style.title}>{recipe.title}</Text>
            </View>
            <Text style={style.description}>{recipe.description}</Text>

            <Image style={style.image} source={selectImage(recipe.title)}></Image>

            <Text style={style.heading}>Ingredients</Text>

            {/* Maps the ingredients to a list of text elements */}
            {Array.from(recipe.ingredients).map((ingredient, index) => {
                return (
                    <View key={index}>
                        <Text style={style.listText}>{`\u2022 ` + ingredient}</Text>
                    </View>
                )
            })}

            <Text style={style.heading}>Directions</Text>
            {/* Maps the directions to a list of text elements */}
            {Array.from(recipe.directions).map((direction, index) => {
                return (
                    <View key={index + recipe.ingredients.length}>
                        <Text style={style.listText}>{`\u2022 ` + direction}</Text>
                    </View>
                )
            })}

        </ScrollView>
    )
}

const style = StyleSheet.create({
    image: {
        maxWidth: 400,
        maxHeight: 400,
        marginLeft: 5
    },
    container: {
        maxHeight: "100%",
    },
    description: {
        fontSize: 20,
        marginLeft: 5,
    },
    heading: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "darkgreen",
        marginTop: 10,
        marginBottom: 10
    },
    col: {
        flexDirection: "column",
        maxWidth: "50%"
    },
    header: {
        borderBottomColor: "gold",
        borderBottomWidth: 3,
        borderTopColor: "gold",
        borderTopWidth: 3,
        backgroundColor: "darkgreen",
        padding: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
    listText: {
        maxHeight: "100%",
        fontStyle: "italic",
        fontWeight: "bold",
        marginLeft: 10,
        borderStyle: "dotted",
        borderColor: "darkgreen",
        borderWidth: 1,
        padding: 5,
    }
});