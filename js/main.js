// Ramen365 - Main JavaScript File

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the page based on the current URL
  initPage();
  
  // Set up navigation event listeners
  setupNavigation();
  
  // Set up random button
  setupRandomButton();
});

// Initialize the page based on current URL
function initPage() {
  const path = window.location.pathname;
  
  // Remove active class from all nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Set active nav item and initialize page content
  if (path.includes('matrix.html')) {
    document.querySelector('.nav-item[data-page="matrix"]').classList.add('active');
    initMatrixPage();
  } else if (path.includes('categories.html')) {
    document.querySelector('.nav-item[data-page="categories"]').classList.add('active');
    // Store the fact that we're on the categories page
    sessionStorage.setItem('lastVisitedPage', 'categories');
    initCategoriesPage();
  } else if (path.includes('challenges.html')) {
    document.querySelector('.nav-item[data-page="challenges"]').classList.add('active');
    initChallengePage();
  } else if (path.includes('recipe.html')) {
    document.querySelector('.nav-item[data-page="home"]').classList.add('active');
    // Store the previous page to help with back navigation
    if (!sessionStorage.getItem('lastVisitedPage')) {
      sessionStorage.setItem('lastVisitedPage', 'recipe');
    }
    initRecipePage();
  } else {
    // Default to home page
    document.querySelector('.nav-item[data-page="home"]').classList.add('active');
    initHomePage();
  }
}

// Set up navigation event listeners
function setupNavigation() {
  // Header navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
      const page = this.getAttribute('data-page');
      navigateTo(page);
    });
  });
  
  // Action buttons
  document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const action = this.getAttribute('data-action');
      handleAction(action);
    });
  });
}

// Navigate to a specific page
function navigateTo(page) {
  switch(page) {
    case 'home':
      window.location.href = 'index.html';
      break;
    case 'matrix':
      window.location.href = 'matrix.html';
      break;
    case 'categories':
      window.location.href = 'categories.html';
      break;
    case 'challenges':
      window.location.href = 'challenges.html';
      break;
    case 'saved':
      // For future implementation
      alert('Saved recipes feature coming soon!');
      break;
    default:
      window.location.href = 'index.html';
  }
}

// Handle action button clicks
function handleAction(action) {
  switch(action) {
    case 'explore-matrix':
      navigateTo('matrix');
      break;
    case 'explore-categories':
      navigateTo('categories');
      break;
    case 'random-bowl':
      const randomRamen = ramenData.getRandomRamen();
      window.location.href = `recipe.html?id=${randomRamen.id}`;
      break;
    case 'see-challenges':
      navigateTo('challenges');
      break;
  }
}

// Set up random button
function setupRandomButton() {
  const randomButton = document.querySelector('.random-button');
  if (randomButton) {
    randomButton.addEventListener('click', function() {
      const randomRamen = ramenData.getRandomRamen();
      window.location.href = `recipe.html?id=${randomRamen.id}`;
    });
  }
}

// Initialize Home Page
function initHomePage() {
  const todaysRamen = ramenData.getTodaysRamen();
  
  // Update hero section
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroImg = document.querySelector('.hero-img');
  
  if (heroTitle) heroTitle.textContent = todaysRamen.name;
  if (heroSubtitle) heroSubtitle.textContent = todaysRamen.description;
  if (heroImg) {
    heroImg.src = todaysRamen.image;
    heroImg.alt = `${todaysRamen.name} - Today's Ramen`;
  }
  
  // Update context box
  const contextHaiku = document.querySelector('.context-haiku');
  if (contextHaiku) contextHaiku.textContent = todaysRamen.haiku;
  
  // Update tags
  const tagsContainer = document.querySelector('.tags');
  if (tagsContainer) {
    // Clear existing tags
    tagsContainer.innerHTML = '';
    
    // Add cuisine tag
    const cuisineTag = document.createElement('span');
    cuisineTag.className = 'tag tag-cuisine';
    cuisineTag.innerHTML = `<i class="fas fa-globe"></i> ${todaysRamen.cuisine}`;
    tagsContainer.appendChild(cuisineTag);
    
    // Add categories tags
    todaysRamen.categories.forEach(category => {
      const categoryTag = document.createElement('span');
      categoryTag.className = 'tag tag-category';
      categoryTag.innerHTML = `<i class="fas fa-tag"></i> ${category}`;
      tagsContainer.appendChild(categoryTag);
    });
    
    // Add effort tag
    const effortTag = document.createElement('span');
    effortTag.className = 'tag tag-effort';
    effortTag.innerHTML = `<i class="fas fa-clock"></i> ${todaysRamen.effortLevel}`;
    tagsContainer.appendChild(effortTag);
    
    // Add vibe tags
    todaysRamen.vibes.forEach(vibe => {
      const vibeTag = document.createElement('span');
      vibeTag.className = 'tag tag-vibe';
      vibeTag.innerHTML = `<i class="fas fa-music"></i> ${vibe}`;
      tagsContainer.appendChild(vibeTag);
    });
  }
  
  // Set up "View Recipe" button
  const viewRecipeBtn = document.querySelector('.view-recipe-btn');
  if (viewRecipeBtn) {
    viewRecipeBtn.addEventListener('click', function() {
      window.location.href = `recipe.html?id=${todaysRamen.id}`;
    });
  }
}

