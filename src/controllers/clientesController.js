const clientes = require('../models/clientes');

const getAll = (req, res) => {
  console.log(req.url);
  clientes.find(function(err, clientes){
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(200).send(clientes);
  })
};

const getCompradores = (req, res) => {
    const compradores= req.params.id;
      clientes.find({comprou:true},'nome email', function(err,clientes){
        res.status(200).send(clientes);
      })
};

const getByCpf = (req, res) => {
    const cpf = req.params.cpf;
      clientes.findOne({cpf},function(err,clientes){
          res.status(200).send(clientes);
      })
};

const postCliente = (req, res) => {
  console.log(req.body)
  
  let cliente = new clientes(req.body)

  cliente.save(function(err){
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(201).send("O cliente foi incluído com sucesso")
  })
  
};

module.exports = {
    getAll,
    getCompradores,
    getByCpf,
    postCliente
}
