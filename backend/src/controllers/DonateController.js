const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection('donations').count();

    const donations = await connection('donations')
      .join('ongs', 'ongs.id', '=', 'donations.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'donations.*', 
        'ongs.name', 
        'ongs.email', 
        'ongs.whatsapp', 
        'ongs.city',            
      ]);

    response.header('X-Total-Count', count['count(*)']);

    return response.json(donations);
  },

  async create(request, response) {
    const { petname, species, sex, port, description } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection('donations').insert({
        petname,
	    species,
        sex,
        port,
        description,
        ong_id,       
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const donate = await connection('donations')
      .where('id', id)
      .select('ong_id')
      .first();

    if (donate.ong_id !== ong_id) {
      return response.status(401).json({ error: 'Operação náo é Permitida.' });
    }

    await connection('donations').where('id', id).delete();

    return response.status(204).send();
  }
};