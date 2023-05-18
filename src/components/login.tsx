import styles from "../styles/login.module.css"
import Image from "next/image"
export default function login() {
    return (
        <div className={styles["background"]}>
            <img alt={"backgrounImage"} src={"/imgs/backgroundImage.jpg"} style={{ width: "100vw", height: "100vh" }}></img>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", top: "0px", left: "0px", width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "30vw", height: "70vh", backgroundColor: "rgba(0,0,0,1)", borderRadius: "2vw", boxShadow: "-0vw 0vw 3vw gray" }}>
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