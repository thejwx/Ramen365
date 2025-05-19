// Ramen365 - Data File
// Contains all the ramen dishes, challenges, and matrix data

const ramenData = {
  // All ramen dishes
  "dishes": [
    {
      "id": 1,
      "name": "Tonkotsu Delight",
      "cuisine": "Japanese",
      "mainIngredient": "Pork",
      "effortLevel": "Medium",
      "vibes": ["Cozy", "Indulgent"],
      "categories": ["pork", "soup"],
      "date": "January 1",
      "description": "A rich, creamy pork bone broth that's simmered for 12 hours, topped with chashu pork, soft-boiled egg, and green onions.",
      "image": "assets/dishes/tonkotsu.png",
      "haiku": "Milky white broth swirls—Pork bones whisper their secrets—Comfort in a bowl",
      "ingredients": [
        "2 pounds pork bones",
        "1 onion, halved",
        "4 cloves garlic",
        "1-inch piece ginger",
        "2 tablespoons sesame oil",
        "2 tablespoons soy sauce",
        "1 tablespoon mirin",
        "4 portions ramen noodles",
        "4 soft-boiled eggs",
        "4 slices chashu pork belly",
        "Green onions, sliced",
        "Nori sheets",
        "Bamboo shoots"
      ],
      "steps": [
        "In a large pot, add pork bones and cover with cold water. Bring to a boil and simmer for 5 minutes.",
        "Drain and rinse the bones. Clean the pot.",
        "Return bones to the pot with onion, garlic, and ginger. Cover with water and bring to a boil.",
        "Reduce heat and simmer for 8-12 hours, skimming regularly.",
        "Strain the broth and return to the pot. Add sesame oil, soy sauce, and mirin.",
        "Cook ramen noodles according to package instructions.",
        "Assemble bowls with noodles, broth, chashu, egg, green onions, nori, and bamboo shoots."
      ],
      "pairings": {
        drink: "Japanese lager beer",
        music: "Lo-fi beats"
      }
    },
    {
      "id": 2,
      "name": "Spicy Miso Veggie Explosion",
      "cuisine": "Japanese Fusion",
      "mainIngredient": "Vegetables",
      "effortLevel": "Easy",
      "vibes": ["Energizing", "Bold"],
      "categories": ["vegetables", "soup"],
      "date": "January 2",
      "description": "A vibrant vegetable-packed ramen with a spicy miso broth that will wake up your taste buds.",
      "image": "assets/dishes/spicy-miso.png",
      "haiku": "Red chili dances—Vegetables celebrate—Miso leads the way",
      "ingredients": [
        "4 cups vegetable broth",
        "3 tablespoons white miso paste",
        "2 tablespoons gochujang (Korean chili paste)",
        "1 tablespoon sesame oil",
        "1 tablespoon soy sauce",
        "1 tablespoon rice vinegar",
        "2 cloves garlic, minced",
        "1-inch piece ginger, grated",
        "4 portions ramen noodles",
        "1 cup shiitake mushrooms, sliced",
        "1 cup baby bok choy, halved",
        "1 carrot, julienned",
        "1 cup bean sprouts",
        "Green onions, sliced",
        "Sesame seeds"
      ],
      "steps": [
        "In a pot, bring vegetable broth to a simmer.",
        "In a small bowl, whisk together miso paste, gochujang, sesame oil, soy sauce, and rice vinegar.",
        "Add the miso mixture to the broth along with garlic and ginger. Simmer for 5 minutes.",
        "Cook ramen noodles according to package instructions.",
        "In a separate pan, sauté mushrooms, bok choy, and carrots until tender.",
        "Assemble bowls with noodles, broth, sautéed vegetables, bean sprouts, green onions, and sesame seeds."
      ],
      "pairings": {
        drink: "Yuzu sparkling water",
        music: "J-pop upbeat playlist"
      }
    },
    {
      "id": 3,
      "name": "Coconut Curry Seafood Ramen",
      "cuisine": "Thai Fusion",
      "mainIngredient": "Seafood",
      "effortLevel": "Medium",
      "vibes": ["Exotic", "Luxurious"],
      "categories": ["shellfish", "curry", "soup"],
      "date": "January 3",
      "description": "A tropical twist on ramen with a coconut curry broth and a bounty of seafood treasures.",
      "image": "assets/dishes/coconut-curry.png",
      "haiku": "Ocean meets the land—Coconut waves crash with curry—Treasures from the sea",
      "ingredients": [
        "4 cups seafood stock",
        "1 can (14 oz) coconut milk",
        "3 tablespoons red curry paste",
        "2 tablespoons fish sauce",
        "1 tablespoon brown sugar",
        "1 lime, juiced",
        "2 cloves garlic, minced",
        "1-inch piece ginger, grated",
        "4 portions ramen noodles",
        "8 large shrimp, peeled and deveined",
        "8 oz white fish (such as cod), cut into chunks",
        "8 mussels, cleaned",
        "1 cup bean sprouts",
        "Fresh cilantro, chopped",
        "Thai basil leaves",
        "Lime wedges"
      ],
      "steps": [
        "In a large pot, bring seafood stock to a simmer.",
        "Add coconut milk, curry paste, fish sauce, brown sugar, lime juice, garlic, and ginger. Simmer for 10 minutes.",
        "Add shrimp, fish, and mussels to the broth. Cook until shrimp is pink, fish is opaque, and mussels have opened (about 5 minutes).",
        "Cook ramen noodles according to package instructions.",
        "Assemble bowls with noodles, broth, seafood, bean sprouts, cilantro, Thai basil, and lime wedges."
      ],
      "pairings": {
        drink: "Thai iced tea",
        music: "Coastal lounge beats"
      }
    },
    {
      "id": 4,
      "name": "Midnight Garlic Black Ramen",
      "cuisine": "Korean Fusion",
      "mainIngredient": "Chicken",
      "effortLevel": "Hard",
      "vibes": ["Mysterious", "Intense"],
      "categories": ["chicken", "soup"],
      "date": "January 4",
      "description": "A dramatic black garlic oil ramen with a deep, complex flavor profile that's perfect for late-night cravings.",
      "image": "assets/dishes/black-garlic.png",
      "haiku": "Darkness in a bowl—Garlic whispers ancient tales—Midnight never ends",
      "ingredients": [
        "8 cups chicken stock",
        "1 whole chicken, cut into pieces",
        "1 onion, halved",
        "6 cloves garlic, smashed",
        "1-inch piece ginger, sliced",
        "2 tablespoons soy sauce",
        "1 tablespoon mirin",
        "1 tablespoon sake",
        "4 portions ramen noodles",
        "Black garlic oil (8 cloves black garlic blended with 1/4 cup sesame oil)",
        "4 soft-boiled eggs, marinated in soy sauce",
        "Roasted chicken slices",
        "Green onions, sliced",
        "Nori sheets",
        "Bamboo shoots"
      ],
      "steps": [
        "In a large pot, add chicken pieces, onion, garlic, and ginger. Cover with water and bring to a boil.",
        "Reduce heat and simmer for 3 hours, skimming regularly.",
        "Strain the broth and return to the pot. Add soy sauce, mirin, and sake.",
        "To make black garlic oil, blend black garlic with sesame oil until smooth.",
        "Cook ramen noodles according to package instructions.",
        "Assemble bowls with noodles, broth, a spoonful of black garlic oil, chicken slices, egg, green onions, nori, and bamboo shoots."
      ],
      "pairings": {
        drink: "Cold sake",
        music: "Dark jazz playlist"
      }
    },
    {
      "id": 5,
      "name": "Kimchi Cheese Ramen",
      "cuisine": "Korean",
      "mainIngredient": "Kimchi",
      "effortLevel": "Easy",
      "vibes": ["Comforting", "Playful"],
      "categories": ["cheesey", "soup"],
      "date": "January 5",
      "description": "A quick and satisfying fusion of spicy kimchi and melty cheese that creates a creamy, tangy broth.",
      "image": "assets/dishes/kimchi-cheese.png",
      "haiku": "Fermented cabbage—Meets melting cheese in hot broth—Unlikely best friends",
      "ingredients": [
        "4 cups chicken or vegetable broth",
        "1 cup kimchi, chopped",
        "2 tablespoons kimchi juice",
        "2 tablespoons gochujang (Korean chili paste)",
        "1 tablespoon soy sauce",
        "1 teaspoon sesame oil",
        "2 cloves garlic, minced",
        "4 portions instant ramen noodles (discard seasoning packets)",
        "4 slices American cheese or 1 cup shredded mozzarella",
        "2 eggs",
        "Green onions, sliced",
        "Sesame seeds"
      ],
      "steps": [
        "In a pot, bring broth to a simmer.",
        "Add kimchi, kimchi juice, gochujang, soy sauce, sesame oil, and garlic. Simmer for 5 minutes.",
        "Add ramen noodles and cook according to package instructions.",
        "Crack eggs directly into the simmering broth and cook for 2 minutes for runny yolks.",
        "Turn off heat and add cheese, stirring until melted.",
        "Serve topped with green onions and sesame seeds."
      ],
      "pairings": {
        drink: "Korean beer",
        music: "K-pop hits"
      }
    },
    {
      "id": 6,
      "name": "Cold Soba Summer Ramen",
      "cuisine": "Japanese",
      "mainIngredient": "Buckwheat",
      "effortLevel": "Easy",
      "vibes": ["Refreshing", "Light"],
      "categories": ["vegetables", "soup"],
      "date": "January 6",
      "description": "A chilled ramen perfect for hot days, featuring buckwheat soba noodles in a light, citrusy dashi broth.",
      "image": "assets/dishes/cold-soba.png",
      "haiku": "Summer sun blazes—Cool noodles bring sweet relief—Dashi whispers peace",
      "ingredients": [
        "4 cups dashi stock",
        "3 tablespoons soy sauce",
        "2 tablespoons mirin",
        "1 tablespoon rice vinegar",
        "1 teaspoon sugar",
        "4 portions soba noodles",
        "1 cucumber, julienned",
        "1 carrot, julienned",
        "4 soft-boiled eggs, halved",
        "1 sheet nori, cut into strips",
        "Green onions, sliced",
        "Sesame seeds",
        "Ice cubes"
      ],
      "steps": [
        "In a pot, combine dashi, soy sauce, mirin, rice vinegar, and sugar. Bring to a simmer, then remove from heat and chill in the refrigerator.",
        "Cook soba noodles according to package instructions, then rinse under cold water until chilled.",
        "Divide noodles among four bowls and add ice cubes.",
        "Pour chilled broth over noodles.",
        "Top with cucumber, carrot, egg, nori, green onions, and sesame seeds."
      ],
      "pairings": {
        drink: "Iced green tea",
        music: "Ambient nature sounds"
      }
    },
    {
      "id": 7,
      "name": "Birria Ramen Fusion",
      "cuisine": "Mexican-Japanese Fusion",
      "mainIngredient": "Beef",
      "effortLevel": "Hard",
      "vibes": ["Bold", "Innovative"],
      "categories": ["beef", "mexican", "soup"],
      "date": "January 7",
      "description": "A cross-cultural masterpiece combining the rich, spiced broth of Mexican birria with Japanese ramen techniques.",
      "image": "assets/dishes/birria-ramen.png",
      "haiku": "Two worlds collide here—Chiles dance with dashi's soul—Beef bridges cultures",
      "ingredients": [
        "2 pounds beef short ribs",
        "4 dried guajillo chiles, stemmed and seeded",
        "2 dried ancho chiles, stemmed and seeded",
        "1 onion, quartered",
        "4 cloves garlic",
        "1-inch piece ginger",
        "2 tomatoes, roasted",
        "1 cinnamon stick",
        "2 bay leaves",
        "1 teaspoon cumin",
        "1 teaspoon oregano",
        "4 cups beef broth",
        "2 tablespoons apple cider vinegar",
        "4 portions ramen noodles",
        "Lime wedges",
        "Cilantro, chopped",
        "Radishes, thinly sliced",
        "White onion, diced"
      ],
      "steps": [
        "Toast dried chiles in a dry pan until fragrant, then soak in hot water for 20 minutes.",
        "In a blender, combine rehydrated chiles, roasted tomatoes, half the onion, garlic, and ginger. Blend until smooth.",
        "In a large pot, sear beef short ribs on all sides. Add chile mixture, remaining onion, cinnamon, bay leaves, cumin, oregano, beef broth, and vinegar.",
        "Simmer covered for 3 hours until beef is tender and falling off the bone.",
        "Remove beef, shred it, and strain the broth.",
        "Cook ramen noodles according to package instructions.",
        "Assemble bowls with noodles, broth, shredded beef, lime, cilantro, radishes, and onion."
      ],
      "pairings": {
        drink: "Mexican lager with lime",
        music: "Latin jazz fusion"
      }
    },
    {
      "id": 8,
      "name": "Truffle Mushroom Ramen",
      "cuisine": "Italian-Japanese Fusion",
      "mainIngredient": "Mushrooms",
      "effortLevel": "Medium",
      "vibes": ["Elegant", "Earthy"],
      "categories": ["vegetables", "italian", "soup"],
      "date": "January 8",
      "description": "A luxurious umami bomb featuring a medley of mushrooms and a hint of truffle in a creamy broth.",
      "image": "assets/dishes/truffle-mushroom.png",
      "haiku": "Forest floor secrets—Truffle whispers to mushrooms—Earth's hidden treasures",
      "ingredients": [
        "4 cups mushroom or vegetable broth",
        "1 ounce dried porcini mushrooms, soaked in hot water",
        "2 tablespoons butter",
        "1 tablespoon olive oil",
        "8 oz mixed fresh mushrooms (shiitake, cremini, oyster)",
        "2 shallots, minced",
        "3 cloves garlic, minced",
        "2 tablespoons white miso paste",
        "1/4 cup heavy cream",
        "1 teaspoon truffle oil",
        "4 portions ramen noodles",
        "4 soft-boiled eggs",
        "Fresh thyme leaves",
        "Shaved Parmesan cheese",
        "Freshly ground black pepper"
      ],
      "steps": [
        "Strain soaked porcini mushrooms, reserving liquid. Chop porcini and set aside.",
        "In a pot, heat butter and olive oil. Add fresh mushrooms and sauté until golden.",
        "Add shallots and garlic, cook until fragrant.",
        "Add porcini mushrooms, reserved soaking liquid (strained), and broth. Simmer for 20 minutes.",
        "Whisk in miso paste and heavy cream. Simmer for 5 more minutes.",
        "Cook ramen noodles according to package instructions.",
        "Assemble bowls with noodles and broth. Drizzle with truffle oil and top with egg, thyme, Parmesan, and black pepper."
      ],
      "pairings": {
        drink: "Dry white wine",
        music: "Classical piano"
      }
    },
    {
      "id": 9,
      "name": "Breakfast Bacon & Egg Ramen",
      "cuisine": "American-Japanese Fusion",
      "mainIngredient": "Pork",
      "effortLevel": "Easy",
      "vibes": ["Cozy", "Nostalgic"],
      "categories": ["pork", "eggs", "soup"],
      "date": "January 9",
      "description": "Morning comfort in a bowl, combining breakfast favorites with ramen for the ultimate brunch dish.",
      "image": "assets/dishes/breakfast-ramen.png",
      "haiku": "Morning sun rises—Bacon sizzles with promise—Egg crowns the new day",
      "ingredients": [
        "4 cups chicken broth",
        "2 tablespoons butter",
        "1 tablespoon maple syrup",
        "1 tablespoon soy sauce",
        "8 slices bacon",
        "4 portions ramen noodles",
        "4 eggs, sunny-side up",
        "2 green onions, sliced",
        "Hot sauce to taste",
        "Freshly ground black pepper"
      ],
      "steps": [
        "Cook bacon in a pan until crispy. Set aside, reserving 1 tablespoon bacon fat.",
        "In a pot, add bacon fat, chicken broth, butter, maple syrup, and soy sauce. Bring to a simmer.",
        "Cook ramen noodles according to package instructions.",
        "In a separate pan, fry eggs sunny-side up.",
        "Assemble bowls with noodles and broth. Top with bacon, fried egg, green onions, hot sauce, and black pepper."
      ],
      "pairings": {
        drink: "Cold brew coffee",
        music: "Morning acoustic playlist"
      }
    },
    {
      "id": 10,
      "name": "Pho-Inspired Beef Ramen",
      "cuisine": "Vietnamese-Japanese Fusion",
      "mainIngredient": "Beef",
      "effortLevel": "Medium",
      "vibes": ["Aromatic", "Soothing"],
      "categories": ["beef", "soup"],
      "date": "January 10",
      "description": "A fragrant crossover between Vietnamese pho and Japanese ramen, featuring a star anise and cinnamon-infused broth.",
      "image": "assets/dishes/pho-ramen.png",
      "haiku": "Spices dance in broth—Two traditions intertwine—Aroma guides you",
      "ingredients": [
        "8 cups beef broth",
        "1 onion, halved and charred",
        "4 cloves garlic",
        "2-inch piece ginger, sliced",
        "2 star anise pods",
        "1 cinnamon stick",
        "2 cloves",
        "1 tablespoon fish sauce",
        "1 tablespoon soy sauce",
        "4 portions ramen noodles",
        "8 oz thinly sliced beef sirloin",
        "Bean sprouts",
        "Thai basil leaves",
        "Cilantro, chopped",
        "Lime wedges",
        "Sliced jalapeños",
        "Hoisin and sriracha sauce for serving"
      ],
      "steps": [
        "In a large pot, add beef broth, charred onion, garlic, ginger, star anise, cinnamon, and cloves. Simmer for 30 minutes.",
        "Strain the broth and return to the pot. Add fish sauce and soy sauce.",
        "Cook ramen noodles according to package instructions.",
        "Assemble bowls with noodles and hot broth. The heat will cook the thinly sliced beef.",
        "Top with bean sprouts, Thai basil, cilantro, lime, and jalapeños. Serve with hoisin and sriracha on the side."
      ],
      "pairings": {
        drink: "Jasmine tea",
        music: "Ambient Asian fusion"
      }
    },    {
      "id": 11,
      "name": "Edamame and Shredded Carrot Ramen",
      "cuisine": "Japanese Fusion",
      "mainIngredient": "Vegetables",
      "effortLevel": "Easy",
      "vibes": ["Fresh", "Light"],
      "categories": ["vegetables", "soup"],
      "date": "January 11",
      "description": "A crisp, clean bowl of ramen with edamame, shredded carrots, and a soy-ginger broth that delivers refreshing balance.",
      "image": "assets/dishes/edamame-carrot.png",
      "haiku": "Green pods rest in broth—Crunch of carrot, broth like breeze—Clean and full of spring",
      "ingredients": [
        "4 cups vegetable broth",
        "2 tablespoons soy sauce",
        "1 tablespoon sesame oil",
        "1 teaspoon grated ginger",
        "4 portions ramen noodles",
        "1 cup shelled edamame",
        "1 cup shredded carrots",
        "Green onions, sliced",
        "Sesame seeds"
      ],
      "steps": [
        "Bring broth to a simmer with soy sauce, sesame oil, and ginger.",
        "Cook ramen noodles according to package instructions.",
        "Blanch edamame and set aside.",
        "Assemble bowls with noodles, broth, edamame, and carrots.",
        "Garnish with green onions and sesame seeds."
      ],
      "pairings": {
        drink: "Cucumber mint soda",
        music: "Gentle acoustic instrumentals"
      }
    },
    {
      "id": 12,
      "name": "Mushroom Bourguignon Ramen",
      "cuisine": "French-Japanese Fusion",
      "mainIngredient": "Mushrooms",
      "effortLevel": "Hard",
      "vibes": ["Earthy", "Decadent"],
      "categories": ["vegetables", "french", "soup"],
      "date": "January 12",
      "description": "A slow-simmered mushroom stew turned ramen—with red wine, garlic, and deeply caramelized flavors.",
      "image": "assets/dishes/mushroom-bourguignon.png",
      "haiku": "Red wine kisses broth—Mushrooms melt in their own juice—Depth in every slurp",
      "ingredients": [
        "4 cups mushroom broth",
        "1/2 cup red wine",
        "2 tablespoons butter",
        "1 tablespoon olive oil",
        "2 shallots, minced",
        "4 cloves garlic, minced",
        "2 cups assorted mushrooms, sliced",
        "1 tablespoon miso paste",
        "4 portions ramen noodles",
        "Fresh thyme",
        "Black pepper to taste"
      ],
      "steps": [
        "Sauté shallots and garlic in butter and oil until golden.",
        "Add mushrooms and cook until deeply browned.",
        "Pour in red wine and reduce by half.",
        "Add broth and simmer for 15 minutes.",
        "Stir in miso paste.",
        "Cook noodles and combine in bowls with broth and mushrooms.",
        "Top with thyme and cracked pepper."
      ],
      "pairings": {
        drink: "Pinot noir",
        music: "French jazz"
      }
    },
    {
      "id": 13,
      "name": "Hatch Chile Ramen",
      "cuisine": "Southwestern Fusion",
      "mainIngredient": "Vegetables",
      "effortLevel": "Medium",
      "vibes": ["Smoky", "Bright"],
      "categories": ["vegetables", "spicy", "soup"],
      "date": "January 13",
      "description": "A fire-roasted Hatch chile broth infused with garlic and lime, paired with roasted corn and ramen noodles.",
      "image": "assets/dishes/hatch-chile.png",
      "haiku": "Chiles roast, then steam—Smoke and lime in every sip—Heat with heart and depth",
      "ingredients": [
        "4 cups vegetable broth",
        "2 fire-roasted Hatch chiles, chopped",
        "1/2 cup roasted corn",
        "2 cloves garlic, minced",
        "1 tablespoon lime juice",
        "4 portions ramen noodles",
        "1 tablespoon olive oil",
        "Green onions, sliced",
        "Tortilla strips (optional)"
      ],
      "steps": [
        "Heat oil and sauté garlic until fragrant.",
        "Add chiles and corn, cook briefly.",
        "Add broth and lime juice, simmer for 10 minutes.",
        "Cook noodles separately.",
        "Assemble bowls with noodles, broth, and toppings."
      ],
      "pairings": {
        drink: "Agua fresca",
        music: "Desert indie rock"
      }
    },
    {
      "id": 14,
      "name": "Garlic Sesame Ramen",
      "cuisine": "Japanese",
      "mainIngredient": "Vegetables",
      "effortLevel": "Easy",
      "vibes": ["Toasty", "Simple"],
      "categories": ["vegetables", "soup"],
      "date": "January 14",
      "description": "A fragrant, nutty garlic and sesame broth pairs beautifully with crisp vegetables and tender noodles.",
      "image": "assets/dishes/garlic-sesame.png",
      "haiku": "Garlic, oil, and seed—The kitchen hums with warm scent—Slurp and start again",
      "ingredients": [
        "4 cups vegetable broth",
        "1 tablespoon sesame oil",
        "4 cloves garlic, thinly sliced",
        "1 tablespoon soy sauce",
        "1 teaspoon rice vinegar",
        "4 portions ramen noodles",
        "1 cup shredded cabbage",
        "1/2 cup sliced mushrooms",
        "Green onions, sesame seeds"
      ],
      "steps": [
        "Fry garlic in sesame oil until golden, then set aside.",
        "Add broth, soy sauce, and vinegar to pot, bring to simmer.",
        "Cook noodles, then add vegetables briefly to blanch.",
        "Assemble bowls with broth, noodles, veggies, and fried garlic."
      ],
      "pairings": {
        drink: "Toasted barley tea",
        music: "Japanese city pop"
      }
    },
    {
      "id": 15,
      "name": "Spicy Brussels Sprouts Ramen",
      "cuisine": "Asian Fusion",
      "mainIngredient": "Vegetables",
      "effortLevel": "Medium",
      "vibes": ["Fiery", "Crunchy"],
      "categories": ["vegetables", "spicy", "soup"],
      "date": "January 15",
      "description": "Crispy roasted Brussels sprouts tossed in chili oil sit atop a spicy miso broth with plenty of attitude.",
      "image": "assets/dishes/spicy-brussels.png",
      "haiku": "Tiny green lanterns—Blistered, bold, alive with heat—Broth bites back with fire",
      "ingredients": [
        "4 cups vegetable broth",
        "2 tablespoons white miso paste",
        "1 tablespoon chili oil",
        "1 tablespoon soy sauce",
        "2 cups halved Brussels sprouts",
        "1 tablespoon sesame oil",
        "4 portions ramen noodles",
        "Green onions",
        "Sesame seeds"
      ],
      "steps": [
        "Roast Brussels sprouts with sesame oil until crispy.",
        "Simmer broth with miso, soy sauce, and chili oil.",
        "Cook noodles and combine in bowls.",
        "Top with sprouts, green onions, and sesame seeds."
      ],
      "pairings": {
        drink: "Sparkling ginger ale",
        music: "Modern funk"
      }
    },{
      "id": 16,
      "name": "BBQ Shrimp Ramen",
      "cuisine": "Southern-Japanese Fusion",
      "mainIngredient": "Shrimp",
      "effortLevel": "Medium",
      "vibes": ["Savory", "Smoky"],
      "categories": ["shrimp", "soup"],
      "date": "January 16",
      "description": "Bold BBQ-glazed shrimp served over smoky soy-infused ramen broth with a tangy twist.",
      "image": "assets/dishes/bbq-shrimp.png",
      "haiku": "Smoke and soy collide—Shrimp glazed with southern sunshine—Slurped in silence, joy",
      "ingredients": [
        "4 cups chicken broth",
        "1 tablespoon soy sauce",
        "1 teaspoon smoked paprika",
        "1 tablespoon rice vinegar",
        "4 portions ramen noodles",
        "12 large shrimp, peeled and deveined",
        "2 tablespoons BBQ sauce",
        "1 teaspoon sesame oil",
        "Green onions, sliced",
        "Pickled red onion"
      ],
      "steps": [
        "Simmer broth with soy sauce, paprika, and vinegar.",
        "Toss shrimp with BBQ sauce and sear until glazed and cooked.",
        "Cook ramen noodles according to package instructions.",
        "Assemble bowls with broth, noodles, shrimp, and garnishes."
      ],
      "pairings": {
        drink: "Sweet tea",
        music: "Bluesy southern guitar"
      }
    },
    {
      "id": 17,
      "name": "Sriracha Shrimp Ramen",
      "cuisine": "Spicy Fusion",
      "mainIngredient": "Shrimp",
      "effortLevel": "Easy",
      "vibes": ["Fiery", "Fast"],
      "categories": ["shrimp", "spicy", "soup"],
      "date": "January 17",
      "description": "Spicy sriracha shrimp deliver a punch in this fiery, satisfying noodle bowl with bold broth and a bright finish.",
      "image": "assets/dishes/sriracha-shrimp.png",
      "haiku": "Chili swirls the bowl—Shrimp flash bright against the red—Heat with every bite",
      "ingredients": [
        "4 cups chicken broth",
        "2 tablespoons sriracha",
        "1 tablespoon soy sauce",
        "1 teaspoon sugar",
        "4 portions ramen noodles",
        "12 shrimp, peeled and deveined",
        "1 tablespoon sesame oil",
        "1 garlic clove, minced",
        "Lime wedges",
        "Cilantro, chopped"
      ],
      "steps": [
        "Simmer broth with sriracha, soy sauce, and sugar.",
        "Sauté shrimp in sesame oil and garlic until cooked.",
        "Cook noodles, then build bowls with broth, shrimp, and toppings."
      ],
      "pairings": {
        drink: "Citrusy IPA",
        music: "Upbeat street pop"
      }
    },
    {
      "id": 18,
      "name": "Hawaiian Garlic Shrimp Ramen",
      "cuisine": "Hawaiian-Japanese Fusion",
      "mainIngredient": "Shrimp",
      "effortLevel": "Medium",
      "vibes": ["Tropical", "Umami"],
      "categories": ["shrimp", "garlicky", "soup"],
      "date": "January 18",
      "description": "A buttery garlic shrimp ramen inspired by Hawaiian plate lunch, balanced with lime and a light broth.",
      "image": "assets/dishes/hawaiian-shrimp.png",
      "haiku": "Waves of garlic crash—Shrimp sizzle on golden shores—Sunlight in the bowl",
      "ingredients": [
        "4 cups seafood or chicken broth",
        "1 tablespoon fish sauce",
        "1 tablespoon soy sauce",
        "1 teaspoon brown sugar",
        "12 shrimp, tail-on",
        "6 garlic cloves, minced",
        "2 tablespoons butter",
        "4 portions ramen noodles",
        "Lime wedges",
        "Green onions"
      ],
      "steps": [
        "Simmer broth with soy, fish sauce, and sugar.",
        "Sauté garlic in butter until golden, add shrimp and cook.",
        "Cook noodles and assemble with broth, shrimp, garlic butter, and lime."
      ],
      "pairings": {
        drink: "Pineapple soda",
        music: "Island chill playlist"
      }
    },
    {
      "id": 19,
      "name": "Shrimp with Cherry Peppers Ramen",
      "cuisine": "Italian-Japanese Fusion",
      "mainIngredient": "Shrimp",
      "effortLevel": "Medium",
      "vibes": ["Spicy", "Zesty"],
      "categories": ["shrimp", "spicy", "italian", "soup"],
      "date": "January 19",
      "description": "Tender shrimp with cherry pepper heat in a tangy broth with garlic, herbs, and springy noodles.",
      "image": "assets/dishes/shrimp-cherry.png",
      "haiku": "Peppers spark and sting—Shrimp curl in tangy embrace—Basil softens heat",
      "ingredients": [
        "4 cups chicken broth",
        "1/2 cup cherry peppers, sliced",
        "1 tablespoon olive oil",
        "3 cloves garlic, minced",
        "4 portions ramen noodles",
        "12 shrimp, peeled and deveined",
        "Fresh basil",
        "Parmesan (optional)"
      ],
      "steps": [
        "Simmer broth with cherry peppers and garlic.",
        "Sauté shrimp in olive oil until just done.",
        "Cook noodles, combine with broth and shrimp.",
        "Top with basil and optional parmesan."
      ],
      "pairings": {
        drink: "Sparkling lemonade",
        music: "Modern Italian jazz"
      }
    },
    {
      "id": 20,
      "name": "Shrimp Wonton Ramen",
      "cuisine": "Chinese-Japanese Fusion",
      "mainIngredient": "Shrimp",
      "effortLevel": "Hard",
      "vibes": ["Delicate", "Comforting"],
      "categories": ["shrimp", "wonton", "soup"],
      "date": "January 20",
      "description": "Handmade shrimp wontons float in a clear, soothing broth with thin ramen noodles and baby bok choy.",
      "image": "assets/dishes/shrimp-wonton.png",
      "haiku": "Silken folds conceal—Shrimp held in gentle embrace—Broth soothes every breath",
      "ingredients": [
        "4 cups chicken or shrimp broth",
        "12 shrimp wontons (homemade or store-bought)",
        "4 portions thin ramen noodles",
        "1 tablespoon soy sauce",
        "1 teaspoon sesame oil",
        "1 cup baby bok choy",
        "Green onions"
      ],
      "steps": [
        "Bring broth to simmer with soy sauce and sesame oil.",
        "Add bok choy and cook briefly.",
        "Cook wontons and noodles separately.",
        "Assemble bowls with noodles, wontons, broth, and vegetables."
      ],
      "pairings": {
        drink: "Jasmine tea",
        music: "Elegant instrumental"
      }
    },{
      "id": 21,
      "name": "Mac and Cheese Ramen",
      "cuisine": "American-Japanese Fusion",
      "mainIngredient": "Cheese",
      "effortLevel": "Easy",
      "vibes": ["Comforting", "Playful"],
      "categories": ["cheesey", "soup"],
      "date": "January 21",
      "description": "A nostalgic mashup of creamy mac and cheese with springy ramen noodles—gooey, golden, and totally indulgent.",
      "image": "assets/dishes/mac-cheese-ramen.png",
      "haiku": "Cheese coats every curl—Childhood meets chopsticks halfway—Spoon and slurp unite",
      "ingredients": [
        "2 tablespoons butter",
        "2 tablespoons flour",
        "2 cups milk",
        "2 cups shredded cheddar cheese",
        "1 teaspoon Dijon mustard",
        "Salt and pepper to taste",
        "4 portions ramen noodles",
        "Chives, chopped"
      ],
      "steps": [
        "In a saucepan, melt butter and whisk in flour to make a roux.",
        "Slowly whisk in milk, then stir until thickened.",
        "Add cheddar and mustard, stirring until melted.",
        "Cook ramen noodles separately and drain.",
        "Mix noodles into cheese sauce and serve topped with chives."
      ],
      "pairings": {
        drink: "Cream soda",
        music: "Throwback 90s playlist"
      }
    },{
      "id": 22,
      "name": "Creamy Mushroom Ramen",
      "cuisine": "Italian-Japanese Fusion",
      "mainIngredient": "Mushrooms",
      "effortLevel": "Medium",
      "vibes": ["Earthy", "Silky"],
      "categories": ["cheesey", "vegetables", "soup", "italian"],
      "date": "January 22",
      "description": "A lush, creamy ramen with sautéed mushrooms and Parmesan, inspired by both carbonara and tonkotsu.",
      "image": "assets/dishes/creamy-mushroom-ramen.png",
      "haiku": "Mushrooms take a bow—Cream spins webs through forest broth—Soft as fallen leaves",
      "ingredients": [
        "2 tablespoons butter",
        "1 tablespoon olive oil",
        "1 shallot, minced",
        "2 cups mixed mushrooms, sliced",
        "2 cloves garlic, minced",
        "3 cups vegetable or chicken broth",
        "1/2 cup heavy cream",
        "1/4 cup grated Parmesan",
        "4 portions ramen noodles",
        "Black pepper, cracked"
      ],
      "steps": [
        "Sauté shallot and garlic in butter and oil.",
        "Add mushrooms and cook until golden.",
        "Pour in broth and simmer 10 minutes.",
        "Add cream and Parmesan, stir to combine.",
        "Cook noodles and serve with broth, mushrooms, and pepper."
      ],
      "pairings": {
        drink: "Chardonnay",
        music: "Lo-fi piano"
      }
    },{
      "id": 23,
      "name": "Creamy Peri Peri Ramen",
      "cuisine": "Portuguese-Japanese Fusion",
      "mainIngredient": "Spicy Sauce",
      "effortLevel": "Medium",
      "vibes": ["Spicy", "Rich"],
      "categories": ["cheesey", "soup"],
      "date": "January 23",
      "description": "A spicy and creamy ramen that fuses the heat of peri peri sauce with a velvety broth and a cheesy finish.",
      "image": "assets/dishes/creamy-peri-peri.png",
      "haiku": "Flame in every drop—Cream calms the crackle of heat—Bold becomes balanced",
      "ingredients": [
        "3 cups chicken broth",
        "1/2 cup heavy cream",
        "2 tablespoons peri peri sauce",
        "1/2 cup shredded mozzarella",
        "4 portions ramen noodles",
        "1 tablespoon olive oil",
        "1 clove garlic, minced",
        "Chopped cilantro",
        "Lime wedges"
      ],
      "steps": [
        "Sauté garlic in olive oil until fragrant.",
        "Add broth and peri peri sauce, bring to a simmer.",
        "Stir in cream and mozzarella until smooth.",
        "Cook ramen noodles and combine in bowls.",
        "Top with cilantro and a squeeze of lime."
      ],
      "pairings": {
        drink: "Sparkling lime water",
        music: "Afrobeat chill mix"
      }
    },{
      "id": 24,
      "name": "Vegan Cheesy Ramen",
      "cuisine": "Plant-Based Fusion",
      "mainIngredient": "Cashew Cheese",
      "effortLevel": "Easy",
      "vibes": ["Wholesome", "Creamy"],
      "categories": ["cheesey", "vegetables", "soup"],
      "date": "January 24",
      "description": "A silky vegan ramen made with nutritional yeast and cashews, bringing full-on comfort without dairy.",
      "image": "assets/dishes/vegan-cheese-ramen.png",
      "haiku": "Cheese without the cow—Cashew dreams in golden swirls—Warmth, no compromise",
      "ingredients": [
        "1/2 cup cashews, soaked",
        "2 tablespoons nutritional yeast",
        "2 cups vegetable broth",
        "1 tablespoon miso paste",
        "1 tablespoon lemon juice",
        "1 garlic clove",
        "4 portions ramen noodles",
        "Smoked paprika",
        "Chives"
      ],
      "steps": [
        "Blend soaked cashews with yeast, broth, miso, lemon juice, and garlic until smooth.",
        "Heat mixture in a pot until warmed through.",
        "Cook noodles and add to the sauce.",
        "Serve with a sprinkle of paprika and chives."
      ],
      "pairings": {
        drink: "Iced turmeric latte",
        music: "Vegan café playlist"
      }
    },{
      "id": 25,
      "name": "Creamy Spinach-Heavy Green Ramen",
      "cuisine": "Health-Fusion",
      "mainIngredient": "Spinach",
      "effortLevel": "Easy",
      "vibes": ["Green", "Velvety"],
      "categories": ["cheesey", "vegetables", "soup"],
      "date": "January 25",
      "description": "A bright, spinach-forward ramen blended into a creamy green sauce with Parmesan and lemon.",
      "image": "assets/dishes/green-spinach-ramen.png",
      "haiku": "Fields in every spoon—Green cream curls around the broth—Sunlight sipped in swirls",
      "ingredients": [
        "4 cups spinach, blanched",
        "1/4 cup cream cheese",
        "2 tablespoons grated Parmesan",
        "2 cups vegetable broth",
        "1 tablespoon lemon juice",
        "4 portions ramen noodles",
        "Salt and pepper to taste",
        "Toasted pine nuts"
      ],
      "steps": [
        "Blend spinach, cream cheese, Parmesan, broth, and lemon juice until smooth.",
        "Warm sauce gently in a pot.",
        "Cook noodles and mix into sauce.",
        "Top with pine nuts and serve immediately."
      ],
      "pairings": {
        drink: "Cucumber water",
        music: "Indie garden vibes"
      }
    },{
      "id": 26,
      "name": "Chocolate Covered Ramen",
      "cuisine": "Experimental",
      "mainIngredient": "Chocolate",
      "effortLevel": "Easy",
      "vibes": ["Crunchy", "Sweet"],
      "categories": ["dessert"],
      "date": "January 26",
      "description": "Crisp ramen nests coated in silky dark chocolate and sprinkled with sea salt—a playful, candy-like twist.",
      "image": "assets/dishes/chocolate-ramen.png",
      "haiku": "Curls of crunch and shine—Bitter-sweet meets salty snap—Ramen reimagined",
      "ingredients": [
        "2 bricks instant ramen (no seasoning)",
        "1 cup dark chocolate chips",
        "1 tablespoon coconut oil",
        "Flaky sea salt"
      ],
      "steps": [
        "Break ramen into bite-sized clusters.",
        "Melt chocolate and coconut oil together until smooth.",
        "Dip or coat ramen pieces in chocolate and place on parchment paper.",
        "Sprinkle with sea salt and refrigerate until set."
      ],
      "pairings": {
        drink: "Cold brew with oat milk",
        music: "Indie electro beats"
      }
    },{
      "id": 27,
      "name": "Butterscotch Ramen",
      "cuisine": "Retro Dessert Fusion",
      "mainIngredient": "Butterscotch",
      "effortLevel": "Medium",
      "vibes": ["Rich", "Nostalgic"],
      "categories": ["dessert"],
      "date": "January 27",
      "description": "Warm, sticky butterscotch coats crunchy ramen clusters, like candy bark from a dream diner menu.",
      "image": "assets/dishes/butterscotch-ramen.png",
      "haiku": "Golden sugar drip—Noodles curl in velvet syrup—Soft snap, melted grin",
      "ingredients": [
        "2 cups crushed instant ramen",
        "3 tablespoons butter",
        "1/2 cup brown sugar",
        "1/4 cup heavy cream",
        "1 teaspoon vanilla extract",
        "Pinch of salt"
      ],
      "steps": [
        "Toast ramen in a dry skillet until lightly golden.",
        "In a saucepan, melt butter and stir in brown sugar and cream.",
        "Simmer until thick, add vanilla and salt.",
        "Pour over toasted ramen, stir to coat, and let cool in clusters on parchment."
      ],
      "pairings": {
        drink: "Buttered rum mocktail",
        music: "50s doo-wop dessert playlist"
      }
    },{
      "id": 28,
      "name": "Nut Butter Ramen",
      "cuisine": "Protein Dessert",
      "mainIngredient": "Peanut Butter",
      "effortLevel": "Easy",
      "vibes": ["Nutty", "Satisfying"],
      "categories": ["dessert"],
      "date": "January 28",
      "description": "Crunchy ramen tossed in a creamy peanut butter and maple glaze. Like a cereal bar, but weirder and better.",
      "image": "assets/dishes/nut-butter-ramen.png",
      "haiku": "Sticky, sweet, and bold—Crunch meets nut in quiet bite—Snacks redefined here",
      "ingredients": [
        "2 bricks instant ramen",
        "1/2 cup peanut butter (or almond butter)",
        "1/4 cup maple syrup",
        "1 teaspoon vanilla extract",
        "Pinch of cinnamon",
        "Crushed peanuts (optional)"
      ],
      "steps": [
        "Break ramen into small chunks and toast in a dry pan.",
        "Warm nut butter and maple syrup until pourable.",
        "Add vanilla and cinnamon, then toss with ramen.",
        "Form into bars or clusters and cool until firm.",
        "Top with crushed peanuts if desired."
      ],
      "pairings": {
        drink: "Iced banana milk",
        music: "Lo-fi chillhop"
      }
    },{
      "id": 29,
      "name": "Coconut Covered Chocolate Ramen",
      "cuisine": "Tropical Dessert",
      "mainIngredient": "Coconut",
      "effortLevel": "Easy",
      "vibes": ["Toasty", "Exotic"],
      "categories": ["dessert"],
      "date": "January 29",
      "description": "Toasted ramen clusters dipped in dark chocolate and rolled in coconut flakes. Like a Mounds bar with crunch.",
      "image": "assets/dishes/coconut-chocolate-ramen.png",
      "haiku": "Coconut snow drapes—Bitter melt hugs toasted curls—Islands made of bite",
      "ingredients": [
        "2 packs ramen noodles",
        "1 cup dark chocolate, melted",
        "1 tablespoon coconut oil",
        "1 cup shredded coconut, toasted"
      ],
      "steps": [
        "Toast crushed ramen lightly in a pan.",
        "Melt chocolate with coconut oil.",
        "Form small clusters of ramen, dip in chocolate, then roll in coconut.",
        "Place on parchment and chill to set."
      ],
      "pairings": {
        drink: "Coconut milk chai",
        music: "Tropical downtempo"
      }
    },{
      "id": 30,
      "name": "Peppermint and White Chocolate Ramen",
      "cuisine": "Winter Dessert",
      "mainIngredient": "White Chocolate",
      "effortLevel": "Easy",
      "vibes": ["Cool", "Festive"],
      "categories": ["dessert"],
      "date": "January 30",
      "description": "Crushed ramen, white chocolate, and crushed peppermint candies meet in a holiday-ready bark.",
      "image": "assets/dishes/peppermint-white-ramen.png",
      "haiku": "Mint flakes fall like frost—Snow-white curls of cocoa crunch—Joy in broken shards",
      "ingredients": [
        "2 bricks instant ramen",
        "1 cup white chocolate chips",
        "1 tablespoon coconut oil",
        "1/4 cup crushed peppermint candies"
      ],
      "steps": [
        "Break ramen into small pieces and toast until crisp.",
        "Melt white chocolate with coconut oil.",
        "Mix ramen into chocolate and spread onto parchment.",
        "Top with crushed peppermint and chill to harden.",
        "Break into bark-like shards to serve."
      ],
      "pairings": {
        drink: "Mint hot cocoa",
        music: "Indie holiday lounge"
      }
    },{
      "id": 31,
      "name": "Dry Ramen & Spicy Party Mix",
      "cuisine": "Snack Fusion",
      "mainIngredient": "Ramen",
      "effortLevel": "Easy",
      "vibes": ["Spicy", "Crunchy"],
      "categories": ["dessert"],
      "date": "January 31",
      "description": "Sweet, salty, and spicy snack mix featuring crushed ramen, nuts, and a hot honey glaze—made for sharing.",
      "image": "assets/dishes/party-mix-ramen.png",
      "haiku": "Fire laced with sweet salt—Ramen crunch and nutty snap—Bowl emptied too soon",
      "ingredients": [
        "2 ramen bricks, crumbled",
        "1/2 cup mixed nuts",
        "1/2 cup pretzel pieces",
        "2 tablespoons hot honey",
        "1 tablespoon butter",
        "1/4 teaspoon cayenne (optional)"
      ],
      "steps": [
        "Preheat oven to 325°F.",
        "Toss all dry ingredients in a bowl.",
        "Melt butter and hot honey together, then pour over mix.",
        "Spread on a baking sheet and toast for 10–12 minutes.",
        "Cool and store in an airtight container."
      ],
      "pairings": {
        drink: "Cherry cola",
        music: "Party hip-hop classics"
      }
    },{
      "id": 32,
      "name": "Ramen Noodle Coleslaw",
      "cuisine": "American Picnic",
      "mainIngredient": "Cabbage",
      "effortLevel": "Easy",
      "vibes": ["Crunchy", "Zingy"],
      "categories": ["salad", "vegetables"],
      "date": "February 1",
      "description": "A picnic classic with raw ramen noodles, shredded cabbage, and a tangy-sweet dressing for unbeatable crunch.",
      "image": "assets/dishes/coleslaw-ramen.png",
      "haiku": "Crack and tangle bright—Dressing hums with sugar tang—Cabbage sings in shards",
      "ingredients": [
        "1 pack ramen noodles (dry, crushed)",
        "4 cups shredded cabbage",
        "2 carrots, julienned",
        "1/4 cup green onions, sliced",
        "1/4 cup sunflower seeds",
        "1/4 cup slivered almonds",
        "1/4 cup rice vinegar",
        "2 tablespoons sugar",
        "2 tablespoons vegetable oil",
        "1 tablespoon soy sauce"
      ],
      "steps": [
        "Crush ramen and toast in a dry pan until golden.",
        "Whisk vinegar, sugar, oil, and soy sauce to make dressing.",
        "In a large bowl, combine cabbage, carrots, onions, almonds, and sunflower seeds.",
        "Toss with dressing and ramen right before serving to preserve crunch."
      ],
      "pairings": {
        drink: "Lemon iced tea",
        music: "Backyard BBQ playlist"
      }
    },{
      "id": 33,
      "name": "Broccoli and Almond Ramen Salad",
      "cuisine": "Crunchy Clean Fusion",
      "mainIngredient": "Broccoli",
      "effortLevel": "Easy",
      "vibes": ["Toasty", "Nutty"],
      "categories": ["salad", "vegetables", "nuts"],
      "date": "February 2",
      "description": "Blanched broccoli tossed with almonds, crispy ramen, and a sesame-soy vinaigrette. Nutty and refreshing.",
      "image": "assets/dishes/broccoli-ramen-salad.png",
      "haiku": "Green florets glisten—Noodles toast, almonds deepen—A bowl built for bites",
      "ingredients": [
        "2 cups broccoli florets, blanched",
        "1 ramen brick, crushed and toasted",
        "1/4 cup sliced almonds",
        "2 tablespoons sesame oil",
        "1 tablespoon rice vinegar",
        "1 tablespoon soy sauce",
        "1 teaspoon honey",
        "1 garlic clove, minced",
        "Sesame seeds"
      ],
      "steps": [
        "Blanch broccoli and cool under cold water.",
        "Toast crushed ramen and almonds until golden.",
        "Whisk dressing ingredients together.",
        "Toss broccoli, ramen, almonds, and sesame seeds with dressing."
      ],
      "pairings": {
        drink: "Crisp white wine",
        music: "Clean kitchen groove"
      }
    },{
      "id": 34,
      "name": "Cabbage and Ramen Salad",
      "cuisine": "Pan-Asian Picnic",
      "mainIngredient": "Cabbage",
      "effortLevel": "Easy",
      "vibes": ["Simple", "Fresh"],
      "categories": ["salad", "vegetables"],
      "date": "February 3",
      "description": "A simplified riff on classic ramen salad—cabbage, toasted noodles, and a soy-vinegar dressing. Everyday light lunch hero.",
      "image": "assets/dishes/cabbage-ramen-salad.png",
      "haiku": "Cabbage folds like fans—Ramen crackles, fast and bright—Lunch with quiet joy",
      "ingredients": [
        "1/2 head green cabbage, shredded",
        "1 ramen noodle brick, crushed",
        "1/4 cup scallions, chopped",
        "2 tablespoons soy sauce",
        "2 tablespoons rice vinegar",
        "1 tablespoon neutral oil",
        "1 teaspoon sugar"
      ],
      "steps": [
        "Toast ramen in a skillet until golden and fragrant.",
        "Whisk together soy sauce, vinegar, oil, and sugar.",
        "In a large bowl, mix cabbage and scallions with dressing.",
        "Toss in ramen just before serving."
      ],
      "pairings": {
        drink: "Ginger lemonade",
        music: "Midday acoustic"
      }
    },{
      "id": 35,
      "name": "Orange Slaw Ramen",
      "cuisine": "Citrus Fusion",
      "mainIngredient": "Cabbage",
      "effortLevel": "Easy",
      "vibes": ["Bright", "Juicy"],
      "categories": ["salad", "vegetables", "fruit"],
      "date": "February 4",
      "description": "A juicy twist on ramen slaw with mandarin oranges, cabbage, and a sweet sesame-orange vinaigrette.",
      "image": "assets/dishes/orange-slaw-ramen.png",
      "haiku": "Segments burst like stars—Crunch and citrus pirouette—Fork of sunny days",
      "ingredients": [
        "1 ramen noodle brick, crushed and toasted",
        "4 cups slaw mix or shredded cabbage",
        "1 cup mandarin orange segments",
        "1/4 cup sliced almonds",
        "2 tablespoons sesame oil",
        "1 tablespoon rice vinegar",
        "1 tablespoon orange juice",
        "1 teaspoon soy sauce",
        "1 teaspoon honey"
      ],
      "steps": [
        "Toast ramen and almonds in a dry skillet.",
        "Mix cabbage and orange slices in a bowl.",
        "Whisk dressing ingredients until smooth.",
        "Combine everything just before serving."
      ],
      "pairings": {
        drink: "Sparkling orange soda",
        music: "Afternoon tropical beats"
      }
    },{
      "id": 36,
      "name": "Brussels Sprouts Ramen Salad",
      "cuisine": "Fall Fusion",
      "mainIngredient": "Brussels Sprouts",
      "effortLevel": "Medium",
      "vibes": ["Shaved", "Savory"],
      "categories": ["salad", "vegetables"],
      "date": "February 5",
      "description": "Shaved Brussels sprouts, toasted ramen, and maple-Dijon dressing make for a fall-fresh salad with crunch and bite.",
      "image": "assets/dishes/brussels-ramen-salad.png",
      "haiku": "Leaf layers whisper—Sharp and soft in vinaigrette—Crunch speaks autumn’s truth",
      "ingredients": [
        "2 cups shaved Brussels sprouts",
        "1 ramen brick, crushed and toasted",
        "1/4 cup dried cranberries",
        "1/4 cup pecans, chopped",
        "2 tablespoons olive oil",
        "1 tablespoon maple syrup",
        "1 tablespoon Dijon mustard",
        "1 tablespoon apple cider vinegar",
        "Salt and pepper"
      ],
      "steps": [
        "Toast ramen and pecans until fragrant.",
        "Whisk olive oil, syrup, mustard, and vinegar into dressing.",
        "Toss Brussels sprouts, cranberries, ramen, and pecans with dressing.",
        "Season and serve chilled or room temp."
      ],
      "pairings": {
        drink: "Maple kombucha",
        music: "Cozy sweater weather mix"
      }
    },{
      "id": 37,
      "name": "Orange Almond Cherry Ramen Salad",
      "cuisine": "Fruit & Crunch Fusion",
      "mainIngredient": "Fruit",
      "effortLevel": "Easy",
      "vibes": ["Sweet", "Zesty"],
      "categories": ["salad", "fruit", "nuts"],
      "date": "February 6",
      "description": "A festive cold salad with ramen crunch, citrus segments, toasted almonds, and dried cherries in an orange vinaigrette.",
      "image": "assets/dishes/orange-cherry-ramen.png",
      "haiku": "Cherries dot the swirl—Almond slivers, citrus fire—Color bursts in bowls",
      "ingredients": [
        "1 ramen brick, crushed",
        "1 orange, segmented",
        "1/4 cup dried cherries",
        "1/4 cup sliced almonds, toasted",
        "4 cups shredded cabbage or kale",
        "2 tablespoons olive oil",
        "1 tablespoon orange juice",
        "1 teaspoon honey",
        "Pinch of salt"
      ],
      "steps": [
        "Toast ramen and almonds until golden.",
        "Mix greens with cherries and orange segments.",
        "Whisk dressing and pour over salad.",
        "Toss and serve chilled."
      ],
      "pairings": {
        drink: "Orange hibiscus tea",
        music: "Eclectic folk pop"
      }
    },{
      "id": 38,
      "name": "Banh Mi Ramen Noodle Bowl",
      "cuisine": "Vietnamese Fusion",
      "mainIngredient": "Vegetables",
      "effortLevel": "Medium",
      "vibes": ["Tangy", "Streetwise"],
      "categories": ["salad", "vegetables"],
      "date": "February 7",
      "description": "Cold ramen noodles with pickled vegetables, herbs, and spicy mayo—like a deconstructed banh mi in bowl form.",
      "image": "assets/dishes/banh-mi-noodle-bowl.png",
      "haiku": "Vinegar and bite—Ramen winds through herb bouquets—Crunch, heat, and whisper",
      "ingredients": [
        "4 portions ramen noodles, cooked and chilled",
        "1/2 cup pickled carrots and daikon",
        "1/2 cucumber, julienned",
        "1/4 cup cilantro",
        "1/4 cup mint",
        "2 tablespoons spicy mayo",
        "1 tablespoon soy sauce",
        "Juice of 1/2 lime",
        "Crushed peanuts (optional)"
      ],
      "steps": [
        "Toss chilled noodles with soy sauce and lime juice.",
        "Arrange vegetables and herbs over the top.",
        "Drizzle with spicy mayo and top with peanuts if desired.",
        "Serve cold as a refreshing noodle salad."
      ],
      "pairings": {
        drink: "Iced Vietnamese coffee",
        music: "Urban street jazz"
      }
    },{
      "id": 39,
      "name": "Ramen Carbonara with Tofu",
      "cuisine": "Italian-Japanese Fusion",
      "mainIngredient": "Tofu",
      "effortLevel": "Medium",
      "vibes": ["Creamy", "Inventive"],
      "categories": ["tofu", "italian", "soup"],
      "date": "February 8",
      "description": "Silky tofu and egg yolk create a carbonara-style ramen, rich with umami and flecked with black pepper.",
      "image": "assets/dishes/tofu-carbonara.png",
      "haiku": "Yolk and broth entwine—Tofu soft as whispered clouds—Pasta, meet your match",
      "ingredients": [
        "4 cups vegetable broth",
        "1/2 block soft tofu, blended",
        "2 egg yolks",
        "1 tablespoon soy sauce",
        "1/2 teaspoon black pepper",
        "4 portions ramen noodles",
        "Green onions, sliced",
        "Grated parmesan (optional)"
      ],
      "steps": [
        "Whisk tofu, egg yolks, soy sauce, and black pepper until creamy.",
        "Cook ramen noodles, drain and return to pot.",
        "Stir in tofu-carbonara mix with noodles off-heat until thickened.",
        "Serve topped with green onions and optional cheese."
      ],
      "pairings": {
        drink: "Sparkling water with lemon",
        music: "Modern Italian jazz-hop"
      }
    },
    {
      "id": 40,
      "name": "Roasted Garlic and Tofu Ramen",
      "cuisine": "Umami Classic",
      "mainIngredient": "Tofu",
      "effortLevel": "Medium",
      "vibes": ["Savory", "Comforting"],
      "categories": ["tofu", "soup"],
      "date": "February 9",
      "description": "Golden roasted garlic melts into a rich broth with tender tofu cubes, a deeply satisfying ramen experience.",
      "image": "assets/dishes/garlic-tofu.png",
      "haiku": "Garlic breathes slow heat—Tofu floats in golden sea—Soft light in each bite",
      "ingredients": [
        "4 cups vegetable broth",
        "1 bulb garlic, roasted",
        "1 tablespoon miso paste",
        "1 tablespoon soy sauce",
        "1 block firm tofu, cubed and pan-seared",
        "4 portions ramen noodles",
        "Green onions",
        "Sesame oil"
      ],
      "steps": [
        "Roast garlic until soft and caramelized, then mash.",
        "Add to simmering broth with miso and soy sauce.",
        "Pan-sear tofu cubes until golden.",
        "Cook ramen noodles, assemble with broth and tofu.",
        "Drizzle with sesame oil and garnish."
      ],
      "pairings": {
        drink: "Roasted barley tea",
        music: "Warm instrumental piano"
      }
    },
    {
      "id": 41,
      "name": "Shiitake Tofu Ramen",
      "cuisine": "Japanese",
      "mainIngredient": "Tofu",
      "effortLevel": "Easy",
      "vibes": ["Earthy", "Simple"],
      "categories": ["tofu", "vegetables", "soup"],
      "date": "February 10",
      "description": "Soft tofu and shiitake mushrooms soak up a light broth rich in umami, perfect for a soothing lunch.",
      "image": "assets/dishes/shiitake-tofu.png",
      "haiku": "Shiitake bows low—Tofu drifts, weightless and calm—Steam writes soft kanji",
      "ingredients": [
        "4 cups dashi or vegetable broth",
        "1 tablespoon soy sauce",
        "1 tablespoon mirin",
        "1 teaspoon sesame oil",
        "1 block soft tofu, cubed",
        "1 cup shiitake mushrooms, sliced",
        "4 portions ramen noodles",
        "Green onions"
      ],
      "steps": [
        "Simmer broth with soy, mirin, and mushrooms for 10 minutes.",
        "Gently add tofu and heat without breaking.",
        "Cook noodles separately and add to bowls.",
        "Ladle broth over noodles, top with green onions."
      ],
      "pairings": {
        drink: "Hot green tea",
        music: "Japanese ambient forest sounds"
      }
    },
    {
      "id": 42,
      "name": "Crispy Tofu Ramen",
      "cuisine": "Modern Asian",
      "mainIngredient": "Tofu",
      "effortLevel": "Medium",
      "vibes": ["Crispy", "Balanced"],
      "categories": ["tofu", "soup"],
      "date": "February 11",
      "description": "Golden pan-fried tofu tops a sesame-soy broth and tender noodles. The texture contrast is everything.",
      "image": "assets/dishes/crispy-tofu.png",
      "haiku": "Crunch breaks quiet broth—Crisp shell holds tender center—Contrast meets the slurp",
      "ingredients": [
        "4 cups vegetable broth",
        "2 tablespoons soy sauce",
        "1 tablespoon sesame oil",
        "1 block extra-firm tofu, pressed and cubed",
        "Cornstarch for coating",
        "4 portions ramen noodles",
        "Scallions, sesame seeds"
      ],
      "steps": [
        "Coat tofu in cornstarch and pan-fry until golden and crisp.",
        "Simmer broth with soy sauce and sesame oil.",
        "Cook noodles separately.",
        "Assemble bowls with broth, noodles, and tofu.",
        "Top with scallions and sesame seeds."
      ],
      "pairings": {
        drink: "Sparking lime water",
        music: "Indie surf instrumental"
      }
    },
    {
      "id": 43,
      "name": "Gochujang Tofu Ramen",
      "cuisine": "Korean Fusion",
      "mainIngredient": "Tofu",
      "effortLevel": "Medium",
      "vibes": ["Spicy", "Bold"],
      "categories": ["tofu", "spicy", "soup"],
      "date": "February 12",
      "description": "Tofu braised in spicy gochujang sauce sits atop ramen noodles in a fiery, flavorful broth.",
      "image": "assets/dishes/gochujang-tofu.png",
      "haiku": "Red heat hums and bites—Tofu glows in velvet fire—Spice and steam embrace",
      "ingredients": [
        "4 cups vegetable broth",
        "2 tablespoons gochujang",
        "1 tablespoon soy sauce",
        "1 tablespoon sesame oil",
        "1 block firm tofu, sliced",
        "4 portions ramen noodles",
        "Kimchi (optional)",
        "Green onions"
      ],
      "steps": [
        "Simmer broth with gochujang, soy sauce, and sesame oil.",
        "Pan-fry tofu slices until golden.",
        "Cook ramen noodles and add to broth.",
        "Top with tofu, green onions, and kimchi if desired."
      ],
      "pairings": {
        drink: "Cold Korean beer",
        music: "K-pop deep cuts"
      }
    },
    {
      "id": 44,
      "name": "Sesame Tofu Ramen",
      "cuisine": "Minimalist Asian",
      "mainIngredient": "Tofu",
      "effortLevel": "Easy",
      "vibes": ["Nutty", "Light"],
      "categories": ["tofu", "soup"],
      "date": "February 13",
      "description": "Tofu and ramen meet in a nutty sesame broth with simplicity and elegance—a weeknight favorite.",
      "image": "assets/dishes/sesame-tofu.png",
      "haiku": "Whispers of sesame—Tofu leans into the broth—Slowness finds a spoon",
      "ingredients": [
        "4 cups vegetable broth",
        "1 tablespoon tahini or sesame paste",
        "1 tablespoon soy sauce",
        "1 block soft tofu, cubed",
        "4 portions ramen noodles",
        "Chili oil (optional)",
        "Sesame seeds"
      ],
      "steps": [
        "Whisk tahini into simmering broth with soy sauce.",
        "Gently add tofu and heat through.",
        "Cook noodles, combine in bowls with broth.",
        "Garnish with sesame seeds and chili oil if desired."
      ],
      "pairings": {
        drink: "Iced barley tea",
        music: "Calm study vibes"
      }
    },
    {
      "id": 45,
      "name": "Glazed Chili Tofu Ramen",
      "cuisine": "Asian Fusion",
      "mainIngredient": "Tofu",
      "effortLevel": "Medium",
      "vibes": ["Sweet", "Spicy"],
      "categories": ["tofu", "spicy", "soup"],
      "date": "February 14",
      "description": "Crispy tofu coated in sweet chili glaze over a simple soy broth—fiery and crowd-pleasing.",
      "image": "assets/dishes/chili-glazed-tofu.png",
      "haiku": "Sweet clings to the heat—Tofu shell cracks like sugar—Underneath, soft peace",
      "ingredients": [
        "1 block extra-firm tofu, pressed and cubed",
        "2 tablespoons sweet chili sauce",
        "1 tablespoon soy sauce",
        "1 tablespoon sesame oil",
        "4 cups broth",
        "4 portions ramen noodles",
        "Scallions and chili flakes"
      ],
      "steps": [
        "Pan-fry tofu until crispy.",
        "Toss in sweet chili and soy glaze off heat.",
        "Simmer broth and cook noodles.",
        "Assemble bowls and top with glazed tofu and scallions."
      ],
      "pairings": {
        drink: "Thai iced tea",
        music: "Night market beats"
      }
    },
    {
      "id": 46,
      "name": "Panko-Crusted Tofu Ramen",
      "cuisine": "Crunch Fusion",
      "mainIngredient": "Tofu",
      "effortLevel": "Hard",
      "vibes": ["Crunchy", "Golden"],
      "categories": ["tofu", "soup"],
      "date": "February 15",
      "description": "Crispy panko-crusted tofu cutlets over a light broth—like ramen meets katsu in a satisfying bowl.",
      "image": "assets/dishes/panko-tofu.png",
      "haiku": "Golden coats break loud—Tofu hides in armor crisp—Broth bows to the crunch",
      "ingredients": [
        "1 block firm tofu, sliced into cutlets",
        "Flour, egg, and panko for dredging",
        "4 cups broth",
        "1 tablespoon soy sauce",
        "1 teaspoon mirin",
        "4 portions ramen noodles",
        "Green onions"
      ],
      "steps": [
        "Dredge tofu in flour, egg, and panko; fry until golden.",
        "Simmer broth with soy and mirin.",
        "Cook noodles and place in bowls.",
        "Top with tofu cutlets and garnish."
      ],
      "pairings": {
        drink: "Crisp lager",
        music: "Retro Tokyo funk"
      }
    },
    {
      "id": 47,
      "name": "Tofu and Edamame Ramen",
      "cuisine": "Clean Bowl",
      "mainIngredient": "Tofu",
      "effortLevel": "Easy",
      "vibes": ["Fresh", "Green"],
      "categories": ["tofu", "vegetables", "soup"],
      "date": "February 16",
      "description": "A light and nourishing ramen with tofu cubes, shelled edamame, and a ginger-soy broth—perfect for a reset meal.",
      "image": "assets/dishes/tofu-edamame.png",
      "haiku": "Green pearls rise and float—Tofu cubes like lily pads—Steam clears quiet minds",
      "ingredients": [
        "4 cups vegetable broth",
        "1 tablespoon soy sauce",
        "1 teaspoon grated ginger",
        "1 block firm tofu, cubed",
        "1 cup shelled edamame",
        "4 portions ramen noodles",
        "Green onions"
      ],
      "steps": [
        "Simmer broth with soy sauce and ginger.",
        "Add tofu and edamame, cook until heated.",
        "Cook noodles, combine in bowls with broth.",
        "Garnish with green onions."
      ],
      "pairings": {
        drink: "Cucumber-infused water",
        music: "Gentle ambient beats"
      }
    },{
      "id": 48,
      "name": "Pad Thai Ramen with Egg",
      "cuisine": "Thai Fusion",
      "mainIngredient": "Eggs",
      "effortLevel": "Medium",
      "vibes": ["Tangy", "Streetwise"],
      "categories": ["eggs", "stir fry"],
      "date": "February 17",
      "description": "A ramen-twist on pad Thai with scrambled egg, tamarind sauce, peanuts, and crisp vegetables.",
      "image": "assets/dishes/pad-thai-ramen.png",
      "haiku": "Peanut crunch, lime zing—Egg curls into noodle knots—Tamarind sings loud",
      "ingredients": [
        "4 portions ramen noodles, cooked and drained",
        "2 eggs, lightly beaten",
        "1/2 cup bean sprouts",
        "1/4 cup shredded carrots",
        "2 green onions, sliced",
        "2 tablespoons tamarind paste",
        "1 tablespoon fish sauce",
        "1 tablespoon brown sugar",
        "1 tablespoon soy sauce",
        "1/4 cup crushed peanuts",
        "Lime wedges"
      ],
      "steps": [
        "In a pan, scramble eggs and set aside.",
        "Mix tamarind paste, fish sauce, sugar, and soy sauce.",
        "Stir-fry noodles with sauce until coated.",
        "Add eggs, carrots, sprouts, and green onions.",
        "Top with peanuts and serve with lime."
      ],
      "pairings": {
        drink: "Thai iced tea",
        music: "Bangkok street mix"
      }
    },
    {
      "id": 49,
      "name": "Breakfast Taco Ramen",
      "cuisine": "Tex-Mex Fusion",
      "mainIngredient": "Eggs",
      "effortLevel": "Easy",
      "vibes": ["Playful", "Savory"],
      "categories": ["eggs", "mexican", "stir fry"],
      "date": "February 18",
      "description": "Scrambled eggs, salsa, and spiced toppings meet ramen noodles for a taco-inspired breakfast mashup.",
      "image": "assets/dishes/breakfast-taco-ramen.png",
      "haiku": "Egg, salsa, and spice—Ramen wakes with zest and snap—Mornings taste like flame",
      "ingredients": [
        "4 portions ramen noodles",
        "3 eggs, scrambled",
        "1/4 cup diced bell pepper",
        "1/4 cup diced onion",
        "1/4 cup shredded cheese",
        "2 tablespoons salsa",
        "Hot sauce to taste",
        "Cilantro, chopped",
        "Tortilla chips for garnish"
      ],
      "steps": [
        "Cook ramen and drain.",
        "Scramble eggs with onions and peppers.",
        "Mix noodles with eggs, cheese, and salsa.",
        "Top with hot sauce, cilantro, and crushed chips."
      ],
      "pairings": {
        drink: "Horchata cold brew",
        music: "Weekend brunch mix"
      }
    },
    {
      "id": 50,
      "name": "Ramen Frittata",
      "cuisine": "Brunch Fusion",
      "mainIngredient": "Eggs",
      "effortLevel": "Medium",
      "vibes": ["Cozy", "Protein-Packed"],
      "categories": ["eggs"],
      "date": "February 19",
      "description": "A baked frittata with ramen noodles woven through, loaded with vegetables and topped with melted cheese.",
      "image": "assets/dishes/ramen-frittata.png",
      "haiku": "Noodles baked in egg—Golden lid, soft savory heart—Fork dives through the warmth",
      "ingredients": [
        "4 portions cooked ramen noodles",
        "6 eggs, beaten",
        "1/2 cup diced bell peppers",
        "1/4 cup spinach, chopped",
        "1/4 cup shredded cheese",
        "1/4 teaspoon salt",
        "Black pepper to taste",
        "Olive oil"
      ],
      "steps": [
        "Preheat oven to 375°F (190°C).",
        "Sauté vegetables until soft.",
        "In a bowl, mix eggs, noodles, veggies, and cheese.",
        "Pour into oiled skillet and bake for 20–25 minutes.",
        "Slice and serve warm."
      ],
      "pairings": {
        drink: "Mimosa",
        music: "Brunch chillwave"
      }
    },
    {
      "id": 51,
      "name": "Ramen Quiche",
      "cuisine": "French-Japanese Fusion",
      "mainIngredient": "Eggs",
      "effortLevel": "Hard",
      "vibes": ["Elegant", "Unexpected"],
      "categories": ["eggs", "french"],
      "date": "February 20",
      "description": "A refined quiche with a crispy ramen crust, baked with savory egg custard and layered veggies.",
      "image": "assets/dishes/ramen-quiche.png",
      "haiku": "Noodles form the base—Eggs and cream rise soft with heat—A slice of surprise",
      "ingredients": [
        "2 portions cooked ramen, pressed into crust",
        "4 eggs",
        "1/2 cup cream or milk",
        "1/4 cup sautéed mushrooms",
        "1/4 cup spinach",
        "1/4 cup grated cheese",
        "Salt and pepper"
      ],
      "steps": [
        "Preheat oven to 375°F (190°C).",
        "Press cooked ramen into a pie pan as crust.",
        "Whisk eggs, cream, veggies, and cheese.",
        "Pour into crust and bake for 30–35 minutes.",
        "Let cool slightly before slicing."
      ],
      "pairings": {
        drink: "Dry white wine",
        music: "French café piano"
      }
    },
    {
      "id": 52,
      "name": "Ramen Migas",
      "cuisine": "Mexican Fusion",
      "mainIngredient": "Eggs",
      "effortLevel": "Easy",
      "vibes": ["Crunchy", "Comforting"],
      "categories": ["eggs", "mexican", "stir fry"],
      "date": "February 21",
      "description": "Ramen noodles stir-fried with scrambled eggs, tortilla strips, and peppers in a Tex-Mex-style migas remix.",
      "image": "assets/dishes/ramen-migas.png",
      "haiku": "Eggs hug tortilla—Ramen wriggles with bright spice—Tex-Mex finds new form",
      "ingredients": [
        "4 portions ramen noodles, cooked and drained",
        "3 eggs, scrambled",
        "1/2 cup tortilla strips",
        "1/4 cup chopped onion",
        "1/4 cup diced tomato",
        "1/4 cup cheddar cheese",
        "Hot sauce and cilantro"
      ],
      "steps": [
        "Cook onion and tomato in a pan until soft.",
        "Add tortilla strips and scramble in eggs.",
        "Stir in cooked ramen and cheese.",
        "Top with hot sauce and cilantro."
      ],
      "pairings": {
        drink: "Bloody Mary",
        music: "Borderlands morning mix"
      }
    },
    {
      "id": 53,
      "name": "Ramen Omelet",
      "cuisine": "Anytime Diner",
      "mainIngredient": "Eggs",
      "effortLevel": "Easy",
      "vibes": ["Retro", "Hearty"],
      "categories": ["eggs", "stir fry"],
      "date": "February 22",
      "description": "Classic diner omelet meets chewy noodles—folded together with veggies and cheese in a fun skillet surprise.",
      "image": "assets/dishes/ramen-omelet.png",
      "haiku": "Egg cradles ramen—Folded like a warm handshake—Diner dreams anew",
      "ingredients": [
        "2 portions ramen noodles, cooked and drained",
        "3 eggs, beaten",
        "1/4 cup diced bell pepper",
        "1/4 cup onion, chopped",
        "1/4 cup shredded cheese",
        "Salt and pepper",
        "Oil for frying"
      ],
      "steps": [
        "Sauté peppers and onions until soft.",
        "Add ramen noodles and mix briefly.",
        "Pour eggs over and cook gently.",
        "Add cheese and fold omelet in half to finish."
      ],
      "pairings": {
        drink: "Classic diner coffee",
        music: "Greasy spoon jazz"
      }
    },{
        "id": 54,
        "name": "Canned Clam Ramen",
        "cuisine": "Pantry Classic",
        "mainIngredient": "Clams",
        "effortLevel": "Easy",
        "vibes": ["Savory", "Quick"],
        "categories": ["shellfish", "soup"],
        "date": "February 23",
        "description": "A pantry-friendly ramen with canned clams, garlic, and a splash of white wine for unexpected depth.",
        "image": "assets/dishes/canned-clam-ramen.png",
        "haiku": "Clams in tin await—Garlic lifts the ocean's hush—Broth from the cupboard",
        "ingredients": [
          "1 can chopped clams with juice",
          "2 cloves garlic, minced",
          "1 tablespoon olive oil",
          "1/4 cup white wine",
          "2 cups chicken broth",
          "4 portions ramen noodles",
          "Parsley, chopped",
          "Cracked black pepper"
        ],
        "steps": [
          "Sauté garlic in olive oil until fragrant.",
          "Add clams with juice, wine, and broth. Simmer for 5 minutes.",
          "Cook noodles separately.",
          "Assemble bowls with noodles and broth. Garnish with parsley and pepper."
        ],
        "pairings": {
          "drink": "Chilled white wine",
          "music": "Retro kitchen jams"
        }
      },
      {
        "id": 55,
        "name": "Mussels with Squid Ink Ramen",
        "cuisine": "Spanish-Japanese Fusion",
        "mainIngredient": "Mussels",
        "effortLevel": "Medium",
        "vibes": ["Moody", "Oceanic"],
        "categories": ["shellfish", "soup"],
        "date": "February 24",
        "description": "A jet-black broth made with squid ink and mussels, mysterious and briny, finished with lemon and herbs.",
        "image": "assets/dishes/squid-ink-mussels.png",
        "haiku": "Ink flows through the waves—Mussels murmur secrets deep—Night in every sip",
        "ingredients": [
          "1 lb mussels, cleaned",
          "3 cups fish or chicken broth",
          "1 tablespoon squid ink",
          "2 cloves garlic, sliced",
          "1 shallot, minced",
          "1 tablespoon olive oil",
          "4 portions ramen noodles",
          "Lemon wedges",
          "Fresh parsley"
        ],
        "steps": [
          "Sauté garlic and shallots in oil until fragrant.",
          "Add mussels and broth, simmer until mussels open.",
          "Stir in squid ink and remove mussels.",
          "Cook noodles separately, then combine with broth and mussels.",
          "Garnish with parsley and lemon."
        ],
        "pairings": {
          "drink": "Dry Spanish cava",
          "music": "Seaside flamenco"
        }
      },
      {
        "id": 56,
        "name": "Stone Crab Claws in Red Curry Broth",
        "cuisine": "Thai Fusion",
        "mainIngredient": "Crab",
        "effortLevel": "Hard",
        "vibes": ["Decadent", "Spicy"],
        "categories": ["shellfish", "curry", "soup"],
        "date": "February 25",
        "description": "Sweet stone crab claws nestled in a spicy Thai red curry broth, paired with soft ramen noodles.",
        "image": "assets/dishes/stone-crab-curry.png",
        "haiku": "Claws crack, broth ignites—Curry heat and ocean kiss—Luxury with flame",
        "ingredients": [
          "1 lb stone crab claws",
          "1 tablespoon red curry paste",
          "1 can coconut milk",
          "1 tablespoon fish sauce",
          "1 teaspoon brown sugar",
          "1 lime, juiced",
          "4 portions ramen noodles",
          "Thai basil and cilantro"
        ],
        "steps": [
          "Simmer curry paste in coconut milk until fragrant.",
          "Add fish sauce, sugar, lime juice, and crab claws.",
          "Cook until heated through, about 5 minutes.",
          "Prepare noodles and place in bowls.",
          "Ladle broth and claws over noodles, garnish with herbs."
        ],
        "pairings": {
          "drink": "Thai iced tea",
          "music": "Sunset downtempo"
        }
      },
      {
        "id": 57,
        "name": "Imitation Crab Ramen",
        "cuisine": "Budget Comfort",
        "mainIngredient": "Imitation Crab",
        "effortLevel": "Easy",
        "vibes": ["Simple", "Familiar"],
        "categories": ["shellfish", "soup"],
        "date": "February 26",
        "description": "A cozy bowl of ramen with soft imitation crab sticks, scallions, and a buttery soy broth.",
        "image": "assets/dishes/imitation-crab-ramen.png",
        "haiku": "Crab curls without sea—Butter blends with soy and steam—Fake, but still feels real",
        "ingredients": [
          "1 pack imitation crab sticks",
          "4 cups chicken or vegetable broth",
          "1 tablespoon soy sauce",
          "1 teaspoon butter",
          "4 portions ramen noodles",
          "Green onions",
          "Toasted sesame seeds"
        ],
        "steps": [
          "Simmer broth with soy sauce and butter.",
          "Shred imitation crab and warm in broth.",
          "Cook noodles, combine in bowls.",
          "Top with scallions and sesame seeds."
        ],
        "pairings": {
          "drink": "Iced green tea",
          "music": "Budget-friendly lo-fi"
        }
      }, {
        "id": 58,
        "name": "Octopus Ramen",
        "cuisine": "Japanese Mediterranean Fusion",
        "mainIngredient": "Octopus",
        "effortLevel": "Hard",
        "vibes": ["Chewy", "Elegant"],
        "categories": ["shellfish", "soup"],
        "date": "February 27",
        "description": "Tender slices of slow-braised octopus in a clear dashi broth with shiso and ginger.",
        "image": "assets/dishes/octopus-ramen.png",
        "haiku": "Tentacles unfurl—Ocean taught patience and taste—Broth hums, soft and deep",
        "ingredients": [
          "1/2 lb cooked octopus, sliced",
          "4 cups dashi broth",
          "1-inch piece ginger, sliced",
          "1 tablespoon soy sauce",
          "4 portions ramen noodles",
          "Shiso leaves (optional)",
          "Green onions"
        ],
        "steps": [
          "Simmer dashi with ginger and soy sauce.",
          "Add octopus slices and warm gently.",
          "Cook ramen noodles and combine in bowls.",
          "Top with shiso and green onions."
        ],
        "pairings": {
          "drink": "Umeshu on ice",
          "music": "Zen shoreline ambient"
        }
      },
      {
        "id": 59,
        "name": "Steamers in Light Broth Ramen",
        "cuisine": "New England Fusion",
        "mainIngredient": "Clams",
        "effortLevel": "Medium",
        "vibes": ["Clean", "Salty"],
        "categories": ["shellfish", "soup"],
        "date": "February 28",
        "description": "Delicate steamer clams served in a simple ramen broth with seaweed and herbs.",
        "image": "assets/dishes/steamers-ramen.png",
        "haiku": "Shells creak, brine whispers—Steam draws out sea's lullaby—Noodles float in peace",
        "ingredients": [
          "1 lb steamer clams",
          "4 cups seafood broth",
          "1 tablespoon butter",
          "1 sheet kombu",
          "4 portions ramen noodles",
          "Nori strips",
          "Fresh dill or parsley"
        ],
        "steps": [
          "Simmer broth with kombu and butter for 10 minutes, then remove kombu.",
          "Add steamers and cook until they open.",
          "Cook noodles separately.",
          "Assemble bowls with noodles, clams, broth, and herbs."
        ],
        "pairings": {
          "drink": "Dry cider",
          "music": "Lighthouse folk mix"
        }
      },
      {
        "id": 60,
        "name": "BBQ Clams Ramen",
        "cuisine": "Coastal Fusion",
        "mainIngredient": "Clams",
        "effortLevel": "Medium",
        "vibes": ["Smoky", "Savory"],
        "categories": ["shellfish", "soup"],
        "date": "March 1",
        "description": "Char-grilled clams add smokiness to a soy-based ramen broth with grilled onions and garlic.",
        "image": "assets/dishes/bbq-clams-ramen.png",
        "haiku": "Shells hiss on the flame—Smoke drifts over soy-soaked waves—Fire meets slurp and sea",
        "ingredients": [
          "1 lb littleneck clams",
          "1 onion, sliced",
          "4 cloves garlic",
          "4 cups chicken broth",
          "1 tablespoon soy sauce",
          "4 portions ramen noodles",
          "Green onions"
        ],
        "steps": [
          "Grill clams, onion, and garlic until charred and clams open.",
          "Simmer broth with soy and grilled garlic/onion.",
          "Add clams and warm briefly.",
          "Cook noodles and combine in bowls."
        ],
        "pairings": {
          "drink": "Grilled lemon lager",
          "music": "Coastal blues fusion"
        }
      },
      {
        "id": 61,
        "name": "Bay Scallop Ramen",
        "cuisine": "Elegant Coastal",
        "mainIngredient": "Scallops",
        "effortLevel": "Easy",
        "vibes": ["Light", "Delicate"],
        "categories": ["shellfish", "soup"],
        "date": "March 2",
        "description": "Sweet bay scallops gently poached in a buttery ramen broth, served with scallions and daikon.",
        "image": "assets/dishes/bay-scallop-ramen.png",
        "haiku": "Scallops curl in broth—Sweetness like pearls dissolving—Sea in softest hush",
        "ingredients": [
          "1/2 lb bay scallops",
          "2 tablespoons butter",
          "4 cups chicken or seafood broth",
          "1 tablespoon soy sauce",
          "1/4 cup shredded daikon",
          "4 portions ramen noodles",
          "Green onions"
        ],
        "steps": [
          "Simmer broth with butter and soy sauce.",
          "Add scallops and daikon, poach gently until opaque.",
          "Cook noodles and combine in bowls.",
          "Garnish with green onions."
        ],
        "pairings": {
          "drink": "Chablis",
          "music": "Minimalist jazz trio"
        }
      },
      {
        "id": 62,
        "name": "Sea Scallops & Mushroom Umami Ramen",
        "cuisine": "Japanese-French Fusion",
        "mainIngredient": "Scallops",
        "effortLevel": "Hard",
        "vibes": ["Deep", "Umami"],
        "categories": ["shellfish", "soup"],
        "date": "March 3",
        "description": "Seared sea scallops paired with mushrooms in a deeply savory broth packed with umami richness.",
        "image": "assets/dishes/seared-scallop-umami.png",
        "haiku": "Golden crust on sea—Mushrooms soak in dusk’s secrets—Depth dances with light",
        "ingredients": [
          "4 sea scallops",
          "1 tablespoon butter",
          "1 cup mixed mushrooms, sliced",
          "4 cups dashi or chicken broth",
          "1 tablespoon soy sauce",
          "4 portions ramen noodles",
          "Shallots, thinly sliced"
        ],
        "steps": [
          "Sear scallops in butter until golden, set aside.",
          "Sauté mushrooms and shallots briefly.",
          "Simmer broth with mushrooms and soy for 10 minutes.",
          "Cook noodles and assemble with broth, scallops, and shallots."
        ],
        "pairings": {
          "drink": "Sake",
          "music": "Late night classical"
        }
      },
      {
        "id": 63,
        "name": "Lobster Ramen",
        "cuisine": "Luxury Fusion",
        "mainIngredient": "Lobster",
        "effortLevel": "Hard",
        "vibes": ["Decadent", "Festive"],
        "categories": ["shellfish", "soup"],
        "date": "March 4",
        "description": "Butter-poached lobster and a silky ramen broth make this a luxurious, celebratory dish.",
        "image": "assets/dishes/lobster-ramen.png",
        "haiku": "Lobster climbs the bowl—Butter shines on ruby claws—Luxury in slurps",
        "ingredients": [
          "1 lobster tail, cooked and chopped",
          "2 tablespoons butter",
          "4 cups seafood broth",
          "1 tablespoon mirin",
          "1 tablespoon soy sauce",
          "4 portions ramen noodles",
          "Chives"
        ],
        "steps": [
          "Poach lobster in butter gently and set aside.",
          "Simmer broth with mirin and soy sauce.",
          "Cook noodles, combine in bowls.",
          "Top with lobster and chives."
        ],
        "pairings": {
          "drink": "Champagne",
          "music": "Velvet lounge classics"
        }
      },
      {
        "id": 64,
        "name": "Crawfish and Corn Creole Ramen",
        "cuisine": "Southern Fusion",
        "mainIngredient": "Crawfish",
        "effortLevel": "Medium",
        "vibes": ["Spicy", "Festive"],
        "categories": ["shellfish", "soup"],
        "date": "March 5",
        "description": "A Louisiana-style ramen with crawfish tails, sweet corn, and Cajun spices.",
        "image": "assets/dishes/crawfish-creole.png",
        "haiku": "Spice and corn collide—Crawfish crawls through peppered waves—Bayou meets the bowl",
        "ingredients": [
          "1/2 lb crawfish tails",
          "1/2 cup corn kernels",
          "1 tablespoon Cajun seasoning",
          "4 cups chicken broth",
          "4 portions ramen noodles",
          "1 tablespoon butter",
          "Scallions"
        ],
        "steps": [
          "Simmer broth with butter and Cajun seasoning.",
          "Add crawfish and corn, simmer briefly.",
          "Cook noodles and assemble bowls with toppings."
        ],
        "pairings": {
          "drink": "Sweet tea",
          "music": "Creole brass funk"
        }
      },
      {
        "id": 65,
        "name": "Pork and Crabmeat Ramen",
        "cuisine": "Surf and Turf",
        "mainIngredient": "Crab",
        "effortLevel": "Medium",
        "vibes": ["Rich", "Unusual"],
        "categories": ["shellfish", "pork", "soup"],
        "date": "March 6",
        "description": "Juicy pork and delicate crab combine in a ramen with surprising depth and balance.",
        "image": "assets/dishes/pork-crab-ramen.png",
        "haiku": "Crab dances with pig—Land and sea curl in broth’s arms—Harmony slurped whole",
        "ingredients": [
          "1/2 cup shredded pork",
          "1/2 cup lump crabmeat",
          "4 cups pork broth",
          "1 tablespoon soy sauce",
          "4 portions ramen noodles",
          "Chili oil",
          "Scallions"
        ],
        "steps": [
          "Simmer pork broth with soy sauce.",
          "Warm pork and crabmeat in broth gently.",
          "Cook noodles, assemble bowls with meat and toppings."
        ],
        "pairings": {
          "drink": "Amber ale",
          "music": "Fusion jazz shuffle"
        }
      },
      {
        "id": 66,
        "name": "Truffle Crab Ramen",
        "cuisine": "Gourmet Fusion",
        "mainIngredient": "Crab",
        "effortLevel": "Hard",
        "vibes": ["Earthy", "Luxurious"],
        "categories": ["shellfish", "soup"],
        "date": "March 7",
        "description": "Lump crabmeat in a creamy broth with a touch of truffle oil and a swirl of black pepper.",
        "image": "assets/dishes/truffle-crab-ramen.png",
        "haiku": "Truffle drips like fog—Crab whispers under the cream—Luxury held close",
        "ingredients": [
          "1/2 cup lump crabmeat",
          "4 cups chicken or seafood broth",
          "1/2 cup cream",
          "1 teaspoon truffle oil",
          "4 portions ramen noodles",
          "Black pepper",
          "Chives"
        ],
        "steps": [
          "Simmer broth and stir in cream.",
          "Add crabmeat and truffle oil just before serving.",
          "Cook noodles, assemble bowls with black pepper and chives."
        ],
        "pairings": {
          "drink": "Dry prosecco",
          "music": "Evening jazz lounge"
        }
      },
      {
        "id": 67,
        "name": "Crab Asparagus Ramen",
        "cuisine": "Spring Fusion",
        "mainIngredient": "Crab",
        "effortLevel": "Easy",
        "vibes": ["Fresh", "Seasonal"],
        "categories": ["shellfish", "vegetables", "soup"],
        "date": "March 8",
        "description": "Bright spring asparagus and sweet crabmeat in a clear, refreshing ramen broth.",
        "image": "assets/dishes/crab-asparagus-ramen.png",
        "haiku": "Green spears pierce the broth—Crab curls in with soft finesse—Springtime in a sip",
        "ingredients": [
          "1/2 cup lump crabmeat",
          "1 cup asparagus, chopped",
          "4 cups vegetable broth",
          "1 tablespoon soy sauce",
          "4 portions ramen noodles",
          "Lemon zest",
          "Chives"
        ],
        "steps": [
          "Simmer broth with soy sauce, add asparagus and cook until tender.",
          "Add crabmeat and warm through.",
          "Cook noodles and assemble with broth.",
          "Top with lemon zest and chives."
        ],
        "pairings": {
          "drink": "Citrus spritzer",
          "music": "Spring acoustic playlist"
        }
      },{
        "id": 68,
        "name": "Sausage & Peppers Ramen",
        "cuisine": "Italian-Japanese Fusion",
        "mainIngredient": "Pork",
        "effortLevel": "Medium",
        "vibes": ["Hearty", "Street-Food"],
        "categories": ["pork", "italian", "soup"],
        "date": "March 9",
        "description": "Sweet Italian sausage and blistered bell peppers swim in a garlicky tomato-shoyu broth for a bold, fair-style ramen bowl.",
        "image": "assets/dishes/sausage-peppers-ramen.png",
        "haiku": "Sausage sizzles loud—Peppers paint the broth with fire—Noodles catch the song",
        "ingredients": [
          "8 oz sweet Italian sausage, sliced",
          "1 red bell pepper, thin strips",
          "1 yellow bell pepper, thin strips",
          "4 cloves garlic, minced",
          "1 cup crushed tomatoes",
          "4 cups chicken broth",
          "1 tablespoon soy sauce",
          "4 portions ramen noodles",
          "Fresh basil, torn"
        ],
        "steps": [
          "Brown sausage slices; set aside, leaving 1 tbsp fat.",
          "Sauté peppers and garlic in the fat until charred at edges.",
          "Stir in crushed tomatoes, broth, and soy sauce; simmer 10 min.",
          "Cook noodles separately and divide among bowls.",
          "Ladle broth with sausage and peppers over noodles; top with basil."
        ],
        "pairings": {
          "drink": "Chianti spritz",
          "music": "Italian street-band playlist"
        }
      },
      {
        "id": 69,
        "name": "Prosciutto & Peas Ramen",
        "cuisine": "Italian-Japanese Fusion",
        "mainIngredient": "Pork",
        "effortLevel": "Easy",
        "vibes": ["Silky", "Spring"],
        "categories": ["pork", "italian", "soup"],
        "date": "March 10",
        "description": "Delicate ribbons of prosciutto and sweet green peas in a Parmesan-dashi cream give ramen a fresh primavera twist.",
        "image": "assets/dishes/prosciutto-peas-ramen.png",
        "haiku": "Pink curls meet green pearls—Cream whispers of soft meadows—Spring coats every slurp",
        "ingredients": [
          "2 tablespoons butter",
          "1 tablespoon flour",
          "2 cups dashi stock",
          "1 cup milk",
          "1/3 cup grated Parmesan",
          "4 portions ramen noodles",
          "3 oz prosciutto, torn",
          "1 cup thawed green peas",
          "Black pepper"
        ],
        "steps": [
          "Make a roux with butter and flour; whisk in dashi and milk.",
          "Simmer until lightly thick, then melt in Parmesan.",
          "Cook noodles; drain and add to the sauce.",
          "Fold in peas and prosciutto just to warm.",
          "Serve with cracked pepper on top."
        ],
        "pairings": {
          "drink": "Cold Prosecco",
          "music": "Lazy Sunday jazz"
        }
      },
      {
        "id": 70,
        "name": "Bolognese Ramen",
        "cuisine": "Italian-Japanese Fusion",
        "mainIngredient": "Beef",
        "effortLevel": "Hard",
        "vibes": ["Rich", "Slow-Cooked"],
        "categories": ["beef", "italian", "soup"],
        "date": "March 11",
        "description": "A 3-hour beef and tomato ragù thinned with stock becomes an ultra-savory ramen broth that clings to every noodle.",
        "image": "assets/dishes/bolognese-ramen.png",
        "haiku": "Ragù rains on swirls—Long roads of patient simmer—Depth hugs every strand",
        "ingredients": [
          "1 lb ground beef",
          "1 small onion, minced",
          "1 carrot, minced",
          "1 celery rib, minced",
          "2 tablespoons tomato paste",
          "1 cup crushed tomatoes",
          "1/2 cup red wine",
          "4 cups beef broth",
          "4 portions ramen noodles",
          "Grated Parmigiano"
        ],
        "steps": [
          "Brown beef; add onion, carrot, celery and cook until soft.",
          "Stir in tomato paste; caramelize 2 min.",
          "Deglaze with wine; add tomatoes and broth.",
          "Simmer uncovered 2-3 hrs until deep and glossy.",
          "Cook noodles; ladle ragù-broth over, finish with Parmesan."
        ],
        "pairings": {
          "drink": "Barbera d’Asti",
          "music": "Classic Italian crooners"
        }
      },
      {
        "id": 71,
        "name": "Ramen del Mare",
        "cuisine": "Italian-Japanese Fusion",
        "mainIngredient": "Seafood",
        "effortLevel": "Medium",
        "vibes": ["Briny", "Coastal"],
        "categories": ["shellfish", "fish", "italian", "soup"],
        "date": "March 12",
        "description": "Clams, shrimp, and calamari simmer in white-wine fumetto mingled with miso for a Ligurian seaside ramen.",
        "image": "assets/dishes/ramen-del-mare.png",
        "haiku": "Foam of two bright seas—Shells click under noodle waves—Salt wind fills the spoon",
        "ingredients": [
          "1 tablespoon olive oil",
          "2 cloves garlic, sliced",
          "1/2 cup dry white wine",
          "4 cups fish stock",
          "8 littleneck clams, scrubbed",
          "6 large shrimp, peeled",
          "4 oz calamari rings",
          "1 tablespoon white miso",
          "4 portions ramen noodles",
          "Parsley & lemon zest"
        ],
        "steps": [
          "Sauté garlic in oil; add wine and reduce by half.",
          "Pour in fish stock; whisk in miso.",
          "Steam clams until they open; add shrimp and calamari to poach.",
          "Cook noodles; place in bowls.",
          "Ladle seafood broth over noodles; finish with parsley and zest."
        ],
        "pairings": {
          "drink": "Vermentino",
          "music": "Mediterranean chill"
        }
      },
      {
        "id": 72,
        "name": "Chicken in Spicy Tomato Broth Ramen",
        "cuisine": "Italian-Japanese Fusion",
        "mainIngredient": "Chicken",
        "effortLevel": "Easy",
        "vibes": ["Spicy", "Comfort"],
        "categories": ["chicken", "spicy", "italian", "soup"],
        "date": "March 13",
        "description": "Tender shredded chicken in a Calabrian-chili tomato broth keeps this ramen fiery yet familiar.",
        "image": "assets/dishes/chicken-spicy-tomato.png",
        "haiku": "Tomato sparks flame—Chicken drifts in scarlet tide—Heat kisses the twirl",
        "ingredients": [
          "2 cups cooked shredded chicken",
          "1 tablespoon olive oil",
          "2 teaspoons Calabrian chili paste",
          "1 cup crushed tomatoes",
          "4 cups chicken broth",
          "1 teaspoon oregano",
          "4 portions ramen noodles",
          "Grated pecorino"
        ],
        "steps": [
          "Sauté chili paste in oil; add tomatoes and oregano.",
          "Pour in broth; simmer 10 min.",
          "Add chicken to warm through.",
          "Cook noodles; divide among bowls.",
          "Top with spicy broth, chicken, and pecorino."
        ],
        "pairings": {
          "drink": "Sparkling Lambrusco",
          "music": "Italian rock classics"
        }
      },
      {
        "id": 73,
        "name": "Ramen Fasul",
        "cuisine": "Italian-Japanese Fusion",
        "mainIngredient": "Beans",
        "effortLevel": "Easy",
        "vibes": ["Homey", "Budget"],
        "categories": ["vegetables", "italian", "soup"],
        "date": "March 14",
        "description": "A Naples-style pasta e fagioli re-imagined with ramen noodles, cannellini beans, and rosemary-miso broth.",
        "image": "assets/dishes/ramen-fasul.png",
        "haiku": "Beans hum old stories—Rosemary sails miso seas—Noodles join the tale",
        "ingredients": [
          "1 tablespoon olive oil",
          "1/2 onion, diced",
          "1 sprig rosemary",
          "1 can cannellini beans, rinsed",
          "1 tablespoon white miso",
          "4 cups vegetable broth",
          "4 portions ramen noodles",
          "Parmesan rind (optional)",
          "Chili flakes"
        ],
        "steps": [
          "Sweat onion in oil with rosemary until soft.",
          "Add beans, miso, broth, and optional cheese rind; simmer 15 min.",
          "Cook noodles; add to soup.",
          "Serve with chili flakes and drizzle of olive oil."
        ],
        "pairings": {
          "drink": "House red table wine",
          "music": "Neapolitan folk guitar"
        }
      },
      {
        "id": 74,
        "name": "Rabbit Ragout & Soppressata Ramen",
        "cuisine": "Italian-Japanese Fusion",
        "mainIngredient": "Rabbit",
        "effortLevel": "Hard",
        "vibes": ["Rustic", "Gamey"],
        "categories": ["italian", "soup"],
        "date": "March 15",
        "description": "Slow-braised rabbit and spicy soppressata enrich a sage-infused broth, giving ramen a Tuscan farmhouse soul.",
        "image": "assets/dishes/rabbit-soppressata-ramen.png",
        "haiku": "Sage smoke, hillside dusk—Rabbit rests in crimson broth—Noodles chase the hunt",
        "ingredients": [
          "1 lb rabbit pieces",
          "2 oz diced soppressata",
          "1 carrot, diced",
          "1 celery rib, diced",
          "2 cloves garlic",
          "1/4 cup white wine",
          "4 cups chicken stock",
          "2 sage leaves",
          "4 portions ramen noodles"
        ],
        "steps": [
          "Brown rabbit and soppressata; remove.",
          "Sauté carrot, celery, garlic; deglaze with wine.",
          "Return meats, add stock and sage; braise 1.5 hrs until rabbit falls apart.",
          "Shred meat; discard bones.",
          "Cook noodles; top with ragout broth and rabbit."
        ],
        "pairings": {
          "drink": "Chianti Classico",
          "music": "Tuscan folk ballads"
        }
      },
      {
        "id": 75,
        "name": "Ramen Alfredo",
        "cuisine": "Italian-Japanese Fusion",
        "mainIngredient": "Cheese",
        "effortLevel": "Easy",
        "vibes": ["Creamy", "Indulgent"],
        "categories": ["cheesey", "italian", "soup"],
        "date": "March 16",
        "description": "Parmesan-rich Alfredo sauce loosens with dashi to coat springy noodles in sheer decadence.",
        "image": "assets/dishes/ramen-alfredo.png",
        "haiku": "Silk of milk and parm—Dashi nods in quiet depth—Slurps of silver light",
        "ingredients": [
          "2 tablespoons butter",
          "1 cup heavy cream",
          "3/4 cup grated Parmesan",
          "1/2 cup dashi stock",
          "4 portions ramen noodles",
          "Parsley, minced",
          "Black pepper"
        ],
        "steps": [
          "Melt butter with cream; simmer 2 min.",
          "Whisk in Parmesan and dashi until smooth.",
          "Cook noodles and fold into sauce.",
          "Garnish with pepper and parsley."
        ],
        "pairings": {
          "drink": "Sparkling water with lemon",
          "music": "Soft lo-fi piano"
        }
      },
      {
        "id": 76,
        "name": "Cashew-Cream & Caper Ramen",
        "cuisine": "Plant-Based Italian Fusion",
        "mainIngredient": "Cashew Cream",
        "effortLevel": "Medium",
        "vibes": ["Vegan", "Tangy"],
        "categories": ["vegetables", "italian", "soup"],
        "date": "March 17",
        "description": "Velvety cashew cream, bright capers, and lemon make a dairy-free ramen with sharp Mediterranean flair.",
        "image": "assets/dishes/cashew-caper-ramen.png",
        "haiku": "Lemon lifts the hush—Capers pop in creamy seas—Green notes linger light",
        "ingredients": [
          "1/2 cup soaked cashews",
          "1 tablespoon nutritional yeast",
          "2 cups vegetable broth",
          "2 tablespoons capers, rinsed",
          "1 teaspoon lemon zest",
          "4 portions ramen noodles",
          "Baby spinach handful"
        ],
        "steps": [
          "Blend cashews, yeast, and 1 cup broth until silky.",
          "Combine puree with remaining broth; warm gently.",
          "Stir in capers and spinach to wilt.",
          "Cook noodles; serve with lemon zest on top."
        ],
        "pairings": {
          "drink": "Limoncello spritzer (non-alcoholic)",
          "music": "Vegan café acoustic"
        }
      },
      {
        "id": 77,
        "name": "Ramen Puttanesca",
        "cuisine": "Italian-Japanese Fusion",
        "mainIngredient": "Fish",
        "effortLevel": "Medium",
        "vibes": ["Salty", "Bold"],
        "categories": ["fish", "italian", "soup"],
        "date": "March 18",
        "description": "Anchovies, olives, and capers punch up a tomato-miso broth that clings to noodles with midnight-snack attitude.",
        "image": "assets/dishes/ramen-puttanesca.png",
        "haiku": "Night streets taste like brine—Olives wink in red moonlight—Noodles flirt with sin",
        "ingredients": [
          "2 anchovy fillets",
          "2 cloves garlic, minced",
          "1 tablespoon olive oil",
          "1 cup crushed tomatoes",
          "1 tablespoon white miso",
          "4 cups vegetable broth",
          "1/4 cup sliced black olives",
          "2 tablespoons capers",
          "4 portions ramen noodles",
          "Chili flakes"
        ],
        "steps": [
          "Melt anchovies in oil with garlic.",
          "Add tomatoes, miso, broth; simmer 10 min.",
          "Stir in olives and capers.",
          "Cook noodles; ladle spicy briny broth over.",
          "Dust with chili flakes."
        ],
        "pairings": {
          "drink": "Negroni sbagliato (light)",
          "music": "Late-night synthwave"
        }
      },
      {
        "id": 78,
        "name": "Ramen Aglio e Olio",
        "cuisine": "Italian-Japanese Fusion",
        "mainIngredient": "Garlic",
        "effortLevel": "Easy",
        "vibes": ["Minimal", "Toasty"],
        "categories": ["italian", "garlicky", "stir fry"],
        "date": "March 19",
        "description": "Classic spaghetti aglio e olio goes chopstick—garlic-chili oil coats pan-fried ramen for pure simplicity.",
        "image": "assets/dishes/ramen-aglio-olio.png",
        "haiku": "Garlic sings in oil—Chili sparks the midnight pan—Noodles glow with gold",
        "ingredients": [
          "1/4 cup olive oil",
          "6 cloves garlic, thin slices",
          "1/2 teaspoon red chili flakes",
          "4 portions cooked ramen, drained",
          "1 tablespoon soy sauce",
          "Parsley, chopped"
        ],
        "steps": [
          "Heat oil; fry garlic until just golden.",
          "Add chili flakes; toss in noodles.",
          "Splash soy sauce; stir-fry 1 min.",
          "Serve with parsley scatter."
        ],
        "pairings": {
          "drink": "Cold pilsner",
          "music": "Garage rock instrumental"
        }
      },
      {
        "id": 79,
        "name": "Ramen con i Peperoni Cruschi",
        "cuisine": "Southern Italian Fusion",
        "mainIngredient": "Peppers",
        "effortLevel": "Medium",
        "vibes": ["Crunchy", "Smoky"],
        "categories": ["vegetables", "italian", "spicy"],
        "date": "March 20",
        "description": "Basilicata’s crispy sweet-smoked peppers crumble over miso-tomato ramen, adding crackle and aroma.",
        "image": "assets/dishes/peperoni-cruschi-ramen.png",
        "haiku": "Red glass shatters soft—Smoke drifts over scarlet tide—Crunch meets gentle wave",
        "ingredients": [
          "6 peperoni cruschi (dried sweet peppers)",
          "1 tablespoon olive oil",
          "1 tablespoon tomato paste",
          "1 teaspoon white miso",
          "4 cups chicken broth",
          "4 portions ramen noodles",
          "Grated ricotta salata"
        ],
        "steps": [
          "Quick-fry peppers in oil until puffed; crumble and reserve.",
          "Stir tomato paste and miso into the same oil; add broth and simmer.",
          "Cook noodles; bowl with broth.",
          "Top with pepper crumbs and ricotta salata shavings."
        ],
        "pairings": {
          "drink": "Aglianico rosé",
          "music": "Southern Italian trance folk"
        }
      },
      {
        "id": 80,
        "name": "Ramen Arrabbiata",
        "cuisine": "Italian-Japanese Fusion",
        "mainIngredient": "Tomato",
        "effortLevel": "Easy",
        "vibes": ["Fiery", "Quick"],
        "categories": ["spicy", "italian", "soup"],
        "date": "March 21",
        "description": "A 10-minute angry tomato-chili sauce loosens with stock for a lightning-fast ramen with bite.",
        "image": "assets/dishes/ramen-arrabbiata.png",
        "haiku": "Anger boils bright red—Chili claws at every strand—Heat forgives in steam",
        "ingredients": [
          "2 tablespoons olive oil",
          "3 cloves garlic, sliced",
          "1/2 teaspoon red chili flakes",
          "1 cup crushed tomatoes",
          "4 cups vegetable broth",
          "Salt & pepper",
          "4 portions ramen noodles",
          "Parsley"
        ],
        "steps": [
          "Sizzle garlic and chili in oil.",
          "Add tomatoes and broth; simmer 5 min.",
          "Season; cook noodles and combine.",
          "Garnish with parsley."
        ],
        "pairings": {
          "drink": "Italian soda",
          "music": "Energetic surf punk"
        }
      },
      {
        "id": 81,
        "name": "Ramen alla Vongole",
        "cuisine": "Italian-Japanese Fusion",
        "mainIngredient": "Clams",
        "effortLevel": "Medium",
        "vibes": ["Briny", "Elegant"],
        "categories": ["shellfish", "italian", "soup"],
        "date": "March 22",
        "description": "Garlic-white wine clam broth meets miso for a seaside ramen reminiscent of spaghetti alle vongole.",
        "image": "assets/dishes/ramen-vongole.png",
        "haiku": "Shells crack into song—Brine swirls through pale wheat curls—Sea and field embrace",
        "ingredients": [
          "1 tablespoon olive oil",
          "2 cloves garlic, minced",
          "1/2 teaspoon chili flakes",
          "1/2 cup white wine",
          "1 pound littleneck clams",
          "1 tablespoon white miso",
          "4 cups fish stock",
          "4 portions ramen noodles",
          "Parsley & lemon"
        ],
        "steps": [
          "Sauté garlic & chili; add wine and clams, cover till they open.",
          "Stir in miso and fish stock; simmer 5 min.",
          "Cook noodles; divide into bowls.",
          "Pour clam broth and clams over; finish with parsley and lemon."
        ],
        "pairings": {
          "drink": "Verdicchio",
          "music": "Adriatic lounge mix"
        }
      },
      {
        "id": 82,
        "name": "Ramen Ciceri e Tria",
        "cuisine": "Pugliese Fusion",
        "mainIngredient": "Chickpeas",
        "effortLevel": "Medium",
        "vibes": ["Crunch-Soft", "Earthy"],
        "categories": ["vegetables", "italian", "soup"],
        "date": "March 23",
        "description": "Inspired by Puglia’s fried-and-boiled pasta dish, half the ramen is flash-fried for crunch, half boiled with chickpea broth.",
        "image": "assets/dishes/ramen-ciceri-tria.png",
        "haiku": "Half crunch, half velvet—Chickpeas hum of southern sun—Dual paths twine as one",
        "ingredients": [
          "1 can chickpeas, with liquid",
          "2 tablespoons olive oil",
          "1 sprig rosemary",
          "4 cups vegetable broth",
          "4 portions ramen noodles",
          "Salt & pepper"
        ],
        "steps": [
          "Fry 1 portion of dry ramen in olive oil until golden; set aside.",
          "Simmer chickpeas, liquid, broth, rosemary 15 min.",
          "Boil remaining noodles in the broth.",
          "Serve soup, topping with fried noodle shards for crunch."
        ],
        "pairings": {
          "drink": "Rosato frizzante",
          "music": "Taranta folk rhythms"
        }
      },
      {
        "id": 83,
        "name": "Beef Braciole Ramen",
        "cuisine": "Italian-Japanese Fusion",
        "mainIngredient": "Beef",
        "effortLevel": "Hard",
        "vibes": ["Stuffed", "Sunday-Dinner"],
        "categories": ["beef", "italian", "soup"],
        "date": "March 24",
        "description": "Thin beef rolls stuffed with herbs braise in tomato-stock, turning into a luxurious ramen centerpiece.",
        "image": "assets/dishes/braciole-ramen.png",
        "haiku": "Rolled secrets unfold—Herbs breathe into scarlet lake—Noodles greet the feast",
        "ingredients": [
          "4 thin beef cutlets",
          "2 tablespoons breadcrumbs",
          "2 tablespoons grated cheese",
          "Parsley & garlic mince",
          "1 cup crushed tomatoes",
          "4 cups beef broth",
          "1/4 cup red wine",
          "4 portions ramen noodles"
        ],
        "steps": [
          "Spread breadcrumb, cheese, parsley, garlic on beef; roll & tie.",
          "Sear rolls; deglaze with wine.",
          "Add tomatoes and broth; simmer 1 hr.",
          "Slice braciole; serve over noodles with braising broth."
        ],
        "pairings": {
          "drink": "Full-bodied Montepulciano",
          "music": "Sunday family playlist"
        }
      },
      {
        "id": 84,
        "name": "Cincinnati-Style Chili Ramen",
        "cuisine": "Midwest-Japanese Mash-Up",
        "mainIngredient": "Beef",
        "effortLevel": "Medium",
        "vibes": ["Spiced", "Quirky"],
        "categories": ["beef", "italian"],
        "date": "March 25",
        "description": "Cocoa-cinnamon spiced chili ladled over ramen noodles, piled high with cheese and onions—5-way goes otaku.",
        "image": "assets/dishes/cincinnati-ramen.png",
        "haiku": "River spice drifts west—Cocoa winks in scarlet swirl—Cheese snow crowns the curls",
        "ingredients": [
          "1 lb ground beef",
          "1 small onion, diced",
          "2 tablespoons tomato paste",
          "1 tablespoon chili powder",
          "1 teaspoon cocoa powder",
          "1/4 teaspoon cinnamon",
          "4 cups beef broth",
          "4 portions ramen noodles",
          "Shredded cheddar & diced onion"
        ],
        "steps": [
          "Brown beef and onion; stir in spices and paste.",
          "Add broth; simmer 30 min.",
          "Cook noodles; drain.",
          "Top noodles with chili, cheddar, and raw onion."
        ],
        "pairings": {
          "drink": "Root beer",
          "music": "Ohio indie rock"
        }
      },
      {
        "id": 85,
        "name": "Ramen Gnocchi",
        "cuisine": "Playful Fusion",
        "mainIngredient": "Potato",
        "effortLevel": "Hard",
        "vibes": ["Pillow-Soft", "Experimental"],
        "categories": ["italian"],
        "date": "March 26",
        "description": "Potato-ramen flour gnocchi boiled then pan-seared, served in a light soy-sage butter instead of broth.",
        "image": "assets/dishes/ramen-gnocchi.png",
        "haiku": "Pillows kiss hot pan—Soy butter sings with sage leaves—Chew meets gentle cloud",
        "ingredients": [
          "1 cup mashed potato",
          "1 cup crushed dry ramen (powder)",
          "1 egg",
          "1/4 cup flour",
          "3 tablespoons butter",
          "1 teaspoon soy sauce",
          "4 sage leaves"
        ],
        "steps": [
          "Mix potato, crushed ramen, egg, flour; roll & cut gnocchi.",
          "Boil until they float; drain.",
          "Pan-sear in butter; splash soy; crisp sage.",
          "Serve immediately."
        ],
        "pairings": {
          "drink": "Butter-washed sake",
          "music": "Experimental lo-fi"
        }
      },
      {
        "id": 86,
        "name": "Ramen Pizza Crust",
        "cuisine": "Novelty Snack",
        "mainIngredient": "Cheese",
        "effortLevel": "Medium",
        "vibes": ["Crunchy", "Party"],
        "categories": ["cheesey", "italian"],
        "date": "March 27",
        "description": "Par-cooked ramen pressed into a skillet forms a crispy crust, topped Chicago tavern-style with sauce & mozz.",
        "image": "assets/dishes/ramen-pizza-crust.png",
        "haiku": "Disk of crispy twists—Sauce paints curling noodle lands—Slice defies all rules",
        "ingredients": [
          "2 bricks ramen, par-boiled & drained",
          "1 egg, beaten",
          "1/2 cup shredded mozzarella",
          "1/3 cup pizza sauce",
          "Pepperoni slices"
        ],
        "steps": [
          "Mix noodles with egg; press into oiled skillet.",
          "Cook until bottom browns; flip like frittata.",
          "Spread sauce, cheese, pepperoni; broil until bubbly.",
          "Slice & serve hot."
        ],
        "pairings": {
          "drink": "Cola on ice",
          "music": "Arcade chiptunes"
        }
      },
      {
        "id": 87,
        "name": "Ramen Pizza (Topping-On-Crust)",
        "cuisine": "Mash-Up Comfort",
        "mainIngredient": "Noodles",
        "effortLevel": "Easy",
        "vibes": ["Carb-on-Carb", "Fun"],
        "categories": ["italian"],
        "date": "March 28",
        "description": "Classic pizza dough topped with soy-seasoned ramen nests, mozzarella, and scallions—pizza slice meets noodle pull.",
        "image": "assets/dishes/ramen-pizza-topping.png",
        "haiku": "Dough hugs noodle swirl—Cheese bridges the double carbs—One bite, two worlds fuse",
        "ingredients": [
          "1 small pizza crust, par-baked",
          "1 pack ramen, cooked & seasoned",
          "1 cup shredded mozzarella",
          "2 tablespoons sliced scallions",
          "Drizzle of chili oil"
        ],
        "steps": [
          "Arrange seasoned ramen over crust.",
          "Cover with mozzarella.",
          "Bake 8 min at 450°F until cheese melts.",
          "Finish with scallions and chili oil."
        ],
        "pairings": {
          "drink": "Draft lager",
          "music": "Pop-punk anthems"
        }
      },
      {
        "id": 88,
        "name": "Baked Ramen Ziti",
        "cuisine": "Italian-American Fusion",
        "mainIngredient": "Cheese",
        "effortLevel": "Medium",
        "vibes": ["Bubbly", "Family"],
        "categories": ["cheesey", "italian"],
        "date": "March 29",
        "description": "Ramen stands in for pasta in this baked ziti riff—ricotta, marinara, mozzarella, and plenty of oven-crisp edges.",
        "image": "assets/dishes/baked-ramen-ziti.png",
        "haiku": "Oven breathes out gold—Edges crack with cheesy dusk—Family forks collide",
        "ingredients": [
          "4 portions ramen noodles, boiled 2 min & drained",
          "2 cups marinara sauce",
          "1 cup ricotta",
          "1 1/2 cups shredded mozzarella",
          "1/4 cup grated Parmesan",
          "Basil leaves"
        ],
        "steps": [
          "Mix hot noodles with marinara and ricotta.",
          "Pour into baking dish; top with mozzarella & Parmesan.",
          "Bake at 400°F for 20 min until bubbly & browned.",
          "Rest 5 min; garnish with basil."
        ],
        "pairings": {
          "drink": "Table red blend",
          "music": "Family dinner playlist"
        }
      },{
        "id": 89,
        "name": "Roasted Chili Salmon Ramen",
        "cuisine": "Asian Fusion",
        "mainIngredient": "Salmon",
        "effortLevel": "Medium",
        "vibes": ["Bold", "Smoky"],
        "categories": ["fish", "spicy", "soup"],
        "date": "March 30",
        "description": "Salmon roasted with chili glaze, served atop ramen noodles in a rich, spicy broth.",
        "image": "assets/dishes/roasted-chili-salmon.png",
        "haiku": "Salmon blazes hot—Chili glaze and smoky broth—Slurped with fiery zest",
        "ingredients": [
          "4 salmon fillets",
          "2 tablespoons chili paste",
          "1 tablespoon soy sauce",
          "1 tablespoon honey",
          "4 cups chicken broth",
          "4 portions ramen noodles",
          "Green onions, sliced",
          "Lime wedges"
        ],
        "steps": [
          "Preheat oven and roast salmon fillets brushed with chili paste, soy sauce, and honey.",
          "Simmer broth and cook ramen noodles separately.",
          "Assemble bowls with broth, noodles, and roasted salmon.",
          "Garnish with green onions and lime wedges."
        ],
        "pairings": {
          "drink": "Cold sake",
          "music": "Energetic jazz fusion"
        }
      },
      {
        "id": 90,
        "name": "Miso Salmon Ramen",
        "cuisine": "Japanese",
        "mainIngredient": "Salmon",
        "effortLevel": "Medium",
        "vibes": ["Umami", "Savory"],
        "categories": ["fish", "soup"],
        "date": "March 31",
        "description": "Tender salmon fillets marinated in miso and gently simmered in a savory ramen broth.",
        "image": "assets/dishes/miso-salmon.png",
        "haiku": "Salmon bathed in miso—Broth whispers softly, deep taste—Comfort swims gently",
        "ingredients": [
          "4 salmon fillets",
          "3 tablespoons white miso paste",
          "4 cups vegetable broth",
          "1 tablespoon mirin",
          "4 portions ramen noodles",
          "Nori sheets, sliced"
        ],
        "steps": [
          "Marinate salmon fillets in miso paste and mirin for 20 minutes.",
          "Simmer broth and gently poach salmon until cooked through.",
          "Cook ramen noodles separately and assemble bowls with salmon, noodles, and broth.",
          "Garnish with nori slices."
        ],
        "pairings": {
          "drink": "Hot green tea",
          "music": "Traditional Japanese instrumental"
        }
      },
      {
        "id": 91,
        "name": "Honey Teriyaki Salmon Ramen",
        "cuisine": "Japanese Fusion",
        "mainIngredient": "Salmon",
        "effortLevel": "Easy",
        "vibes": ["Sweet", "Comforting"],
        "categories": ["fish", "soup"],
        "date": "April 1",
        "description": "Salmon glazed in sweet honey-teriyaki sauce atop comforting ramen noodles.",
        "image": "assets/dishes/honey-teriyaki-salmon.png",
        "haiku": "Sweet glaze coats salmon—Teriyaki whispers warmth—Broth hugs noodles close",
        "ingredients": [
          "4 salmon fillets",
          "3 tablespoons teriyaki sauce",
          "2 tablespoons honey",
          "4 cups chicken broth",
          "4 portions ramen noodles",
          "Sesame seeds"
        ],
        "steps": [
          "Glaze salmon fillets with teriyaki and honey, then bake until cooked.",
          "Heat chicken broth and cook ramen noodles separately.",
          "Assemble noodles, broth, and salmon in bowls.",
          "Top with sesame seeds."
        ],
        "pairings": {
          "drink": "Green tea lemonade",
          "music": "Lo-fi beats"
        }
      },
      {
        "id": 92,
        "name": "Harissa Salmon Ramen",
        "cuisine": "Mediterranean Fusion",
        "mainIngredient": "Salmon",
        "effortLevel": "Medium",
        "vibes": ["Zesty", "Bold"],
        "categories": ["fish", "spicy", "soup"],
        "date": "April 2",
        "description": "Bold salmon seasoned with spicy harissa served atop flavorful ramen broth.",
        "image": "assets/dishes/harissa-salmon.png",
        "haiku": "Harissa ignites—Salmon poised above the broth—Flavors swirl boldly",
        "ingredients": [
          "4 salmon fillets",
          "2 tablespoons harissa paste",
          "4 cups seafood broth",
          "4 portions ramen noodles",
          "Fresh cilantro"
        ],
        "steps": [
          "Coat salmon with harissa paste and sear or bake until cooked.",
          "Simmer seafood broth and cook ramen noodles separately.",
          "Assemble salmon, noodles, and broth in bowls.",
          "Garnish with fresh cilantro."
        ],
        "pairings": {
          "drink": "Sparkling water with lime",
          "music": "Mediterranean chill"
        }
      },
      {
        "id": 93,
        "name": "Hawaiian Garlic White Fish Ramen",
        "cuisine": "Hawaiian-Japanese Fusion",
        "mainIngredient": "White Fish",
        "effortLevel": "Easy",
        "vibes": ["Tropical", "Garlicky"],
        "categories": ["fish", "garlicky", "soup"],
        "date": "April 3",
        "description": "White fish sautéed Hawaiian-style with garlic butter, served with ramen noodles.",
        "image": "assets/dishes/hawaiian-garlic-white-fish.png",
        "haiku": "Garlic whispers breeze—White fish swims in buttery broth—Island in a bowl",
        "ingredients": [
          "4 white fish fillets",
          "4 tablespoons garlic butter",
          "4 cups chicken broth",
          "4 portions ramen noodles",
          "Green onions"
        ],
        "steps": [
          "Sauté fish fillets in garlic butter until cooked.",
          "Heat chicken broth and cook ramen noodles separately.",
          "Combine noodles, broth, and fish in bowls.",
          "Top with sliced green onions."
        ],
        "pairings": {
          "drink": "Pineapple iced tea",
          "music": "Island acoustic"
        }
      },
    {
      "id": 94,
      "name": "Surf and Turf Ramen",
      "cuisine": "American-Japanese Fusion",
      "mainIngredient": "Beef & Shellfish",
      "effortLevel": "Hard",
      "vibes": ["Decadent", "Savory"],
      "categories": ["shellfish", "beef", "soup"],
      "date": "April 4",
      "description": "Tender filet mignon slices and sautéed shrimp in a rich miso-garlic broth with umami depth.",
      "image": "assets/dishes/surf-and-turf-ramen.png",
      "haiku": "Land and sea unite—Beef cradles ocean’s bounty—Broth sings harmony",
      "ingredients": [
        "4 cups beef broth",
        "2 tablespoons white miso",
        "1 tablespoon sesame oil",
        "2 cloves garlic, minced",
        "4 portions ramen noodles",
        "8 oz shrimp, peeled & deveined",
        "6 oz filet mignon, thinly sliced",
        "Green onions, sliced",
        "Sesame seeds"
      ],
      "steps": [
        "Warm broth with miso, sesame oil, and garlic; simmer 5 minutes.",
        "Quick-sear shrimp until just pink; set aside.",
        "Flash-sear beef slices in hot pan; reserve.",
        "Cook noodles per package; divide among bowls.",
        "Ladle broth over noodles; top with beef, shrimp, green onions, and sesame seeds."
      ],
      "pairings": {
        "drink": "Robust red wine",
        "music": "Smooth jazz"
      }
    },
    {
      "id": 95,
      "name": "Tuna Ramen Casserole",
      "cuisine": "Comfort Fusion",
      "mainIngredient": "Fish",
      "effortLevel": "Medium",
      "vibes": ["Hearty", "Nostalgic"],
      "categories": ["fish", "soup"],
      "date": "April 5",
      "description": "Creamy tuna noodle bake reimagined with ramen, peas, diced carrots, and melted cheese topping.",
      "image": "assets/dishes/tuna-ramen-casserole.png",
      "haiku": "Golden cheese blanket—Tuna and noodles embraced—Warmth in every bite",
      "ingredients": [
        "4 portions ramen noodles, cooked & drained",
        "1 can tuna, drained",
        "1 cup frozen peas & carrots",
        "1 cup milk",
        "2 tablespoons butter",
        "2 tablespoons flour",
        "1 cup shredded cheddar",
        "Salt & pepper"
      ],
      "steps": [
        "Make roux: melt butter, whisk in flour, cook 1 min.",
        "Slowly add milk, whisk until thickened.",
        "Stir in tuna, peas & carrots; season.",
        "Fold in noodles; transfer to baking dish.",
        "Top with cheddar; bake at 375°F until golden."
      ],
      "pairings": {
        "drink": "Crisp white wine",
        "music": "Classic rock soft hits"
      }
    },
    {
      "id": 96,
      "name": "Sriracha Tuna Ramen",
      "cuisine": "Spicy Fusion",
      "mainIngredient": "Fish",
      "effortLevel": "Easy",
      "vibes": ["Fiery", "Bold"],
      "categories": ["fish", "spicy", "soup"],
      "date": "April 6",
      "description": "Flaked seared tuna in a spicy sriracha-soy broth with ramen noodles and fresh cilantro garnish.",
      "image": "assets/dishes/sriracha-tuna-ramen.png",
      "haiku": "Red heat wraps the fish—Noodles glide through spice and soul—Cilantro cools flame",
      "ingredients": [
        "4 cups chicken or fish broth",
        "2 tablespoons sriracha",
        "1 tablespoon soy sauce",
        "4 portions ramen noodles",
        "8 oz tuna steak, seared & sliced",
        "1 tablespoon sesame oil",
        "Cilantro",
        "Lime wedges"
      ],
      "steps": [
        "Simmer broth with sriracha and soy for 5 minutes.",
        "Cook noodles; divide between bowls.",
        "Place tuna slices atop noodles; pour hot broth.",
        "Garnish with cilantro and lime wedge."
      ],
      "pairings": {
        "drink": "Iced green tea",
        "music": "Upbeat electronic"
      }
    },
    {
      "id": 97,
      "name": "Spicy Tuna Roll Ramen",
      "cuisine": "Japanese Fusion",
      "mainIngredient": "Fish",
      "effortLevel": "Medium",
      "vibes": ["Creative", "Umami"],
      "categories": ["fish", "soup"],
      "date": "April 7",
      "description": "All the elements of a spicy tuna roll—tuna, avocado, nori crisp—melded into a rich ramen soup.",
      "image": "assets/dishes/spicy-tuna-roll-ramen.png",
      "haiku": "Sea meets the spice roll—Avocado whispers cool—Broth holds it all close",
      "ingredients": [
        "4 portions ramen noodles",
        "8 oz sushi-grade tuna, chopped",
        "2 tablespoons mayo",
        "1 tablespoon sriracha",
        "1 avocado, diced",
        "2 sheets nori, toasted & shredded",
        "4 cups dashi broth",
        "Green onions"
      ],
      "steps": [
        "Mix tuna with mayo and sriracha; chill.",
        "Heat dashi; cook noodles; divide.",
        "Ladle broth; top with tuna, avocado, nori, green onions."
      ],
      "pairings": {
        "drink": "Chilled sake",
        "music": "Lofi hip hop"
      }
    },
    {
      "id": 98,
      "name": "Philadelphia Roll Ramen",
      "cuisine": "Japanese-American Fusion",
      "mainIngredient": "Fish & Cheese",
      "effortLevel": "Medium",
      "vibes": ["Creamy", "Savory"],
      "categories": ["fish", "cheesey", "soup"],
      "date": "April 8",
      "description": "Smoked salmon, cream cheese, and cucumber ribbons in a lemon-y ramen broth—Philly roll in bowl form.",
      "image": "assets/dishes/philadelphia-roll-ramen.png",
      "haiku": "Salmon drifts in cream—Cucumber swirls with brightness—Broth ties quietly",
      "ingredients": [
        "4 cups chicken broth",
        "1 tablespoon lemon juice",
        "4 portions ramen noodles",
        "4 oz smoked salmon, thinly sliced",
        "2 oz cream cheese, dolloped",
        "1/2 cucumber, ribboned",
        "Chives"
      ],
      "steps": [
        "Warm broth with lemon juice; simmer 2 minutes.",
        "Cook noodles; place in bowls.",
        "Arrange salmon, cream cheese, cucumber; ladle broth.",
        "Garnish with chives."
      ],
      "pairings": {
        "drink": "Sparkling water",
        "music": "Chill lounge"
      }
    },
    {
      "id": 99,
      "name": "Tuna and Pomegranate Ramen",
      "cuisine": "Healthy Fusion",
      "mainIngredient": "Fish & Fruit",
      "effortLevel": "Easy",
      "vibes": ["Bright", "Refreshing"],
      "categories": ["fish", "fruit", "soup"],
      "date": "April 9",
      "description": "Seared tuna cubes and jewel-like pomegranate seeds in a light miso-ginger ramen broth.",
      "image": "assets/dishes/tuna-pomegranate-ramen.png",
      "haiku": "Rubies float and gleam—Tuna warms the golden broth—Sparkle and savor",
      "ingredients": [
        "4 cups vegetable broth",
        "1 tablespoon white miso",
        "1 teaspoon grated ginger",
        "4 portions ramen noodles",
        "6 oz tuna, cubed & seared",
        "1/4 cup pomegranate seeds",
        "Green onions"
      ],
      "steps": [
        "Dissolve miso and ginger in broth; simmer 3 minutes.",
        "Cook noodles; divide bowls.",
        "Top with tuna and pomegranate; ladle broth; garnish."
      ],
      "pairings": {
        "drink": "Sparkling pomegranate juice",
        "music": "Light indie pop"
      }
    },
    {
      "id": 100,
      "name": "Blackened Salmon Ramen",
      "cuisine": "Cajun-Japanese Fusion",
      "mainIngredient": "Fish",
      "effortLevel": "Medium",
      "vibes": ["Spicy", "Smoky"],
      "categories": ["fish", "spicy", "soup"],
      "date": "April 10",
      "description": "Blackened salmon fillet on top of a creamy coconut-curry ramen broth with a hint of cayenne.",
      "image": "assets/dishes/blackened-salmon-ramen.png",
      "haiku": "Charred spice whispers—Salmon crowns the curry waves—Heat ripples softly",
      "ingredients": [
        "4 cups coconut milk broth",
        "2 tablespoons red curry paste",
        "4 portions ramen noodles",
        "6 oz salmon, blackened seasoning & seared",
        "1 teaspoon cayenne",
        "Lime wedges",
        "Cilantro"
      ],
      "steps": [
        "Simmer coconut broth with curry paste and cayenne 5 minutes.",
        "Cook noodles; place in bowls.",
        "Lay salmon atop; pour broth; garnish with lime and cilantro."
      ],
      "pairings": {
        "drink": "Chilled lager",
        "music": "Fusion jazz"
      }
    },
    {
      "id": 101,
      "name": "Blackened White Fish Ramen",
      "cuisine": "Caribbean-Japanese Fusion",
      "mainIngredient": "Fish",
      "effortLevel": "Medium",
      "vibes": ["Bold", "Tropical"],
      "categories": ["fish", "spicy", "soup"],
      "date": "April 11",
      "description": "Flaky white fish fillet in a spicy coconut-lime broth with blackened crust and fresh basil.",
      "image": "assets/dishes/blackened-white-fish-ramen.png",
      "haiku": "Spice coats pearl fillets—Coconut lime sings in broth—Basil breathes relief",
      "ingredients": [
        "4 cups coconut broth",
        "1 tablespoon lime juice",
        "4 portions ramen noodles",
        "6 oz white fish, blackened & seared",
        "1 teaspoon jerk seasoning",
        "Fresh basil leaves"
      ],
      "steps": [
        "Mix broth with lime juice; simmer 3 minutes.",
        "Cook noodles; divide bowls.",
        "Add fish; pour broth; top with basil."
      ],
      "pairings": {
        "drink": "Rum punch mocktail",
        "music": "Island reggae"
      }
    }
  ],
  
  // Challenge collections
  challenges: [
    {
      "id": 1,
      "name": "Cold Ramen Week",
      "description": "Beat the heat with refreshing cold ramen variations perfect for summer days.",
      "image": "assets/challenges/cold-challenge.png",
      "dishes": [6] // IDs of dishes in this challenge
    },
    {
      "id": 2,
      "name": "Fusion Explosion",
      "description": "Experience boundary-pushing ramen that combines culinary traditions from around the world.",
      "image": "assets/challenges/fusion-challenge.png",
      "dishes": [3, 7, 8, 9, 10] // IDs of dishes in this challenge
    },
    {
      "id": 3,
      "name": "Mushroom March",
      "description": "Celebrate the earthy, umami goodness of mushrooms in these fungi-focused ramen bowls.",
      "image": "assets/challenges/mushroom-challenge.png",
      "dishes": [8] // IDs of dishes in this challenge
    },
    {
      "id": 4,
      "name": "Spice Journey",
      "description": "Turn up the heat with these spicy ramen variations that will make you sweat in the best way.",
      "image": "assets/challenges/spice-challenge.png",
      "dishes": [2, 5, 7] // IDs of dishes in this challenge
    }
  ],
  
  // Matrix data
 "cuisines": [
    "American",
    "Chinese",
    "French",
    "Hawaiian",
    "Indian",
    "Italian",
    "Japanese",
    "Korean",
    "Mexican",
    "Portuguese",
    "Southwestern",
    "Thai",
    "Vietnamese",
    "Vegetarian",
    "Health",
    "Experimental"
  ],
  "ingredients": [
    "Beef",
    "Buckwheat",
    "Chicken",
    "Chocolate",
    "Coconut",
    "Egg",
    "Fish",
    "Seafood",
    "Kimchi",
    "Mushroom",
    "Peanut Butter",
    "Pork",
    "Ramen",
    "Shrimp",
    "Spinach",
    "Tofu",
    "Vegetable"
  ],
  "categories": [
    "vegetables",
    "turkey",
    "shellfish",
    "cheesey",
    "curry",
    "stir fry",
    "dessert",
    "salad",
    "soup",
    "cups",
    "sandwiches",
    "hot pot"
  ],
  
  // Helper function to get today's ramen
  getTodaysRamen: function() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    return this.dishes[dayOfYear % this.dishes.length];
  },
  
  // Helper function to get random ramen
  getRandomRamen: function() {
    return this.dishes[Math.floor(Math.random() * this.dishes.length)];
  },
  
  // Helper function to get dishes by cuisine and ingredient
  getDishesByCuisineAndIngredient: function(cuisine, ingredient) {
    return this.dishes.filter(dish =>
      dish.cuisine.includes(cuisine) && dish.mainIngredient === ingredient
    );
  },
  
  // Helper function to get dishes by category
  getDishesByCategory: function(category) {
    return this.dishes.filter(dish =>
      dish.categories && dish.categories.includes(category)
    );
  },
  
  // Helper function to get dishes by challenge
  getDishesByChallenge: function(challengeId) {
    const challenge = this.challenges.find(c => c.id === challengeId);
    if (!challenge) return [];
    return challenge.dishes.map(id => this.dishes.find(dish => dish.id === id));
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ramenData;
}