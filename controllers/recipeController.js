const Recipe = require("../models/recipe");

const recipeController = {

    // TO get all Recipes
    getAllrecipes: async(req,res)=>{

        try {
            const recipes = await Recipe.find();
            res.status(200).json(recipes);
        } catch (error) {
             res.status(500).json({ message: 'Error fetching todos', error: error.message });
        }   
    },

    //  To get the Recipes By ID
    getRecipeById : async(req,res)=>{

        try{
            const{id} = req.params;

            const recipe = await Recipe.findById(id);
            res.status(200).json(recipe);

        }catch(error){
                 res.status(500).json({ message: 'Error fetching recipes', error: error.message });
        }

    },

    //   To create a new Recipe
      createRecipe : async (req, res) => {
        try {
            const { title,ingredients,instructions } = req.body;

            const newRecipe = new Recipe({
                title,
                ingredients,
                instructions
            });

            await newRecipe.save();
            res.status(201).json(newRecipe);
        } catch (error) {
            res.status(500).json({ message: 'Error creating a new recipe', error: error.message });
        }
    },

    // To Update the Recipe
    updateRecipe : async(req,res)=>{
        try{
            const {id} = req.params;
            const {title,instructions} = req.body;
            await Recipe.findByIdAndUpdate(id,{title},{instructions});
            res.status(200).json({message:"Recipe Updated Sucessfully"});

        }catch(error){
           res.status(500).json({ message: 'Error updating recipe', error: error.message });
        }
    },

    // To delete the Recipe Item
    deleteRecipe : async(req,res)=>{
        try{
            const {id} = req.params;

            await Recipe.findByIdAndDelete(id);
            res.status(200).json({message:"The Recipe Item Deleted Successfully"})

        }catch(error){
            res.status(500).json({message:"Error on deleting recipe",error:error.message});

        }
    }
}

module.exports = recipeController;