const generetaUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ongs = await connection('ongs').select('*');
  
    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = generetaUniqueId();
    
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })

    return response.json({ id });
  },
  async delete(request, response){
    const { id } = request.params;
    const ongs = await connection('ongs')
    .select('*')
    .where('id', id)
    .first();

    await connection('ongs').where('id', id).delete();
    
     return response.status(204).send();
  }
};