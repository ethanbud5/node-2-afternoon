const create = (req,res)=>{
    req.app
        .get("db")
        .create_product([req.body.name,
            req.body.description,
            req.body.price,
            req.body.image_url
        ])
        .then(response=>{
            res.sendStatus(200)
        })
        .catch(err=>{res.status(500).json(err)
            console.log(err)
        });
}
function update(req,res){
    req.app
        .get("db")
        .update_product([req.body.product_id,
            req.body.name,
            req.body.description,
            req.body.price,
            req.body.image_url
        ])
        .then(response=>{
            res.sendStatus(200)
        })
        .catch(err=>{res.status(500).json(err)
            console.log(err)
        });
}
function deleteProduct(req,res){
    //console.log("deleting...")
    req.app
        .get("db")
        .delete_product(req.params.id)
        .then(response=>{
            res.sendStatus(200)
        })
        .catch(err=>res.status(500).json(err));
}
function getOne(req,res){
    req.app
        .get("db")
        .read_product(req.params.id)
        .then(response=>{
            res.status(200).json(response)
        })
        .catch(err=>res.status(500).json(err));
}
function getAll(req,res){
    req.app
        .get("db")
        .read_products()
        .then(response=>{
            res.status(200).json(response)
        })
        .catch(err=>res.status(500).json(err));
}

module.exports = {
    create,
    getOne,
    getAll,
    update,
    deleteProduct
}