// Initialize Matrix Page
function initMatrixPage() {
  const matrixGrid = document.querySelector('.matrix-grid');
  if (!matrixGrid) return;
  
  // Clear existing grid
  matrixGrid.innerHTML = '';
  
  // Add empty top-left cell
  const emptyCell = document.createElement('div');
  emptyCell.className = 'matrix-header';
  matrixGrid.appendChild(emptyCell);
  
  // Add cuisine headers
  ramenData.cuisines.forEach(cuisine => {
    const cuisineHeader = document.createElement('div');
    cuisineHeader.className = 'matrix-header';
    cuisineHeader.textContent = cuisine.split('-')[0]; // Show only the first part of fusion cuisines
    matrixGrid.appendChild(cuisineHeader);
  });
  
  // Add rows for each ingredient
  ramenData.ingredients.forEach(ingredient => {
    // Add ingredient header
    const ingredientHeader = document.createElement('div');
    ingredientHeader.className = 'matrix-header';
    ingredientHeader.textContent = ingredient;
    matrixGrid.appendChild(ingredientHeader);
    
    // Add cells for each cuisine x ingredient combination
    ramenData.cuisines.forEach(cuisine => {
      const dishes = ramenData.getDishesByCuisineAndIngredient(cuisine, ingredient);
      const cell = document.createElement('div');
      cell.className = 'matrix-cell';
      
      if (dishes.length > 0) {
        cell.innerHTML = `<span class="matrix-cell-count">${dishes.length}/10</span>`;
        cell.addEventListener('click', function() {
          // Store selected dishes in sessionStorage and navigate to a filtered view
          sessionStorage.setItem('filteredDishes', JSON.stringify(dishes));
          window.location.href = 'filtered.html';
        });
      } else {
        cell.innerHTML = '<span class="matrix-cell-count">0/10</span>';
        cell.style.opacity = '0.5';
      }
      
      matrixGrid.appendChild(cell);
    });
  });
}

// Initialize Challenge Page
function initChallengePage() {
  const challengeGrid = document.querySelector('.challenge-grid');
  if (!challengeGrid) return;
  
  // Clear existing challenges
  challengeGrid.innerHTML = '';
  
  // Add challenge cards
  ramenData.challenges.forEach(challenge => {
    const card = document.createElement('div');
    card.className = 'challenge-card';
    card.innerHTML = `
      <img src="${challenge.image}" alt="${challenge.name} Challenge" class="challenge-img">
      <div class="challenge-content">
        <h3 class="challenge-title">${challenge.name}</h3>
        <p class="challenge-desc">${challenge.description}</p>
        <div class="challenge-count">${challenge.dishes.length} Recipes</div>
        <button class="btn btn-secondary view-challenge-btn" data-id="${challenge.id}">View Challenge</button>
      </div>
    `;
    challengeGrid.appendChild(card);
  });
  
  // Add event listeners to challenge buttons
  document.querySelectorAll('.view-challenge-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const challengeId = parseInt(this.getAttribute('data-id'));
      const dishes = ramenData.getDishesByChallenge(challengeId);
      
      // Store selected dishes in sessionStorage and navigate to a filtered view
      sessionStorage.setItem('filteredDishes', JSON.stringify(dishes));
      sessionStorage.setItem('filterTitle', ramenData.challenges.find(c => c.id === challengeId).name);
      window.location.href = 'filtered.html';
    });
  });
}

