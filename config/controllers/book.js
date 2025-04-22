import { isValidObjectId } from "mongoose";
import { bookModel } from "../model/book.js";

export const getAllBooks = (request, response) => {
  bookModel
    .find()
    .then((data) => {
      response.json(data);
    })
    .catch((err) => {
      console.log(err);
      return response.status(400).json(err.message);
    });
};

export const getBookById = (request, response) => {
  let id = request.params.bookId;
  if (!isValidObjectId(id)) return response.status(400).json("id is not valid");
  bookModel.findById(id).then((data) => {
    if (!data) return response.status(404).json("no such book with id");
    response.json(data).catch((err) => {
      console.log(err);
      return response.status(400).json(err.message);
    });
  }); //bookModel. על המודל ישנם מלא סוגי פונקציות מובנות של mongoose
};

export const updateBook = (request, response) => {
  let { id } = request.params;
  let { body } = request;
  if (!isValidObjectId(id)) return response.status(400).json("id is not valid");
  bookModel
    .findByIdAndUpdate(id, body, { new: true })
    .then((afterUpdate) => {
      if (!afterUpdate)
        return response.status(404).json("no such book with id");
      response.json(afterUpdate);
    })
    .catch((err) => {
      console.log(err);
      return response.status(400).json(err.message);
    });
};

export const deleteBook = (request, response) => {
  let { id } = request.params;
  if (!isValidObjectId(id)) return response.status(400).json("id is not valid");
  bookModel
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) return response.status(404).json("no such book with id");
      response.json(data);
    })
    .catch((err) => {
      console.log(err);
      return response.status(400).json(err.message);
    });
    
};

export const addBook = (request, response) => {
  let { body } = request;
  bookModel
    .create(body)
    .then((data) => response.json(data))
    .catch((err) => {
      console.log(err);
      return response.status(400).json(err.message);
    });
};
