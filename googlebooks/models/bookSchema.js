const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, 
           required: true 
        },
  author: { type: String, 
            required: true 
        },
  published: { type: String, 
                   default: false
             }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
© 2019 GitHub, Inc.