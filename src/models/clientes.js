const mongoose = require ('mongoose');

//estrutura do seu model (atributos da sua entidade)
const clientesSchema = new mongoose.Schema({
    nome : { type : String},
    email: { type: String },
    cpf: { type: Number },
    dataNascimento: { type: String },
    estadoCivil: { type: String },
    telefone: {type:Number},
    comprou: {type: Boolean}
},{
    //gera por padrão uma versão para cada atualização do documento
    versionKey: false
});

// atribuindo o esquema a uma collection
// estou definindo o nome da collection que irei salvar no banco
const clientes = mongoose.model('clientes', clientesSchema);

// exportar o model para ser utilizado
module.exports = clientes;