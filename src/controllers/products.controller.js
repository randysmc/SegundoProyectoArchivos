import Product from "../models/products.model.js"

export const getProducts = async (req, res) =>{
    const products = await Product.find();
    res.json(products)
    
}

export const createProduct = async (req, res) =>{
   //destructurin
   const {name, category, price, imgURL} = req.body

    const newProduct = new Product({
        name,
        category,
        price,
        imgURL
    });

    //con este metodo guardamos el nuevo producto
    //como lo guarda en una base de datos se vuelve una funcion asincrona
    const productSaved = await newProduct.save();
    res.status(201).json(productSaved);

}

export const getProductById = async (req, res) =>{
    const product = await Product.findById(req.params.productId);
    res.status(200).json(product);
}

export const updateProductById = async (req, res) =>{
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true
    })
    res.status(200).json(updatedProduct);
}

export const deleteProductById = async (req, res) =>{
    const { productId} = req.params 
    await Product.findByIdAndDelete(productId);
    //await Product.findByIdAndDelete(req.params.body);
    res.status(204).json()
}

