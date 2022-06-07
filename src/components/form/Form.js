import './Form.css';

const Form = () => {

  return (
        <>
        <h2 className='title-container'>Contacto</h2>
            <p className='text-contact'>Dejanos tu mensaje y nos contactaremos a la brevedad</p>
            
            <form className="form" action="https://formsubmit.co/alu.handbags@gmail.com" method="POST">
                
                <label htmlFor="name" className="form-label"></label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-input"     
                        placeholder="Nombre"
                        required                
                    />
                <label htmlFor="email" className="form-label"></label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-input"
                        placeholder="Email"
                        required
                    />
                <label htmlFor="phone" className="form-label"></label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="form-input"
                        minLength="10"
                        maxLength="12"
                        autoComplete="none"
                        placeholder="Teléfono"
                        required
                    />
                <label htmlFor="comment" className="form-label"></label>
                    <textarea
                        name="comment"
                        className="form-input"
                        id="comment"
                        rows="3"
                        minLength="10"
                        placeholder="Mensaje"
                        required >
                    </textarea>
            
                    <button id='contacto' className="btn-primary send" type="submit">
                        Enviar     
                    </button>
            </form>
        </>
    );
};

export default Form;
