import { useState } from "react"
import styles from "../styles/login.module.css"
import Image from "next/image"
interface PropsLogin {
    autenticado: (autorizado: boolean) => any
}
export default function login(props: PropsLogin) {
    const [registrar, setRegistrar] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [autenticado, setAutenticado] = useState(Boolean);

    const Logar = async () => {

        const retornoAutenticar = await fetch('api/autenticar/logar', {
            method: 'POST',
            body: JSON.stringify({ user: email, password: password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (retornoAutenticar.status == 200) {
            const retorno = await retornoAutenticar.json();
            localStorage.clear()
            localStorage.setItem("autenticado", retorno)
            props.autenticado(true)
        }

    }
    const Register = async () => {
        const retornoRegister = await fetch('api/autenticar/register', {
            method: "POST",
            body: JSON.stringify({ user: email, password: password,username:username }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (retornoRegister.status == 200) {

            const retorno = await retornoRegister.json();
            localStorage.clear()
            localStorage.setItem("autenticado", retorno)
            props.autenticado(true)
        }
    }
    return (
        <div className={styles["background"]}>
            <img alt={"backgrounImage"} src={"/imgs/backgroundImage.jpg"} style={{ width: "100vw", height: "100vh" }}></img>
            <div>

            </div>
            <div className={styles["container"]}>
                <div className={styles["login"]}>
                    {registrar && (<>
                        <div>
                            <p style={{ color: "gray" }}>Username</p>
                            <input type="email" placeholder="username" onChange={(e) => setUsername(e.target.value)} className={styles["input"]}></input>
                        </div>
                    </>)}
                    <div>
                        <p style={{ color: "gray",marginBlockEnd:"0.5vh" }}>E-mail</p>
                        <input type="email" placeholder="example@mail.com" onChange={(e) => setEmail(e.target.value)} className={styles["input"]}></input>
                    </div>
                    <div>
                        <p style={{ color: "gray",marginBlockEnd:"0.5vh" }}>Password</p>
                        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} className={styles["input"]}></input>
                    </div>
                    {!registrar && (
                        <>
                            <p style={{ color: "blueviolet", fontWeight: "bold", cursor: "pointer" }} onClick={() => setRegistrar(!registrar)}>Não possui uma conta? <span style={{textDecoration:"underline"}}>Clique Aqui</span></p>
                            <button className={styles["btn"]} onClick={() => Logar()}>Entrar</button>
                        </>)}
                    {registrar && (<>
                        <p style={{ color: "blueviolet", fontWeight: "bold", cursor: "pointer" }} onClick={() => setRegistrar(!registrar)}>Possui uma conta clique aqui</p>
                        <button className={styles["btn"]} onClick={() => Register()}>Registrar</button>
                    </>)}

                </div>
            </div>
        </div>
    )
}