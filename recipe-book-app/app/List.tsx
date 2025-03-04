import {View, Text, StyleSheet, Image, FlatList, ViewabilityConfig, TextInput, TouchableOpacity} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/app/index";
import {Recipe, Recipes, selectImage} from "@/app/Recipes";
import {useState} from "react";
interface HomeScreenProps extends NativeStackScreenProps<RootStackParamList, "List"> {}
export default function ListScreen({navigation} : HomeScreenProps) {

    const onPressDetails =
        (recipe: Recipe) => {navigation.navigate("Details", { recipe })}

    const [recipes, setRecipes] = useState(Array.from(Recipes));
    const [filteredRecipes, setFilteredRecipes] = useState(recipes);
    const [search, setSearch] = useState('');
    function updateRecipes(text: string)
    {

        setSearch(text);
        setFilteredRecipes(recipes.filter((recipe) => {
            // Filter recipes based on search query

            let matches = 0;

            // console.log(text);
            // iterate through each character of the text
            for(let i = 0; i < text.length;)
            {
                // console.log(recipe.title);
                // check if characters match
                if (recipe.title.charAt(i).toUpperCase() ===
                    text.charAt(i).toUpperCase())
                {
                    // console.log("Characters match!");
                    matches++;
                }
                i++;
                console.log(`Iteration: ${i} Matches: ${matches}\n`)
                // the number of characters matched should always be equal to the iteration index
                if (matches !== i)
                {
                    return false;
                }
            }
            return true;
        }));
    }
    const viewabilityConfig: ViewabilityConfig = {
        minimumViewTime: 400,
    }
    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.headingText}>The Glog Diner</Text>
                <View style={styles.searchBarContainer}>
                    <Image style={styles.icon} source={require("../assets/images/search-icon.png")}/>
                    <TextInput
                        selectionColor="ghostwhite"
                        style={styles.searchText}
                        placeholder="Search for an Item"
                        placeholderTextColor="white"
                        onChangeText={(text) => updateRecipes(text)}
                        value={search}
                    />
                </View>
            </View>
            <FlatList
                overScrollMode="never"
                viewabilityConfig={viewabilityConfig}
                data={filteredRecipes}
                renderItem={({item}) => (
                    <View style={styles.container}>
                        <Image style={styles.thumbnail} source={selectImage(item.title)}></Image>
                        <View style={styles.menuItem}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text>{item.description}</Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                onPressDetails(new Recipe(item))}}>
                                <Text style={styles.buttonText}>View Recipe</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </>
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
    menuItem: {
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
    },
    headerContainer: {
        /* Alignment */
        flexDirection: "row",
        justifyContent: "flex-end",
        alignSelf: "flex-end",

        /* Border */
        backgroundColor: "#009900",
        borderBottomWidth: 3,
        borderColor: "#e6e600",
        borderStyle: "solid",

        /* Style */
    },
    headingText: {
        fontSize: 24,
        flex: 1,
        maxWidth: "100%",
        textAlign: "center",
        verticalAlign: "middle",
        color: "white",
    },
    searchBarContainer: {
/*        borderWidth: 3,
        borderColor: "skyblue",
        borderStyle: "solid",*/
        flexDirection: "row",
        maxWidth: "50%",
        justifyContent: "flex-start",
        alignItems: "center",

    },
    searchText: {
        marginLeft: "10%",
/*        borderWidth: 3,
        borderColor: "gold",
        borderStyle: "solid",*/
        color: "white"
    },
    icon: {
        marginLeft: 20,
        maxWidth: 20,
        maxHeight: 20,
        backgroundColor: "#009900",
/*        borderWidth: 3,
        borderColor: "gold",
        borderStyle: "solid"*/
    },
    button: {
        backgroundColor: "#009900",
        borderWidth: 4,
        borderColor: "#e6e600",
        borderStyle: "solid",
        borderRadius: 3,
        padding: 5
    },
    buttonText: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        textShadowRadius: 5,
        textShadowColor: "black"
    }
})