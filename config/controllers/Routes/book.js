import { model, Schema } from "mongoose";

const bookSchema = Schema({
  // _id:Schema.ObjectId(), בכל מקרה גם אם נתכוב וגם אם לא יצור לבד כזה _id
  name: String,
  auther: {
    name: String,
    email: String,
  },
  categories: [String],
  pages: Number,
});

export const bookModel = model("books", bookSchema);//books זה שם הקולקשן bookSchema זה מבנה שאני מגדירה לאותו קולקשן
//bookModel עליו נבצע את השאילתות שקשורות לאותו קולקשן
//model פונקציה שמחזירה ערך על הערך הזה ניתן לבצע שאילתות
