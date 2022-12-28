//callback function with req, res
//controller has the main function and exports the routes from  routes folder
exports.getAllProducts = (req,res) => {
    res.status(200).json({message:"route is working fine"})
}