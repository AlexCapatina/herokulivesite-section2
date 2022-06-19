//1 - Import Mongoose
import mongoose from "mongoose";
const Schema = mongoose.Schema;//alias for mongoose.Schema

//2 - Create Schema that matches the data
const MovieSchema = new Schema
(
    {
        Name: String,
        Year: String,
        Director: String,
        Rating: String
    },
    {
        collection: "movies"
    }
);

//3 - Create model using the Schema
const Model = mongoose.model("Movies", MovieSchema);

//4 - Export model -> this makes the file a module
export default Model;