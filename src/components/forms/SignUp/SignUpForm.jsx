import "./SignUpForm.css";
import {Link } from "react-router-dom";

function SignUpForm() {
    return (
        <div className="SignUpForm">
            <div className="wrapper">
            <div className="has-text-link-dark has-text-centered is-size-4">
                Bienvenid@ a EduMus!
            </div>
            <div className="has-text-centered p-1">
                    Crea listas, guarda tu historial de recursos y recibe sugerencias personalizadas.
            </div>
                <div className="register-with-google">
                <button className="button is-link">
                        Registrate con tu cuenta de Google
                </button>
                </div>
        <div className="field">
            <div className="control">
            <input className="input" type="text" placeholder="Nombre"/>
            </div>
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
                <div className="new-registration">
                    <button className="button is-link">
                        Registrarte
                    </button>
                </div>
            <div className="has-text-centered terms">
                Al registrarte, aceptas nuestras <Link to="/" className="darker-terms"> Condiciones </Link>, la <Link className="darker-terms"> Política de datos </Link> y la <Link className="darker-terms">Política de cookies</Link>.
            </div>
            </div>
            <div>
                <div className="wrapper sign-in-wrapper">
                    ¿Tienes una cuenta? <Link to="/sign-in" className="go-sign-in">Inicia sesión</Link>
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;