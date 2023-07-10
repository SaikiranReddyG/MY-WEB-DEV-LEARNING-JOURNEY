const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const recipeListEl = document.getElementById("recipe.list");

function displayRecipes(recipes) {
    recipeListEl.innerHTML= "";
    /*innerHTML-- property of an HTML element htat allow access to modify HTML content
                provieds a way to maipulate the content of an element directly from JS code */
    recipes.forEach((recipe) => {
        /*
         foreach--higher order fuction that allows to iterate over elements of an array/object and perform
         a specified operation on each element
         provides a simpler and concise way to loop through elements 
         */
        
        const recipeItemEL = document.createElement("li");
        /* createElement--used to dynamically create HTML element */
        recipeItemEL.classList.add("recipe-item");
        /* classList---manipulate the classnames of an HTML element by add, remove, toggle etc.  */

        const recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe-image";

        const recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = recipe.title;

        const recipeIngredientsEl = document.createElement("p");
        recipeIngredientsEl.innerHTML = `
        <strong>ingredients:</strong>
        ${recipe.extendedingredients
        .map((ingredient) => ingredient.orignal).join(",")} `;
        /* (` `)-- used to define tamplate literals, that are way to create strings that can span multiple lines and 
        contain place holders for embedding expressions0 */

        /* (=>)--called arrow function or fat arrow function, it provides a expressive way to define functions   */

        const recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "view-recipe";

        recipeItemEL.appendChild(recipeImageEl);
        recipeItemEL.appendChild(recipeTitleEl);
        recipeItemEL.appendChild(recipeIngredientsEl);
        recipeItemEL.appendChild(recipeLinkEl);
        recipeItemEL.appendChild(recipeItemEL);

        /* appendchild-- used to add new child node to an existing parent node
        allow to dynamically insert or append an HTML element as a child node as a child of another element */
    });
}

async function getRecipes() {
    const response = await fetch (
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
    );

    const data = await response.json();
    return data.recipe;
}

async function init() {
    const recipes = await getRecipes();
    displayRecipes(recipes);
}

init();