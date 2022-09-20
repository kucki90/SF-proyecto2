import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <div className="buttonContainer">
            <Link to='/form'>
                <button className="button"> Form</button>
            </Link>
            <Link to='/users'>
                <button className="button"> Users</button>
            </Link>
            <Link to='/characters'>
                <button className="button"> Characters </button>
            </Link>

        </div>
    )
}
export default Navbar;