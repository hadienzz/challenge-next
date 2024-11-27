import Link from 'next/link'
import classes from './main-header.module.css'
import logo from '@/assets/logo.png'


const MainHeader = () => {
    return (
        <div className={classes.header}>
            <Link href={'/'} className={classes.logo}>
                <img src={logo.src} alt="Logo" />
                Next Level Food
            </Link>
            <div className={classes.nav}>
                <ul className={classes.ul}>
                </ul>
            </div>
        </div>
    )
}

export default MainHeader