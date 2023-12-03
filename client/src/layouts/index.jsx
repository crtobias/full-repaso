import { Outlet } from "react-router-dom"
import { Nav } from "../components/Nav"
import styles from "./layouts.module.css"

export const Main = () => {
    return(
        <div className={styles.container}>
            <Nav/>
          <main>
            <Outlet/>
          </main>
        </div>
    )
}