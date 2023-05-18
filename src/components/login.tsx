import styles from "../styles/login.module.css"
import Image from "next/image"
export default function login() {
    return (
        <div className={styles["background"]}>
            <img alt={"backgrounImage"} src={"/imgs/backgroundImage.jpg"} style={{ width: "100vw", height: "100vh" }}></img>
            <div>

            </div>
            <div className={styles["container"]}>
                <div className={styles["login"]}>
                    <div>
                        <p style={{ color: "gray" }}>E-mail</p>
                        <input type="email" placeholder="example@mail.com" className={styles["input"]}></input>
                    </div>
                    <div>
                        <p style={{ color: "gray" }}>Password</p>
                        <input type="password" placeholder="password" className={styles["input"]}></input>
                    </div>
                    <button className={styles["btn"]}>Entrar</button>
                </div>
            </div>
        </div>
    )
}