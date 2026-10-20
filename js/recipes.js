let recipes =
JSON.parse(localStorage.getItem("recipes")) || [];

function saveRecipe() {

    const name =
        document.getElementById("recipeName").value;

    const category =
        document.getElementById("recipeCategory").value;

    if(name==="") return;

    recipes.push({
        id: Date.now(),
        name: name,
        category: category
    });

    localStorage.setItem(
        "recipes",
        JSON.stringify(recipes)
    );

    renderRecipes();
}

function renderRecipes() {

    const list =
        document.getElementById("recipeList");

    if(!list) return;

    list.innerHTML="";

    recipes.forEach(recipe => {

        list.innerHTML += `
        <div class="card">
            <strong>${recipe.name}</strong><br>
            ${recipe.category}
        </div>
        `;

    });

}

document.addEventListener(
    "DOMContentLoaded",
    renderRecipes
);
