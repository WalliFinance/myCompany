import styles from './styles/firstForm.module.scss'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'

export default function FirstForm({data,handleChange,buttonEvent}:any){
    const createFinanceDataForm = z.object({
        type:z.string()
        .min(1,"Selecione uma categoria"),
        value:z.string()
        .min(1,"O valor é obrigatorio"),
        financedValue:z.string()
        .min(1,"O valor a ser financiado é obrigatorio")
      })
    
      const { register, handleSubmit, formState: { errors } } = useForm<financeData>({resolver:zodResolver(createFinanceDataForm)})
    
      type financeData = z.infer<typeof createFinanceDataForm>
    
      
    
        const handleInputChange = (event:any) => {
            const { name, value } = event.target;
            const formattedValue = name === 'value' ? formatNumberWithPoints(value) : '0';
            handleChange({ target: { name, value: formattedValue } });
        };
    
        const handleInputChange2 = (event:any) =>{
          const { name, value } = event.target;
          const formattedValue = name === 'financedValue' ? formatNumberWithPoints(value) : '0';
          handleChange({ target: { name, value: formattedValue } });
        }
        
          const formatNumberWithPoints = (value:any) => {
            const cleanValue = value.replace(/[^\d]/g, '')
            const formattedValue = cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            return formattedValue
          };
        
    
          const onSubmit = (dataForm:financeData)=>{
          data.typeOfFinancement =dataForm.type
          data.value = dataForm.value
          data.financedValue = dataForm.financedValue
          }
        
    
          return(
        <>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="type">Tipo de financiamento desejado</label>
            {errors.type && <span>{errors.type.message}</span>}
            <select 
            id="type"
            {...register("type")}
            tabIndex={7}
            onChange={handleChange}
            value={data.type}
            aria-label='Qual tipo de financiamento você deseja'
            >
                <option value="">Selecione uma opção de financiamento</option>
                <option value="Financiamento imobiliario">Financiamento imobiliario</option>
                <option value="Crédito com garantia de imovel">Crédito com garantia de imovel</option>
            </select>
            <label htmlFor="value">Valor do imovel desejado</label>
            {errors.value && <span>{errors.value.message}</span>}
            <input 
            type="text" 
            id="value" 
            {...register("value")}
            onChange={handleInputChange}
            value={data.value}
            tabIndex={8}
            aria-label='Input Qual valor do imovel?'
            />
            <label htmlFor="financedValue">Valor a ser financiado</label>
            {errors.financedValue && <span>{errors.financedValue.message}</span>}
            <input 
            tabIndex={9}
            type="text" 
            id="financedValue" 
            {...register('financedValue')}
            value={data.financedValue}
            onChange={handleInputChange2}
            aria-label='Input Qual valor a ser financiado?'
            />
            <div>
                <button disabled>Voltar</button>
                <button onClick={buttonEvent} tabIndex={10}aria-label='Próximo formulario'>Avançar</button>
            </div>
        </form>
        </>
    )
}