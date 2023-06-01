export default async function getProfile(req, res) {
    console.log(req.body.idProfile)
    const Profile = await fetch(`http://localhost:5090/profile/favoritar?`,
        {
            method: 'POST',
            body:JSON.stringify({UserId:req.body.UserId,codFilme:req.body.codFilme}),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )

    const retorno = await Profile.json()
    res.status(200).json(retorno)
}
