import { Model,Schema } from "mongoose";
 const bookSchema=Schema({
    name:String,
    auther:{
        name:String,
        auther:{
            name:String,
            email:String,
        },
        categories:[String],
        pages:Mamber,
    }
 });

 export const bookModel=model("books",bookSchema);