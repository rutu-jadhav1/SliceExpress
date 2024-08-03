import Pizza from './../models/PizzaModel.js'

const getPizzas = async (req,res)=>{
    const allPizzas = await Pizza.find().sort({updatedAt: -1})

    res.json({
        success : true,
        data : allPizzas,
        message : "Pizza data fetched successfully"
    })
}

export {getPizzas}