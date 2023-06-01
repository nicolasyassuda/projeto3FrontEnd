export default async function getFilmes(req, res) {

    const logar = await fetch(`http://localhost:5090/auth/logar`,
        {
            method: 'POST',
            body:JSON.stringify({user: req.body.user, password:req.body.password}),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    const retorno = await logar.json()
    res.status(200).json(retorno)
}
