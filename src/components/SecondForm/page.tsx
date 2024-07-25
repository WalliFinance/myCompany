import styles from './styles/secondForm.module.scss'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'

export default function SecondForm({data,handleChange,simulateEvent,backStep}:any){
    const createUserDataForm = z.object({
        name:z.string()
        .min(1,"O nome é obrigatorio"),
        email:z.string().min(1,"Email é obrigatorio").email("Formato de email invalido"),
        phone:z.string()
        .min(11,"Formato de numero invalido"),
        date:z.coerce.date()
      })
  
   
      type financeData = z.infer<typeof createUserDataForm>
    
      const { register, handleSubmit, formState: { errors } } = useForm<financeData>({resolver:zodResolver(createUserDataForm)})
    
      
      const onSubmit = (dataForm:financeData)=>{
      data.name = dataForm.name
      data.email = dataForm.email
      data.phone = dataForm.phone
      data.date = dataForm.date
      }
    return(
       <>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Nome</label>
            {errors.name && <span>{errors.name.message}</span>}
            <input 
            type="text" 
            id="name"
            {...register("name")}
            onChange={handleChange}
            value={data.name}
            aria-label='Input Qual seu nome?'
            />
            <label htmlFor="email">Email</label>
            {errors.email && <span>{errors.email.message}</span>}
            <input 
            type="text" 
            id="email" 
            {...register("email")}
            onChange={handleChange}
            value={data.email}
            aria-label='Input Seu email'
            />
            <label htmlFor="phone">Telefone</label>
            {errors.phone && <span>{errors.phone.message}</span>}
            <input 
            type="text" 
            id="phone" 
            {...register("phone")}
            onChange={handleChange}
            value={data.phone}
            aria-label='Input Seu telefone'
            />
            <label htmlFor="date">Data de nascimento</label>
            {errors.date && <span>{errors.date.message}</span>}
            <input 
            type="date" 
            id="date" 
            {...register('date')}
            onChange={handleChange}
            value={data.date}
            aria-label='Input Sua data de nascimento?'
            />
            <div>
                <button onClick={backStep}>Voltar</button>
                <button onClick={simulateEvent} aria-label='Botão para finalizar sua simulação cheque seu email após confirmar'>Simular</button>
            </div>
        </form>
       </>
    )
}