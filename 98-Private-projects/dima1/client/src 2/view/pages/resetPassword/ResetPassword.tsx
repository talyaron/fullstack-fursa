import './ResetPassword.scss';
import { CssTextField } from '../../../App';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { Link } from 'react-router-dom';
import background from '../../images/background.jpg';
import logo from '../../images/logo.jpg';
import { useNavigate } from "react-router";

export default function ResetPassword() {
    let navigate = useNavigate();

    function handleReset(ev:any){
        ev.preventDefault();
        navigate('/');
    }

    return (
        <div className="reset">
            <img className="image" src={background} alt="" />
            <div className="Box">
                <Link to='/'>
                    <ArrowBackSharpIcon />
                </Link>
                <div className="content">
                    <img className="logo" src={logo} alt="" />
                    <h1>Reset Your Password</h1>
                    <form onSubmit={handleReset}>
                        <CssTextField label="E-mail Address" focused
                            required
                            id="custom-css-outlined-email-input"
                            defaultValue=""
                            size="small" />
                        <br />
                        <br />
                        <CssTextField label="New Password" focused
                            required
                            id="custom-css-outlined-password-input"
                            type='password'
                            defaultValue=""
                            size="small" />
                        <br />
                        <br />
                        <CssTextField label="Confirm Password" focused
                            required
                            id="custom-css-outlined-confirm-input"
                            type='password'
                            defaultValue=""
                            size="small" />
                        <br />
                        <br />
                        <button type="submit">Reset</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
