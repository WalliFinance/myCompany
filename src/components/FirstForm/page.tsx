import styles from './styles/firstForm.module.scss'

export default function FirstForm(){
    return(
        <>
        <form>
            <label htmlFor="type">Tipo de financiamento desejado</label>
            <select name="type" id="type">
                <option value="">Selecione uma opção de financiamento</option>
                <option value="Financiamento imobiliario">Financiamento imobiliario</option>
                <option value="Crédito com garantia de imovel">Crédito com garantia de imovel</option>
            </select>
            <label htmlFor="valueOfImmobile">Valor do imovel desejado</label>
            <input type="text" name="valueOfImmobile" id="valueOfImmobile" />
            <label htmlFor="valueOfFinancement">Valor a ser financiado</label>
            <input type="text" name="valueOfFinancement" id="valueOfFinancement" />

            <div>
                <button>Voltar</button>
                <button>Avançar</button>
            </div>
        </form>
        </>
    )
}