// Initialize Recipe Page
function initRecipePage(recipeId = null) {
  let currentRecipeId = recipeId;

  // If no ID provided, get recipe ID from URL
  if (currentRecipeId === null) {
    const urlParams = new URLSearchParams(window.location.search);
    currentRecipeId = parseInt(urlParams.get('id'));
  }

  // If no ID provided, redirect to home
  if (!currentRecipeId) {
    window.location.href = 'index.html';
    return;
  }
  
  // Find the recipe
  const recipe = ramenData.dishes.find(dish => dish.id === currentRecipeId);
  if (!recipe) {
    window.location.href = 'index.html';
    return;
  }

  // --- Recipe Navigation Buttons Logic ---
  // Helper to parse "Month Day" to day-of-year
  function getDayOfYear(dateStr) {
    const [month, day] = dateStr.split(' ');
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const monthIndex = months.indexOf(month);
    if (monthIndex === -1) return 0;
    const d = new Date(2001, monthIndex, parseInt(day)); // 2001 is a non-leap year
    return Math.floor((d - new Date(2001, 0, 0)) / (1000 * 60 * 60 * 24));
  }

  // Sort dishes by date (day-of-year)
  const sortedDishes = [...ramenData.dishes].sort((a, b) => getDayOfYear(a.date) - getDayOfYear(b.date));
  const currentIndex = sortedDishes.findIndex(d => d.id === recipe.id);
  const prevIndex = (currentIndex - 1 + sortedDishes.length) % sortedDishes.length;
  const nextIndex = (currentIndex + 1) % sortedDishes.length;
  const prevId = sortedDishes[prevIndex].id;
  const nextId = sortedDishes[nextIndex].id;

  // Set up navigation button handlers
  const prevBtn = document.querySelector('.prev-recipe-btn');
  const nextBtn = document.querySelector('.next-recipe-btn');
  if (prevBtn) {
    prevBtn.onclick = () => window.location.href = `recipe.html?id=${prevId}`;
  }
  if (nextBtn) {
    nextBtn.onclick = () => window.location.href = `recipe.html?id=${nextId}`;
  }
  // --- End Recipe Navigation Buttons Logic ---

  // Update page title
  document.title = `${recipe.name} | Ramen365`;
  
  // Update recipe header
  const recipeTitle = document.querySelector('.recipe-title');
  const recipeDate = document.querySelector('.recipe-date');
  const recipeImg = document.querySelector('.recipe-img');
  
  if (recipeTitle) recipeTitle.textContent = recipe.name;
  if (recipeDate) recipeDate.textContent = recipe.date;
  if (recipeImg) {
    recipeImg.src = recipe.image;
    recipeImg.alt = recipe.name;
  }
  
  // Update recipe description
  const recipeDescription = document.querySelector('.recipe-section p');
  if (recipeDescription) recipeDescription.textContent = recipe.description;
  
  // Update context box
  const contextHaiku = document.querySelector('.context-haiku');
  if (contextHaiku) contextHaiku.textContent = recipe.haiku;
  
  // Update tags
  const tagsContainer = document.querySelector('.tags');
  if (tagsContainer) {
    // Clear existing tags
    tagsContainer.innerHTML = '';
    
    // Add cuisine tag
    const cuisineTag = document.createElement('span');
    cuisineTag.className = 'tag tag-cuisine';
    cuisineTag.innerHTML = `<i class="fas fa-globe"></i> ${recipe.cuisine}`;
    tagsContainer.appendChild(cuisineTag);
    
    // Add categories tags
    recipe.categories.forEach(category => {
      const categoryTag = document.createElement('span');
      categoryTag.className = 'tag tag-category';
      categoryTag.innerHTML = `<i class="fas fa-tag"></i> ${category}`;
      tagsContainer.appendChild(categoryTag);
    });
    
    // Add effort tag
    const effortTag = document.createElement('span');
    effortTag.className = 'tag tag-effort';
    effortTag.innerHTML = `<i class="fas fa-clock"></i> ${recipe.effortLevel}`;
    tagsContainer.appendChild(effortTag);
    
    // Add vibe tags
    recipe.vibes.forEach(vibe => {
      const vibeTag = document.createElement('span');
      vibeTag.className = 'tag tag-vibe';
      vibeTag.innerHTML = `<i class="fas fa-music"></i> ${vibe}`;
      tagsContainer.appendChild(vibeTag);
    });
  }
  
  // Update ingredients list
  const ingredientsList = document.querySelector('.recipe-ingredients');
  if (ingredientsList) {
    // Clear existing ingredients
    ingredientsList.innerHTML = '';
    
    // Add each ingredient
    recipe.ingredients.forEach(ingredient => {
      const li = document.createElement('li');
      li.textContent = ingredient;
      ingredientsList.appendChild(li);
    });
  }
  
  // Update steps list
  const stepsList = document.querySelector('.recipe-steps');
  if (stepsList) {
    // Clear existing steps
    stepsList.innerHTML = '';
    
    // Add each step
    recipe.steps.forEach(step => {
      const li = document.createElement('li');
      li.textContent = step;
      stepsList.appendChild(li);
    });
  }
  
  // Update pairings
  const pairingSection = document.querySelector('.pairing-section');
  if (pairingSection && recipe.pairings) {
    // Clear existing pairings
    pairingSection.innerHTML = '';
    
    // Add drink pairing
    if (recipe.pairings.drink) {
      const drinkPairing = document.createElement('div');
      drinkPairing.className = 'pairing-item';
      drinkPairing.innerHTML = `
        <div class="pairing-icon"><i class="fas fa-martini-glass-citrus"></i></div>
        <div class="pairing-content">
          <div class="pairing-label">Drink</div>
          <div class="pairing-value">${recipe.pairings.drink}</div>
        </div>
      `;
      pairingSection.appendChild(drinkPairing);
    }
    
    // Add music pairing
    if (recipe.pairings.music) {
      const musicPairing = document.createElement('div');
      musicPairing.className = 'pairing-item';
      musicPairing.innerHTML = `
        <div class="pairing-icon"><i class="fas fa-music"></i></div>
        <div class="pairing-content">
          <div class="pairing-label">Music</div>
          <div class="pairing-value">${recipe.pairings.music}</div>
        </div>
      `;
      pairingSection.appendChild(musicPairing);
    }
  }
}

