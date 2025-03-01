import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    ImageSourcePropType,
    ScrollView,
    SafeAreaView,
    SectionList, SectionListProps
} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/app/index";
import {selectImage, Recipe} from "@/app/Recipes";
import {SafeAreaProvider} from "react-native-safe-area-context";
interface DetailsScreenProps extends NativeStackScreenProps<RootStackParamList, "Details">{}



export default function DetailScreen({route} : DetailsScreenProps)
{
    const recipe: Recipe = route.params.recipe;
    return (

                <ScrollView>
                    <View style={style.header}>
                        <Text style={style.title}>{recipe.title}</Text>
                    </View>
                    <Text>{recipe.description}</Text>

                    <View style={style.container}>
                        <Text style={style.heading}>Ingredients</Text>
                        {/* Maps the ingredients to a list of text elements */}
                        {Array.from(recipe.ingredients).map((ingredient, index) => {
                            return (
                                <View>
                                    <Text key={index} style={style.listText}>{`\u2022 ` + ingredient}</Text>
                                </View>
                            )
                        })}
                    </View>
                    <View style={style.container}>
                        <Text style={style.heading}>Directions</Text>
                        {/* Maps the directions to a list of text elements */}
                        {Array.from(recipe.directions).map((direction, index) => {
                            return (
                                <View>
                                    <Text key={index} style={style.listText}>{`\u2022 ` + direction}</Text>
                                </View>
                            )
                        })}
                    </View>
                    <Image source={selectImage(recipe.image)}></Image>
                </ScrollView>


    )
}

const style = StyleSheet.create({
    image: {
        resizeMode: "contain",
        maxWidth: "100%",
        maxHeight: "100%",
    },
    container: {
        maxHeight: "100%",
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
    thumbnail: {
        width: 125,
        height: 125,
        resizeMode: "contain",
        marginRight: 5
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