import { FC } from 'react'
import Navbar from '../Navbar/Navbar'


const Layout: FC = ({children}) =>{
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}


export default Layout
