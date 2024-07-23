import styles from '@/src/styles/form.module.scss'

export default function SecondForm(){
    return(
       <>
        <form>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name"/>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="phone">Telefone</label>
            <input type="text" name="phone" id="phone" />
            <label htmlFor="birthday">Data de nascimento</label>
            <input type="date" name="birthday" id="birthday" />
            <div>
                <button>Voltar</button>
                <button>Avançar</button>
            </div>
        </form>
       </>
    )
}