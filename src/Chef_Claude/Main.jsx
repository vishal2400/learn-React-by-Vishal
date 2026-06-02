import React from "react"

export default function Main(){
    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map((ingredient, index) => (
        <li key = {index}> {ingredient} </li>
    ))

    // function handleSubmit(event) { 
    //     // one to handle the form submission on submit 
    //     // and add the new ingredient to the list of ingredients
        
    //     event.preventDefault() // prevents the default form submission behavior
    //     const formData = new FormData(event.target)
    //     const ingredient = formData.get("ingredient")
    //     setIngredients([...ingredients, ingredient]) 
    //     /* do not have to use the callback form of setIngredients
    //     >  because we are not relying on the previous state to update the new state, 
    //     >  we are just adding a new ingredient to the list of ingredients. 
    //     >  If we were to rely on the previous state, 
    //     >  then we would have to use the callback form of setIngredients 
    //     >  to ensure that we are using the most up-to-date state when updating the new state.
    //     */
    //     console.log(ingredients)// this will log the old state of ingredients, not the new state, 
    //     // because setIngredients is asynchronous and does not update the state immediately.
    // }

    function   addIngredient(formData){
        /* This 2nd method to use action attribute to get all 
        form data in the function and do all the processing */

        const ingredient = formData.get("ingredient")
        setIngredients([...ingredients, ingredient])
    }


    return(
        <main>
            <form action= {addIngredient} className="add-ingredient-form">
                <input 
                    type="text" 
                    name="ingredient"
                    placeholder="e.g: Rice"
                />
                <button type="submit">Add Ingredients</button>
            </form>
            {ingredients.length > 0 &&
                <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                    <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button>Get a recipe</button>
                    </div>
                </section>
            }
        </main>
    )
}