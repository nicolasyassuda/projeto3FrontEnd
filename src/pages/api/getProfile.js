export default async function getProfile(req, res) {
    console.log(req.body.idProfile)
    const Profile = await fetch(`http://localhost:5090/profile/getprofile?` + new URLSearchParams({idProfile: req.body.idProfile}),
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )

    const retorno = await Profile.json()
    res.status(200).json(retorno)
}