// Initialize Browse Recipes Page
function initCategoriesPage() {
  // Helper function to get icon class for a category
  function getIconClassForCategory(category) {
    switch(category) {
      case 'vegetables':
        return 'fa-carrot';
      case 'beef':
        return 'fa-cow';
      case 'pork':
        return 'fa-bacon';
      case 'chicken':
        return 'fa-drumstick-bite';
      case 'turkey':
        return 'fa-drumstick-bite';
      case 'shrimp':
        return 'fa-shrimp';
      case 'shellfish':
        return 'fa-shrimp';
      case 'fish':
        return 'fa-fish';
      case 'tofu':
        return 'fa-cube';
      case 'eggs':
        return 'fa-egg';
      case 'cheesey':
        return 'fa-cheese';
      case 'curry':
        return 'fa-pepper-hot';
      case 'stir fry':
        return 'fa-fire-burner';
      case 'dessert':
        return 'fa-ice-cream';
      case 'salad':
        return 'fa-leaf';
      case 'soup':
        return 'fa-spoon';
      case 'french':
        return 'fa-wine-glass';
      case 'mexican':
        return 'fa-pepper-hot';
      case 'italian':
        return 'fa-pizza-slice';
      case 'cups':
        return 'fa-mug-hot';
      case 'sandwiches':
        return 'fa-bread-slice';
      case 'hot pot':
        return 'fa-fire';
      default:
        return 'fa-utensils';
    }
  }
  
  // Helper function to create dish cards
  function createDishCards(dishes, container) {
    // If no dishes found, show a message
    if (dishes.length === 0) {
      const message = document.createElement('p');
      message.className = 'no-dishes-message';
      message.textContent = 'No recipes found matching your criteria.';
      container.appendChild(message);
      return;
    }
    
    // Create a grid for the dishes
    const dishGrid = document.createElement('div');
    dishGrid.className = 'dish-grid';
    container.appendChild(dishGrid);
    
    // Add dish cards
    dishes.forEach(dish => {
      const card = document.createElement('div');
      card.className = 'dish-card';
      card.dataset.id = dish.id;
      card.dataset.cuisine = dish.cuisine;
      card.dataset.mainIngredient = dish.mainIngredient;
      card.dataset.categories = dish.categories.join(' ');
      card.innerHTML = `
        <img src="${dish.image}" alt="${dish.name} Ramen" class="dish-img" data-id="${dish.id}">
        <div class="dish-content">
          <h3 class="dish-title">${dish.name}</h3>
          <p class="dish-desc">${dish.description}</p>
          <div class="tags">
            <span class="tag tag-cuisine"><i class="fas fa-globe"></i> ${dish.cuisine}</span>
            <span class="tag tag-ingredient"><i class="fas fa-carrot"></i> ${dish.mainIngredient}</span>
            <span class="tag tag-category"><i class="fas fa-tags"></i> ${dish.categories.join(', ')}</span>
          </div>
          <button class="btn view-recipe-btn" data-id="${dish.id}">View Recipe</button>
        </div>
      `;
      dishGrid.appendChild(card);
    });
    
    // Add event listeners to recipe buttons
    dishGrid.querySelectorAll('.view-recipe-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const dishId = parseInt(this.getAttribute('data-id'));
        // Save current scroll position before navigating
        sessionStorage.setItem('categoriesScrollPosition', window.scrollY);
        window.location.href = `recipe.html?id=${dishId}`;
      });
    });
    // Add event listeners to dish images to open the recipe
    dishGrid.querySelectorAll('.dish-img').forEach(img => {
      img.addEventListener('click', function() {
        const dishId = parseInt(this.getAttribute('data-id'));
        // Save current scroll position before navigating
        sessionStorage.setItem('categoriesScrollPosition', window.scrollY);
        window.location.href = `recipe.html?id=${dishId}`;
      });
    });
  }

  // Function to filter dishes based on selected filters
  function filterDishes() {
    // Get all active filters by type
    const activeCuisines = Array.from(document.querySelectorAll('.cuisine-filters .filter-tag.active'))
      .map(tag => tag.dataset.value);
    
    const activeIngredients = Array.from(document.querySelectorAll('.ingredient-filters .filter-tag.active'))
      .map(tag => tag.dataset.value);
    
    const activeCategories = Array.from(document.querySelectorAll('.category-filters .filter-tag.active'))
      .map(tag => tag.dataset.value);
    
    // Save active filters to sessionStorage
    sessionStorage.setItem('activeCuisines', JSON.stringify(activeCuisines));
    sessionStorage.setItem('activeIngredients', JSON.stringify(activeIngredients));
    sessionStorage.setItem('activeCategories', JSON.stringify(activeCategories));
    
    // Get all dishes
    let filteredDishes = [...ramenData.dishes];
    
    // If no filters are active, show all dishes
    if (activeCuisines.length === 0 && activeIngredients.length === 0 && activeCategories.length === 0) {
      // No filtering needed, show all dishes
    } else {
      // Apply filters using OR logic between different filter types
      // A dish matches if it matches ANY of the filter types that have active filters
      
      // Create arrays to hold dishes that match each filter type
      let cuisineMatches = [];
      let ingredientMatches = [];
      let categoryMatches = [];
      
      // Find dishes that match cuisine filters
      if (activeCuisines.length > 0) {
        cuisineMatches = filteredDishes.filter(dish =>
          activeCuisines.some(cuisine => dish.cuisine.includes(cuisine))
        );
      }
      
      // Find dishes that match ingredient filters
      if (activeIngredients.length > 0) {
        ingredientMatches = filteredDishes.filter(dish =>
          activeIngredients.includes(dish.mainIngredient)
        );
      }
      
      // Find dishes that match category filters
      if (activeCategories.length > 0) {
        categoryMatches = filteredDishes.filter(dish =>
          activeCategories.some(category => dish.categories.includes(category))
        );
      }
      
      // Combine all matches using OR logic (union of sets)
      // Start with an empty set
      filteredDishes = [];
      
      // Add all matches from each filter type
      filteredDishes = [
        ...cuisineMatches,
        ...ingredientMatches,
        ...categoryMatches
      ];
      
      // Remove duplicates by converting to a Set and back to an array
      filteredDishes = [...new Set(filteredDishes)];
    }
    
    // Get the dishes container and results counter
    const dishesContainer = document.querySelector('.dishes-container');
    const resultsCounter = document.querySelector('.results-counter');
    if (!dishesContainer) return;
    
    // Clear existing content
    dishesContainer.innerHTML = '';
    
    // Update results counter
    if (resultsCounter) {
      if (filteredDishes.length === ramenData.dishes.length) {
        resultsCounter.textContent = `Showing all ${filteredDishes.length} recipes`;
      } else {
        resultsCounter.textContent = `Found ${filteredDishes.length} recipes`;
      }
    }
    
    // Create dish cards with filtered dishes
    createDishCards(filteredDishes, dishesContainer);
  }
  
  // Helper function to create filter tags
  function createFilterTags(items, container, type) {
    items.forEach(item => {
      // Skip empty items
      if (!item) return;
      
      // Get icon class based on type
      let iconClass = 'fa-tag';
      if (type === 'cuisine') iconClass = 'fa-globe';
      else if (type === 'ingredient') iconClass = 'fa-carrot';
      else if (type === 'category') iconClass = getIconClassForCategory(item);
      
      // Create filter tag
      const filterTag = document.createElement('div');
      filterTag.className = 'filter-tag';
      filterTag.dataset.value = item;
      filterTag.dataset.type = type;
      filterTag.innerHTML = `<i class="fas ${iconClass}"></i> ${item.charAt(0).toUpperCase() + item.slice(1)} <span class="filter-indicator"><i class="fas fa-check"></i></span>`;
      
      // Add click event to toggle filter
      filterTag.addEventListener('click', function() {
        // Toggle active class
        this.classList.toggle('active');
        
        // Apply filtering
        filterDishes();
        
        // Update selected filters display
        updateSelectedFilters();
      });
      
      // Add filter tag to container
      container.appendChild(filterTag);
    });
  }
  
  // Get the filter containers
  const cuisineFiltersContainer = document.querySelector('.cuisine-filters');
  const ingredientFiltersContainer = document.querySelector('.ingredient-filters');
  const categoryFiltersContainer = document.querySelector('.category-filters');
  const dishesContainer = document.querySelector('.dishes-container');
  
  if (!cuisineFiltersContainer || !ingredientFiltersContainer || !categoryFiltersContainer || !dishesContainer) return;
  
  // Clear existing content
  cuisineFiltersContainer.innerHTML = '';
  ingredientFiltersContainer.innerHTML = '';
  categoryFiltersContainer.innerHTML = '';
  dishesContainer.innerHTML = '';
  
  // Use the predefined lists from ramenData
  const cuisines = ramenData.cuisines;
  const ingredients = ramenData.ingredients;
  const categories = ramenData.categories;
  
  // Create filter tags for each type
  createFilterTags(cuisines, cuisineFiltersContainer, 'cuisine');
  createFilterTags(ingredients, ingredientFiltersContainer, 'ingredient');
  createFilterTags(categories, categoryFiltersContainer, 'category');
  
  // Initially show all dishes
  createDishCards(ramenData.dishes, dishesContainer);
  
  // Initialize results counter
  const resultsCounter = document.querySelector('.results-counter');
  if (resultsCounter) {
    resultsCounter.textContent = `Showing all ${ramenData.dishes.length} recipes`;
  }
  
  // Set up filter collapse/expand functionality
  setupFilterToggle();
  
  // Restore filters from sessionStorage if available
  restoreFilters();
  
  // Start with filters collapsed by default, unless coming back from recipe page
  const collapseBtn = document.getElementById('collapse-filters');
  const referrer = document.referrer;
  const isFromRecipe = referrer && referrer.includes('recipe.html');
  
  if (collapseBtn && !isFromRecipe) {
    collapseBtn.click();
  }
  
  // Restore scroll position if coming back from recipe page
  if (isFromRecipe) {
    const savedScrollPosition = sessionStorage.getItem('categoriesScrollPosition');
    if (savedScrollPosition) {
      // Use setTimeout to ensure the page has fully loaded before scrolling
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition));
      }, 100);
    }
  }
  
  // Function to restore filters from sessionStorage
  function restoreFilters() {
    try {
      // Check if we're coming back from a recipe page
      const referrer = document.referrer;
      const isFromRecipe = referrer && referrer.includes('recipe.html');
      const filterSection = document.querySelector('.filter-section');
      const noFiltersMessage = document.querySelector('.no-filters-message');
      const clearAllBtn = document.getElementById('clear-all-filters');
      
      const activeCuisines = JSON.parse(sessionStorage.getItem('activeCuisines') || '[]');
      const activeIngredients = JSON.parse(sessionStorage.getItem('activeIngredients') || '[]');
      const activeCategories = JSON.parse(sessionStorage.getItem('activeCategories') || '[]');
      
      // Calculate total active filters
      const totalActiveFilters = activeCuisines.length + activeIngredients.length + activeCategories.length;
      
      // If no filters were saved, apply compact class and return early
      if (totalActiveFilters === 0) {
        if (filterSection) {
          filterSection.classList.add('compact');
        }
        if (noFiltersMessage) {
          noFiltersMessage.style.display = 'inline-block';
        }
        if (clearAllBtn) {
          clearAllBtn.style.display = 'none';
        }
        return;
      }
      
      // Remove compact class since we have active filters
      if (filterSection) {
        filterSection.classList.remove('compact');
      }
      if (noFiltersMessage) {
        noFiltersMessage.style.display = 'none';
      }
      
      // Show Clear All button if more than 1 filter is active
      if (clearAllBtn && totalActiveFilters > 1) {
        clearAllBtn.style.display = 'inline-flex';
      } else if (clearAllBtn) {
        clearAllBtn.style.display = 'none';
      }
      
      // Apply saved cuisine filters
      activeCuisines.forEach(cuisine => {
        const filterTag = document.querySelector(`.cuisine-filters .filter-tag[data-value="${cuisine}"]`);
        if (filterTag && !filterTag.classList.contains('active')) {
          filterTag.classList.add('active');
        }
      });
      
      // Apply saved ingredient filters
      activeIngredients.forEach(ingredient => {
        const filterTag = document.querySelector(`.ingredient-filters .filter-tag[data-value="${ingredient}"]`);
        if (filterTag && !filterTag.classList.contains('active')) {
          filterTag.classList.add('active');
        }
      });
      
      // Apply saved category filters
      activeCategories.forEach(category => {
        const filterTag = document.querySelector(`.category-filters .filter-tag[data-value="${category}"]`);
        if (filterTag && !filterTag.classList.contains('active')) {
          filterTag.classList.add('active');
        }
      });
      
      // Apply the filters to update the dish display
      filterDishes();
      
      // If we're coming back from a recipe page and have active filters,
      // make sure the filter view is properly displayed
      if (isFromRecipe && (activeCuisines.length > 0 || activeIngredients.length > 0 || activeCategories.length > 0)) {
        // Update the selected filters display
        updateSelectedFilters();
        
        // If filters are collapsed, make sure the selected filters are visible
        const filterContainer = document.querySelector('.filter-container');
        const selectedFilters = document.querySelector('.selected-filters');
        const collapseBtn = document.getElementById('collapse-filters');
        const expandBtn = document.getElementById('expand-filters');
        
        if (filterContainer && selectedFilters && collapseBtn && expandBtn) {
          if (filterContainer.style.display === 'none') {
            // Filters are collapsed, make sure selected filters are shown
            selectedFilters.style.display = 'block';
          }
        }
      }
    } catch (error) {
      console.error('Error restoring filters:', error);
    }
  }
  
  // Function to toggle between collapsed and expanded filter views
  function setupFilterToggle() {
    const collapseBtn = document.getElementById('collapse-filters');
    const expandBtn = document.getElementById('expand-filters');
    const clearAllBtn = document.getElementById('clear-all-filters');
    const filterContainer = document.querySelector('.filter-container');
    const filterSection = document.querySelector('.filter-section');
    const noFiltersMessage = document.querySelector('.no-filters-message');
    
    if (!collapseBtn || !expandBtn || !filterContainer || !filterSection || !noFiltersMessage) return;
    
    // Clear All Filters button
    if (clearAllBtn) {
      clearAllBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all filter tags
        document.querySelectorAll('.filter-tag.active').forEach(tag => {
          tag.classList.remove('active');
        });
        
        // Apply filtering to update the display
        filterDishes();
        
        // Update selected filters display
        updateSelectedFilters();
        
        // Hide the Clear All button
        this.style.display = 'none';
      });
    }
    
    // Collapse filters
    collapseBtn.addEventListener('click', function(e) {
      e.preventDefault();
      filterContainer.style.display = 'none';
      
      // Check if there are active filters
      const activeFilters = Array.from(document.querySelectorAll('.filter-tag.active'));
      if (activeFilters.length === 0) {
        filterSection.classList.add('compact');
        noFiltersMessage.style.display = 'inline-block';
      } else {
        noFiltersMessage.style.display = 'none';
      }
      
      collapseBtn.style.display = 'none';
      expandBtn.style.display = 'inline-block';
      
      updateSelectedFilters();
    });
    
    // Expand filters
    expandBtn.addEventListener('click', function(e) {
      e.preventDefault();
      filterContainer.style.display = 'flex';
      expandBtn.style.display = 'none';
      collapseBtn.style.display = 'inline-block';
      filterSection.classList.remove('compact');
    });
  }
  
  // Function to update the selected filters display
  function updateSelectedFilters() {
    const selectedFiltersInline = document.querySelector('.selected-filters-inline');
    const noFiltersMessage = document.querySelector('.no-filters-message');
    const filterSection = document.querySelector('.filter-section');
    const clearAllBtn = document.getElementById('clear-all-filters');
    
    if (!selectedFiltersInline || !noFiltersMessage || !filterSection) return;
    
    // Clear existing selected filters
    selectedFiltersInline.innerHTML = '';
    
    // Get all active filters
    const activeFilters = Array.from(document.querySelectorAll('.filter-tag.active'));
    
    // If no active filters, show the "All Recipes Shown" message and make the filter section compact
    if (activeFilters.length === 0) {
      noFiltersMessage.style.display = 'inline-block';
      filterSection.classList.add('compact');
      if (clearAllBtn) clearAllBtn.style.display = 'none';
      return;
    }
    
    // Hide the "All Recipes Shown" message and remove compact class
    noFiltersMessage.style.display = 'none';
    filterSection.classList.remove('compact');
    
    // Show the "Clear All" button if more than 1 filter is selected
    if (clearAllBtn) {
      clearAllBtn.style.display = activeFilters.length > 1 ? 'inline-flex' : 'none';
    }
    
    // Create a tag for each active filter
    activeFilters.forEach(filter => {
      const value = filter.dataset.value;
      const type = filter.dataset.type;
      
      // Get icon class based on type
      let iconClass = 'fa-tag';
      if (type === 'cuisine') iconClass = 'fa-globe';
      else if (type === 'ingredient') iconClass = 'fa-carrot';
      else if (type === 'category') iconClass = getIconClassForCategory(value);
      
      // Create selected filter tag
      const selectedTag = document.createElement('div');
      selectedTag.className = 'filter-tag active selected-filter-tag';
      selectedTag.dataset.value = value;
      selectedTag.dataset.type = type;
      selectedTag.innerHTML = `<i class="fas ${iconClass}"></i> ${value.charAt(0).toUpperCase() + value.slice(1)} <span class="filter-indicator"><i class="fas fa-times"></i></span>`;
      
      // Add click event to deselect filter
      selectedTag.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        
        // Remove this tag from the selected filters
        this.remove();
        
        // Find the corresponding filter tag in the expanded view and deselect it
        const originalFilter = document.querySelector(`.filter-tag[data-value="${value}"][data-type="${type}"]`);
        if (originalFilter && originalFilter.classList.contains('active')) {
          // Remove active class from the original filter
          originalFilter.classList.remove('active');
        }
        
        // Check if there are any selected filters left
        const selectedFilters = document.querySelectorAll('.selected-filter-tag');
        if (selectedFilters.length === 0) {
          // Show the "All Recipes Shown" message
          document.querySelector('.no-filters-message').style.display = 'inline-block';
        }
        
        // Hide Clear All button if only 1 filter remains
        const clearAllBtn = document.getElementById('clear-all-filters');
        if (clearAllBtn && selectedFilters.length <= 1) {
          clearAllBtn.style.display = 'none';
        }
        
        // Apply filtering
        filterDishes();
      });
      
      // Add selected filter tag to container
      selectedFiltersInline.appendChild(selectedTag);
    });
  }
}

