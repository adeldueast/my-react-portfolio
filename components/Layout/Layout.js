import styles from './Layout.module.css'

const Layout = ({children}) => {
  return (
    <main className={styles.wrapper}>
      {children}
    </main>
  )
}
export default Layout