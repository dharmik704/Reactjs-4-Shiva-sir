import { Link } from "react-router-dom"

function Navbar(){
    return <div style={{margin:'50px', width:'1000px', display:'flex', justifyContent:'space-around'}}>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/signup'}>Signup</Link>
    </div>
}

export default Navbar;