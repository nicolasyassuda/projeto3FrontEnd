export default async function getFilmes(req, res) {
    console.log(req.body.username)
    const registrar = await fetch(`http://localhost:5090/auth/registrar`,
        {
            method: 'POST',
            body:JSON.stringify({user: req.body.user, password:req.body.password, username:req.body.username}),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    const retorno = await registrar.json()
    res.status(200).json(retorno)
}
