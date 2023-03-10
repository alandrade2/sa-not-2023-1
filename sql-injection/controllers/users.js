const conn = require('../config/database')

const controller = {

}

controller.login = async(req, res) => {
    try {
        // const sql = `
        //     select * from users
        //     where username = '${req.body.username}'
        //     and password  = '${req.body.password}'
        // `

        // const sql = `select * from users where username = '${req.body.username} and password  = '${req.body.password}`
        const sql = `select * from users where username = $1 and password  = $2`

        // console.log('SQL: ', sql)
        // const result = await conn.query(sql)

        // consulta SQL usando parametros
        const result = await conn.query(sql, [
            req.body.username,
            req.body.password
        ])

        console.log({result})
        if(result.rows > 0) {
            res.render('loggedIn', {
                title: 'Seja Bem Vindo!',
                mensage: 'Autenticação concluida com sucesso'
            })
        } else {
            res.render('loggedIn', {
                title: 'Acesso negado!',
                mensage: 'usuario ou senha incorreto.'                
            })
        }
    } catch (error) {
        res.render('error', { title: "Erro", error })
    }
}

module.exports = controller