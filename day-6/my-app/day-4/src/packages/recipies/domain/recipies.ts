import { Model } from "objection";
// import { role } from "../../roles/domain/role";
import { users } from "../../users";
import { fileupload } from "../../fileuploads/domain/fileupload";
import { favouriterecipies } from "../../favourite-recipies";
import { ingredients } from "../../ingredients/domain/ingredients";
export class recipies extends Model {
    ownerid?: string
    idi?: String
    recipename?: String
    cookingtime?: String
    description?: String
    instruction?: String
    filename?: any
    ingredients?:any
    static get tableName() {
        return "recipies";
    }
    static relationMappings = {
        userrelation: {
            relation: Model.BelongsToOneRelation,
            modelClass: users,
            join: {
                from: "recipies.ownerid",
                to: "users.id",
            }
        },
        fileuploadrelation: {
            relation: Model.HasManyRelation,
            modelClass: fileupload,
            join: {
                from: "recipies.id",
                to: "fileupload.recipeid"
            }
        },
        favouritereciperelation: {
            relation: Model.HasManyRelation,
            modelClass: favouriterecipies,
            join: {
                from: "Recipe.id",
                to: "favouriterecipies.recipeid",
            }
        },

        ingredientreciperelation: {
            relation: Model.ManyToManyRelation,
            modelClass: ingredients,
            join: {
                from: "recipies.id",
                through: {
                    from: "recipeingredients.recipeid",
                    to: "recipeingredients.ingredientid"
                },
                to: "ingredients.id",

            }
        },

    

};
}