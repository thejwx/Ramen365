# Ramen365

A stylish, mobile-first website featuring one unique ramen dish per day, organized using a cuisine × main ingredient matrix. The tone is fun, quirky, and design-forward—like a ramen zine meets a digital playground.

## Features

### 1. Homepage (Daily Bowl Focus)
- Hero section with today's ramen dish
- Short context box (haiku, fun fact, or vignette)
- Tags: ingredient, cuisine, effort level, vibe
- Buttons: "Explore Matrix", "Random Bowl", "See All Challenges"
- Sticky footer nav: Home, Matrix, Challenges, Saved

### 2. Matrix Explorer Page
- Interactive grid of cuisines × ingredients
- Click a cell to view all ramen in that pairing
- Each cell shows how many dishes exist (e.g., "3/10")

### 3. Challenge Page
- Rotating themed collections (e.g., "Cold Ramen Week", "Mushroom March")
- Each challenge shows a summary, visual, and linked recipes

### 4. Single Recipe Page
- Compact, scannable recipe layout
- No personal story block
- Context tile (haiku/fact)
- Topping/ingredient suggestions
- Vibe tags and optional music or drink pairing

## Design Style
- Clean layout with playful typography
- Visual cues for "fun but focused" (bold color blocks, hand-drawn icons, microinteractions)
- Mobile-first layout with full responsiveness

## Project Structure

```
ramen-365/
├── index.html           # Homepage
├── matrix.html          # Matrix Explorer page
├── challenges.html      # Challenges page
├── recipe.html          # Single Recipe page
├── filtered.html        # Filtered results page
├── css/
│   └── styles.css       # Main stylesheet
├── js/
│   ├── data.js          # Ramen dish data
│   └── main.js          # Main JavaScript functionality
└── assets/              # Images and other assets
    ├── dishes/          # Ramen dish images
    ├── challenges/      # Challenge images
    ├── icons/           # Icons and UI elements
    └── README.md        # Instructions for adding images
```

## Getting Started

1. Clone this repository
2. Open `index.html` in your browser to view the website
3. Add your own images to the appropriate subdirectories:
   - Ramen dish images go in `assets/dishes/` (e.g., `tonkotsu.jpg`)
   - Challenge images go in `assets/challenges/` (e.g., `cold-challenge.jpg`)
   - UI icons go in `assets/icons/`
   - See `assets/README.md` for a complete list of required image filenames

## Features to Add in the Future

- User accounts and saved recipes
- User submissions
- Commenting system
- Rating system
- Search functionality
- Filtering by tags
- More advanced matrix visualization
- Print-friendly recipe pages

## Technologies Used

- HTML5
- CSS3 (with CSS variables for theming)
- JavaScript (vanilla, no frameworks)
- Mobile-first responsive design
- Font Awesome icons

## Credits

- Fonts: Google Fonts (Poppins and Space Mono)
- Icons: Font Awesome
- Placeholder Images: placehold.co

## License

This project is available for personal and educational use.