import {Schema, model} from "mongoose"


const pizzaSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    varients : {
        type : String,
        enum : ["small", "medium", "large"],
    },
    prices :  {
        type : Number,
        enum : [200, 350, 400],
    },
    category : {
        type : String,
        required : true,
    },
    image: {
        type : String,
        required : true,
    }
},{
    timestamps : true
})

const pizzaModel =model("pizzaModel", pizzaSchema);

export default pizzaModel;