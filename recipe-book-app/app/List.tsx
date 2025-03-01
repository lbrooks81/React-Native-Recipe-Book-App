import {View, Text, Button, StyleSheet, Image, ScrollView, FlatList, ViewabilityConfig} from "react-native";

import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/app/index";
import {Recipe, Recipes, selectImage} from "@/app/Recipes";
import {useState} from "react";
interface HomeScreenProps extends NativeStackScreenProps<RootStackParamList, "List"> {}
export default function ListScreen({navigation} : HomeScreenProps) {

    const onPressDetails =
        (recipe: Recipe) => {navigation.navigate("Details", { recipe })}
    const [recipes, setRecipes] = useState(Array.from(Recipes));

    const viewabilityConfig: ViewabilityConfig = {
        minimumViewTime: 400
    }
    return (
        <FlatList overScrollMode="never" viewabilityConfig={viewabilityConfig} data={recipes} renderItem={({item}) => (
            <View style={styles.container}>
                <Image style={styles.thumbnail} source={selectImage(item.title)}></Image>
                <View style={styles.col}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text>{item.description}</Text>
                    <Button title="View Recipe" onPress={() => {
                        onPressDetails(new Recipe(item))}}/>
                </View>
            </View>
        )}/>
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
        width: 150,
        height: 150,
        resizeMode: "contain",
        marginRight: 5
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    }
})