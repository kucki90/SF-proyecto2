import { useState } from "react"

const Form = () => {
    const [email, setemail] = useState('');
    const [name, setname] = useState('');
    const [celphone, setcelphone] = useState('');
    const [comment, setcomment] = useState('');
    console.log('Soy el estado de name :', name);
    console.log('Soy el estado de email :', email);
    console.log('Soy el estado de celphone :', celphone);
    console.log('Soy el estado de comment :', comment);
    
    return(
        <div className="containerDelContainer">
        <div className="formContainer">
        <form 
        onSubmit={(e) => {
            e.preventDefault()
        }}
        >
        <h1 className="formTitle">Formulario de contacto</h1>
        <h5 className="formTitle">Completá el siguiente formulario con tus datos y nos pondremos en contacto a la brevedad</h5>
            <input 
                className="input"
                type='text' 
                autoComplete="off" 
                placeholder="Nombre"
                name='email'
                value={name}
                onChange={ (e) => setname(e.target.value)}          
            ></input>
            <input
                className="input" 
                type='text'
                name="username"
                placeholder="E-mail de contacto"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                >
            </input>
            <input
                className="input" 
                type='text'
                name="celphone"
                placeholder="Teléfono de contacto"
                value={celphone}
                onChange={(e) => setcelphone(e.target.value)}
                >
            </input>
            <textarea
                className="textarea" 
                type='text'
                name="textarea"
                placeholder="Dejanos tu comentario"
                value={comment}
                onChange={(e) => setcomment(e.target.value)}
                >
            </textarea>
            <div className="btnContainer">
            <button     className="btn-submit"  type='submit'>Submit</button>

            </div>
        </form>
        </div>

        </div>
    )
}

export default Form;