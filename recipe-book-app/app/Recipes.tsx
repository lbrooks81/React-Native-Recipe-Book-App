export class Recipe {
    title: string;
    description: string;
    ingredients: string[];
    directions: string[];
    constructor(recipe: {title: string, description: string, ingredients: string[], directions: string[]}) {
        this.title = recipe.title;
        this.description = recipe.description;
        this.ingredients = recipe.ingredients;
        this.directions = recipe.directions;
    }
}

export const images = {
    "Spaghetti": require("../assets/images/spaghetti.jpg"),
    "Simple Green Salad": require("../assets/images/salad.jpg"),
    "Chicken Curry": require("../assets/images/chicken_curry.jpg"),
    "Pancakes": require("../assets/images/pancakes.jpg"),
    "Grilled Cheese Sandwich": require("../assets/images/grilled_cheese.jpg"),
    "Chocolate Cake": require("../assets/images/chocolate_cake.jpg"),
    "Fried Rice": require("../assets/images/fried_rice.jpg"),
    "Pasta Carbonara": require("../assets/images/pasta_carbonara.jpg"),
    "Tacos": require("../assets/images/tacos.jpg"),
    "Apple Pie": require("../assets/images/apple_pie.jpg")
};
export function selectImage(recipeName: string)
{
    const imageArray = {
        'Spaghetti': images.Spaghetti,
        'Simple Green Salad': images["Simple Green Salad"],
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

export const Recipes: Recipe[] =
    [
        {
            "title": "Spaghetti",
            "ingredients": [
                "1 pound (450g) dried spaghetti",
                "1 pound (450g) lean ground meat like ground beef or ground turkey",
                "3 tablespoons olive oil",
                "1 cup (130g) chopped onion",
                "3 garlic cloves, minced, 1 tablespoon",
                "2 tablespoons tomato paste",
                "1/2 teaspoon dried oregano",
                "Pinch crushed red pepper flakes",
                "1 cup water, broth, or dry red wine",
                "1 (28oz) can crushed tomatoes",
                "Salt and fresh ground black pepper",
                "Handful of fresh basil leaves, plus more for serving",
                "Parmesan cheese, for serving"
            ],
            "description": "A timeless Italian classic, featuring perfectly cooked pasta enveloped in a rich, savory tomato sauce, seasoned to perfection.",
            "directions": [
                "Heat the oil in a large pot over medium-high heat (we use a Dutch oven).",
                "Add the meat and cook until browned, about 8 minutes. Use a wooden spoon to break the meat into smaller crumbles as the meat cooks.",
                "Add the onions and cook, stirring every once in a while, until softened, about 5 minutes.",
                "Stir in the garlic, tomato paste, oregano, and red pepper flakes and cook, stirring continuously for about 1 minute.",
                "Pour in the water and use a wooden spoon to scrape up any bits of meat or onion stuck to the bottom of the pot.",
                "Stir in the tomatoes, 3/4 teaspoon of salt, and a generous pinch of black pepper.",
                "Bring the sauce to a low simmer. Cook uncovered for 25 minutes. As it cooks, stir and taste the sauce a few times so you can adjust the seasoning accordingly (see notes for seasoning suggestions).",
                "About 15 minutes before the spaghetti sauce finishes cooking, bring a large pot of salted water to a boil. Then, cook the pasta according to the package directions, but check for doneness a minute or two before the suggested cooking time.",
                "Remove the sauce from the heat and stir in the basil. Toss in the cooked pasta and leave for a minute so that it absorbs some of the sauce. Toss again, and then serve with grated parmesan cheese on top."
            ]
        },
        {
            "title": "Simple Green Salad",
            "ingredients": [
                "2 small heads of soft lettuce, butter lettuce or similar",
                "Lemon Vinaigrette, half recipe",
                "1 Persian cucumber, thinly sliced",
                "1/4 cup shaved Parmesan cheese",
                "2 tablespoons pepitas",
                "1 avocado, thinly sliced",
                "1/4 cup microgreens",
                "Flaky sea salt, optional"
            ],
            "description": "A vibrant and refreshing medley of crisp lettuce, juicy tomatoes, and crunchy cucumbers, drizzled with a zesty dressing.",
            "directions": [
                "In a large bowl toss the lettuce with a few spoonfuls of the lemon vinaigrette. ",
                "Add the cucumber, parmesan, pepitas, and avocado. Drizzle with more dressing and top with microgreens. ",
                "Season to taste with flaky sea salt, if desired.",
            ]
        },
        {
            "title": "Chicken Curry",
            "ingredients": [
                "3 tablespoons olive oil",
                "1 small onion, chopped",
                "2 cloves garlic, minced",
                "3 tablespoons curry powder",
                "1 teaspoon ground cinnamon",
                "1 teaspoon paprika",
                "1 bay leaf",
                "½ teaspoon grated fresh ginger root",
                "½ teaspoon white sugar",
                "salt to taste",
                "2 skinless, boneless chicken breast halves - cut into bite-size pieces",
                "1 tablespoon tomato paste",
                "1 cup plain yogurt",
                "¾ cup coconut milk",
                "½ lemon, juiced",
                "½ teaspoon cayenne pepper"
            ],
            "description": "A tantalizing and aromatic chicken curry, infused with exotic spices and creamy coconut milk, delivering a burst of flavor in every bite.",
            "directions": [
                "Heat olive oil in a skillet over medium heat. Sauté onion until lightly browned.",
                "Stir in garlic, curry powder, cinnamon, paprika, bay leaf, ginger, sugar, and salt. Continue stirring for 2 minutes.",
                "Add chicken pieces, tomato paste, yogurt, and coconut milk. Bring to a boil, reduce heat, and simmer for 20 to 25 minutes.",
                "Remove bay leaf, and stir in lemon juice and cayenne pepper. Simmer 5 more minutes.",
                "Serve hot and enjoy!"
            ]
        },
        {
            "title": "Pancakes",
            "ingredients": [
                "1 1/2 cups (195g) all-purpose flour, spooned and leveled",
                "2 tablespoons sugar",
                "1 tablespoon baking powder",
                "1/2 teaspoon of fine sea or table salt, reduce to 1/4 teaspoon if sensitive to salt",
                "1 1/2 cups (295ml) milk, dairy or non-dairy",
                "1 large egg",
                "5 tablespoons (70g) unsalted butter, plus more for skillet",
                "2 teaspoons vanilla extract, reduce if sensitive to vanilla"
            ],
            "description": "Light and fluffy pancakes, golden brown and irresistibly delicious, perfect for a luxurious breakfast or brunch.",
            "directions": [
                "Melt the butter and set it aside. In a medium bowl, whisk together the flour, sugar, baking powder, and salt.",
                "In a separate bowl, whisk together milk, egg, melted butter, and vanilla extract. (Don’t worry if the butter solidifies slightly).",
                "Create a well in the center of your dry ingredients. Pour in the milk mixture and stir gently with a fork until the flour is just incorporated. A few small lumps are okay. As the batter sits, it should start to bubble.",
                "Place a large skillet or griddle over medium heat. Sprinkle in a few drops of water to test if it’s ready. You want them to dance around a bit and evaporate.",
                "Brush the skillet with melted butter (this creates crispy edges, but you can skip it if using a quality nonstick pan).",
                "Scoop the batter onto the skillet using a 1/4 cup measure or large cookie scoop, and spread each pancake into a 4-inch circle.",
                "After 1 to 2 minutes, the edges will look dry, and bubbles will form and pop on the surface. Flip the pancakes and cook for another 1 to 2 minutes until lightly browned and cooked in the middle.",
                "Serve immediately with warm syrup, butter, and berries."
            ]
        },
        {
            "title": "Grilled Cheese Sandwich",
            "ingredients": [
                "2 slices sourdough bread",
                "Mayonnaise",
                "Dijon mustard",
                "1 to 2 ounces grated sharp cheddar cheese, depending on the size of your bread",
                "1 to 2 ounces grated Gruyère or raclette cheese, depending on the size of your bread",
                "Butter, for the pan"
            ],
            "description": "A gourmet twist on a beloved classic, featuring perfectly toasted bread and melted cheese, oozing with buttery goodness.",
            "directions": [
                "Place the bread slices on a cutting board and spread the top side with a thin layer of mayo. Flip one slice of bread and spread its other side with Dijon mustard. Layer the cheddar and Gruyère or Raclette cheeses on top of the mustard, then place the other slice of bread on top of the cheese, mayo side out.",
                "Heat a nonstick or cast-iron skillet over medium-low heat and melt enough butter in the bottom of the pan to coat it. Place the sandwich in the pan, cover, and cook for 2 to 3 minutes, or until the bottom slice of bread is golden brown and crisp. Flip, replace the lid, and cook until the other slice of bread is golden brown and the cheese is melted, 1 to 3 minutes. Reduce the heat to low if the bread is getting too brown before the cheese is fully melted.",
                "Slice and serve."
            ]
        },
        {
            "title": "Chocolate Cake",
            "ingredients": [
                "2 cups (240 g) all-purpose flour",
                "2 cups (396 g) sugar",
                "3/4 cup (63 g) unsweetened cocoa powder",
                "2 teaspoons (8 g) baking powder",
                "1 1/2 teaspoons (9 g) baking soda",
                "1 teaspoon (2.8 g) kosher salt",
                "1 teaspoon (2.3 g) espresso powder, homemade or store-bought",
                "1 cup (227 g) milk, or buttermilk, almond, or coconut milk",
                "1/2 cup (99 g) vegetable oil, or canola oil, or melted coconut oil",
                "2 large (100 g) eggs",
                "2 teaspoons (9.4 g) vanilla extract",
                "1 cup (227 g) boiling water"
            ],
            "description": "An indulgent and decadent chocolate cake, rich and moist, with layers of velvety cocoa goodness.",
            "directions": [
                "Preheat oven to 350º F. Prepare two 9-inch cake pans by spraying with baking spray, buttering and lightly flouring, or brushing them with homemade chocolate pan release.",
                "Add flour, sugar, cocoa, baking powder, baking soda, salt and espresso powder to a large bowl or the bowl of a stand mixer. Whisk through to combine or, using your paddle attachment, stir through flour mixture until combined well.",
                "Add milk, vegetable oil, eggs, and vanilla to flour mixture and mix together on medium speed until well combined. Reduce speed and carefully add boiling water to the cake batter until well combined.",
                "Distribute cake batter evenly between the two prepared cake pans. Bake for 30-35 minutes, until a toothpick or cake tester inserted in the center of the chocolate cake comes out clean.",
                "Remove from the oven and allow to cool for about 10 minutes, remove from the pan and cool completely.",
                "Frost the cake with Chocolate Buttercream Frosting."
            ]
        },
        {
            "title": "Fried Rice",
            "ingredients": [
                "3 cloves garlic",
                "2 medium scallions",
                "2 tablespoons plus 1 teaspoon vegetable oil, divided",
                "1 cup frozen peas and carrots (do not thaw)",
                "4 cups cold cooked brown or white rice (see Recipe Notes), preferably medium grain",
                "1 tablespoon soy sauce or tamari",
                "1 1/2 teaspoons kosher salt, plus more as needed",
                "3/4 teaspoon ground white pepper, plus more as needed",
                "2 large eggs",
                "3/4 teaspoon toasted sesame oil"
            ],
            "description": "A savory and satisfying fried rice, packed with colorful vegetables and seasoned with a hint of soy sauce.",
            "directions": [
                "Mince 3 garlic cloves. Thinly slice 2 medium scallions crosswise on a slight diagonal, keeping the white parts separate from the light and dark green parts.",
                "Heat 2 tablespoons of the vegetable oil in a large wok or nonstick frying pan over medium-high heat until shimmering. Add the garlic, scallion whites, and 1 cup frozen peas and carrots. Stir-fry until the carrots and peas are thawed, about 2 minutes.",
                "Add 4 cups cold cooked rice, breaking up any clumps of rice with your fingers as you add it in. Toss to combine with the peas and carrots. Add 1 tablespoon soy sauce, 1 1/2 teaspoons kosher salt, and 3/4 teaspoon ground white pepper. Stir to combine.",
                "Push the fried rice to one side of the pan. Add the remaining 1 teaspoon vegetable oil to the now-empty side of the pan, then crack 2 large eggs into the oil. Scramble into fluffy curds until almost set.",
                "Turn off the heat and stir the eggs into the fried rice, breaking up any large pieces of egg. Drizzle with 3/4 teaspoon toasted sesame oil and toss to combine. Taste and season with more kosher salt and white pepper as needed. Garnish with the reserved scallion greens."
            ]
        },
        {
            "title": "Pasta Carbonara",
            "ingredients": [
                "10 slices bacon , cut into 1/2-inch pieces",
                "8 1/2 cups water , divided",
                "4 cloves garlic , minced",
                "1 lb spaghetti or linguine",
                "1 1/4 cups finely grated parmesan cheese , plus more for serving (2 oz)",
                "3 large eggs",
                "1 large egg yolk",
                "1 tsp each salt and pepper, or to taste",
                "Chopped fresh parsley, for garnish",
            ],
            "description": "A luxurious and creamy pasta carbonara, featuring crispy bacon and a rich, velvety sauce.",
            "directions": [
                "Add bacon and 1/2 cup of the water to a large non-stick skillet and bring to a simmer over medium-high heat.",
                "Allow to simmer until water evaporates about 6 - 7 minutes, then reduce heat to medium-low and continue to cook until bacon is brown and crisp, about 6 - 8 minutes longer.",
                "Place a fine mesh strainer over a bowl then pour bacon into strainer while reserving about 1 tsp of the rendered fat in pan. Return pan to heat and saute garlic about 30 seconds, until fragrant and lightly golden.",
                "Pour into a medium mixing bowl then add 1 Tbsp rendered bacon fat (drippings in bowl set under strainer) to mixing bowl with garlic. Add eggs, egg yolk, parmesan and pepper to garlic mixture and whisk until well combined.",
                "Meanwhile, bring 8 cups of water to a boil in a large dutch oven (no more than 8 cups because you want a very starchy water for the sauce). Add spaghetti and salt to boiling water and cook until al dente. While pasta is boiling, set a colander in a large bowl.",
                "Carefully drain al dente pasta into colander in bowl, while reserving pasta water in bowl. Measure out 1 cup hot pasta water and discard remaining water. Immediately place pasta in now empty large bowl.",
                "Slowly pour and whisk 1/2 cup pasta water into egg mixture, then slowly pour mixture over pasta while tossing to coat. Add bacon and toss to combine. Season with salt if desired.",
                "Let pasta rest, tossing frequently, 2 - 4 minutes until sauce has thickened slightly and coats pasta. Thin with remaining 1/2 cup hot pasta water as needed. Serve immediately topped with additional parmesan and parsley."
            ]
        },
        {
            "title": "Tacos",
            "ingredients": [
                "8 corn or flour tortillas",
                "1 tbsp of olive oil",
                "2 tsps chili powder",
                "2 tsps cumin",
                "1/2 tsps oregano",
                "1/2 cup of water",
                "2 tbsp of tomato paste",
                "1 lb of ground beef",
                "Shredded Mexican cheese blend",
            ],
            "description": "A fiesta of flavors in every bite, with seasoned ground beef, fresh vegetables, and zesty salsa, all wrapped in a warm tortilla.",
            "directions": [
                "Place the ground beef in a skillet with olive oil.",
                "Brown the beef with olive oil and then drain any fat.",
                "Add the spices along with the tomato paste and water (or tomato sauce)",
                "Bring the mixture to a simmer and then cook for a few more minutes until the sauce thickens.",
                "Heat the olive oil in skillet over medium high heat. Add the ground beef and cook until browned, about 5-7 minutes. Drain any fat.",
                "Add the chili powder, cumin, dried oregano, garlic powder, salt, pepper, tomato paste and water. Stir to combine and continue cooking over medium-low heat until the sauce has thickened, about 3-5 minutes",
                "Serve warm over tortillas with lettuce, tomatoes, cheese and red onions, or your other desired toppings."
            ]
        },
        {
            "title": "Apple Pie",
            "ingredients": [
                "6 peeled and thinly sliced apples",
                "3/4 cup sugar",
                "1 tsp ground cinnamon",
                "1/2 stick of butter chilled and cut into cubes",
                "Package pastry for a double-crust 9-inch pie",
                "9-inch pie tray"
            ],
            "description": "A heartwarming and comforting apple pie, with tender apples and a hint of cinnamon, encased in a flaky, buttery crust.",
            "directions": [
                "Preheat the oven to 450 degrees F",
                "Line the 9-inch pie dish with one pastry crust; set second one aside for the top.",
                "Combine 3/4 cup sugar and cinnamon in a small bowl. Add more sugar if your apples are tart.",
                "Layer apple slices in the prepared pie dish, sprinkling each layer with cinnamon-sugar mixture. ",
                "Dot top layer with small pieces of butter. Cover with top crust.",
                "Bake pie on the lowest rack of the preheated oven for 10 minutes. Reduce oven temperature to 350 degrees F (175 degrees C) and continue baking until golden brown and filling bubbles, 30 to 35 minutes more.",
                "Enjoy!"
            ]
        }
    ]
