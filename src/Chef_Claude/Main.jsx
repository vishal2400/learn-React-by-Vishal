import React from "react"

export default function Main(){
    const [ingredients, setIngredients] = React.useState([])

    const ingredientList = ingredients.map((ingredient, index) => (
        <li key = {index}> {ingredient} </li>
    ))

    function handleSubmit(event) {
        event.preventDefault() // prevents the default form submission behavior

        const formData = new FormData(event.target)
        const ingredient = formData.get("ingredient")
        setIngredients([...ingredients, ingredient]) 
        // do not have to use the callback form of setIngredients
        //  because we are not relying on the previous state to update the new state, 
        // we are just adding a new ingredient to the list of ingredients. 
        // If we were to rely on the previous state, 
        // then we would have to use the callback form of setIngredients 
        // to ensure that we are using the most up-to-date state when updating the new state.

        console.log(ingredients)// this will log the old state of ingredients, not the new state, 
        // because setIngredients is asynchronous and does not update the state immediately.
    }

    return(
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text" 
                    name="ingredient"
                    placeholder="e.g: Rice"
                />
                <button type="submit">Add Ingredients</button>
            </form>
            <ul>
                {ingredientList}
            </ul>
        </main>
    )
}