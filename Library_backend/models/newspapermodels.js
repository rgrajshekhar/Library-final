const mongoose = require('mongoose')

const NewspaperAndMagzineSchema = new mongoose.Schema(
    {
     npname : String,
     month : String,
     date : Date,
     language : String,
     gd_url : String,
    },{timestamps:true}
)

const Newspaper = mongoose.models.newspapers || mongoose.model("newspapers",NewspaperAndMagzineSchema);

export default Newspaper;