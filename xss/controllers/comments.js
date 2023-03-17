const conn = require('../config/database')

const controller = {}

controller.create = async (req, res) => {
        try {
            // salva o comentario no BD
            await conn.query(
                `insert into comments(comment) values ($1)`,
                [req.sanitize(req.body.comment)]
                )

                // redireciona de volta para o formulario
                res.redirect('/')
        } catch (error) {
            console.error(error)
        }
}

module.exports = controller