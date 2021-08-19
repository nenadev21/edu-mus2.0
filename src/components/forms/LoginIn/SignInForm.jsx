import "./SignInForm.css";
import {Link } from "react-router-dom";

function SignInForm() {
    return (
        <div className="SignInForm">
            <div className="wrapper">
            <div className="has-text-link-dark has-text-centered is-size-4 sign-in-title">
                Ingresa a EduMus!
            </div>
            <div className="field">
            <div className="control">
            <input className="input" type="text" placeholder="Numero celular o correo electrónico"/>
                </div>
                </div>
            <div className="field">
            <div className="control">
            <input className="input" type="text" placeholder="Contraseña"/>
            </div>
                </div>
                <div className="sign-in">
                    <button className="button is-link">
                        Iniciar sesión
                    </button>
                </div>
            <a className="sign-in-with-google">
                    Iniciar sesión con Google
            </a>
            <a className="forgot-password">
                ¿Olvidaste tu contraseña?
            </a>
            </div>
            <div>
                <div className="wrapper">
                    ¿No tienes una cuenta? <Link to="/sign-up" className="get-signed"> Regístrate </Link>
                </div>
            </div>
        </div>
    );
}

export default SignInForm;