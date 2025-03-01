import {View, Text, Button, StyleSheet, Image, ScrollView} from "react-native";

import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/app/index";
import {Recipe, recipes, selectImage} from "@/app/Recipes";
interface HomeScreenProps extends NativeStackScreenProps<RootStackParamList, "List"> {}
export default function ListScreen({navigation} : HomeScreenProps) {

    const onPressDetails =
        (recipe: Recipe) => {navigation.navigate("Details", { recipe })}

    return (
        <ScrollView>
            {recipes.map((recipe, index) => (
                <View style={styles.container} key={index}>
                    <Image style={styles.thumbnail} source={selectImage(recipe.title)}></Image>
                    <View style={styles.col}>
                        <Text style={styles.title}>{recipe.title}</Text>
                        <Text>{recipe.description}</Text>
                        <Button title="View Recipe" onPress={() => {
                            onPressDetails(new Recipe(recipe))}}/>
                    </View>
                </View>
            ))}
        </ScrollView>
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
        borderRadius: 10,
        padding: 10,
        margin: 10,
        minHeight: 150
    },
    col: {
        flexDirection: "column",
        maxWidth: "50%"
    },
    thumbnail: {
        width: 125,
        height: 125,
        resizeMode: "contain",
        marginRight: 5
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    }
})