// Initialize Filtered Page (for matrix and challenge results)
function initFilteredPage() {
  // Get filtered dishes from sessionStorage
  const filteredDishes = JSON.parse(sessionStorage.getItem('filteredDishes') || '[]');
  const filterTitle = sessionStorage.getItem('filterTitle') || 'Filtered Results';
  
  // Update page title
  const pageTitle = document.querySelector('.page-title');
  if (pageTitle) pageTitle.textContent = filterTitle;
  
  // Display filtered dishes
  const dishGrid = document.querySelector('.dish-grid');
  if (!dishGrid) return;
  
  // Clear existing dishes
  dishGrid.innerHTML = '';
  
  // Add dish cards
  filteredDishes.forEach(dish => {
    const card = document.createElement('div');
    card.className = 'dish-card';
    card.innerHTML = `
      <img src="${dish.image}" alt="${dish.name} Ramen" class="dish-img" data-id="${dish.id}">
      <div class="dish-content">
        <h3 class="dish-title">${dish.name}</h3>
        <p class="dish-desc">${dish.description}</p>
        <div class="tags">
          <span class="tag tag-cuisine"><i class="fas fa-globe"></i> ${dish.cuisine}</span>
          <span class="tag tag-category"><i class="fas fa-tags"></i> ${dish.categories.join(', ')}</span>
        </div>
        <button class="btn view-recipe-btn" data-id="${dish.id}">View Recipe</button>
      </div>
    `;
    dishGrid.appendChild(card);
  });
  
  // Add event listeners to recipe buttons
  document.querySelectorAll('.view-recipe-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const dishId = parseInt(this.getAttribute('data-id'));
      window.location.href = `recipe.html?id=${dishId}`;
    });
  });
  // Add event listeners to dish images to open the recipe
  document.querySelectorAll('.dish-img').forEach(img => {
    img.addEventListener('click', function() {
      const dishId = parseInt(this.getAttribute('data-id'));
      window.location.href = `recipe.html?id=${dishId}`;
    });
  });
}