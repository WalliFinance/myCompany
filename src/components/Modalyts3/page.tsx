import Image from "next/image";
import creditImg from '@/public/images/credit.jpg'
import styles from './styles/modalyts.module.scss'

export default function Modalyts3(){
    return(
        <main className={styles.main}>           
        <section>
        <h1 tabIndex={27}>Crédito com garantia de imovel</h1>
        
        <div className={styles.info}>
        <Image
            width={800}
            height={600}
            src={creditImg}
            alt="Imagem que representa o crédito com garantia de imovel"
            />
        <div className={styles.texts}>
        <p tabIndex={28}>O crédito com garantia de imóvel, também conhecido como home equity, é um tipo de empréstimo onde o tomador usa um imóvel quitado ou financiado como garantia para obter crédito. Esse tipo de financiamento permite acesso a valores mais altos e prazos mais longos, com taxas de juros geralmente mais baixas comparadas a outras modalidades de crédito pessoal. Os recursos obtidos podem ser utilizados para diversas finalidades, como reforma de imóveis, investimentos, educação, quitação de dívidas e outros projetos pessoais ou empresariais. Caso o tomador não consiga cumprir com as obrigações de pagamento, o imóvel pode ser tomado pela instituição financeira para quitar a dívida.</p>

<div className={styles.benefits}>
    <div className={styles.benefitContainer}>
        <h2 tabIndex={29}>Prós</h2>
        <div className={styles.benefitList}>
            <li tabIndex={30}>Geralmente, as taxas de juros são mais baixas em comparação com outros tipos de crédito pessoal.</li>
            <li tabIndex={31}>Oferece prazos de pagamento mais longos, possibilitando parcelas menores e mais acessíveis.</li>
            <li tabIndex={32}>Permite obter empréstimos de valores mais altos, já que o imóvel serve como garantia.</li>
            <li tabIndex={33}>O dinheiro obtido pode ser usado para diversas finalidades, como quitar dívidas, investir em negócios, reformas, etc.</li>
            <li tabIndex={34}>Pode ajudar na consolidação de dívidas com juros mais altos, reduzindo o custo total da dívida.</li>
            <li tabIndex={35}>Em alguns casos, é possível refinanciar o crédito para obter melhores condições ao longo do tempo.</li>
        </div>
    </div>
    <div className={styles.againstContainer}>
        <h2 tabIndex={36}>Contras</h2>
        <div className={styles.againstList}>
            <li tabIndex={37}>Em caso de inadimplência, o imóvel pode ser tomado pelo banco como pagamento da dívida.</li>
            <li tabIndex={38}>A dívida pode durar muitos anos, comprometendo a renda por um longo período.</li>
            <li tabIndex={39}>Inclui custos de avaliação do imóvel, registro em cartório e seguros obrigatórios.</li>
            <li tabIndex={40}>O processo de aprovação pode ser mais demorado e burocrático devido à necessidade de avaliação e registro do imóvel.</li>
            <li tabIndex={41}>Inadimplência pode afetar negativamente a pontuação de crédito e dificultar a obtenção de novos financiamentos.</li>
            <li tabIndex={42}>Se o valor do imóvel diminuir, pode haver dificuldades em renegociar ou refinanciar o crédito.</li>
            <li tabIndex={43}>O imóvel fica alienado ao banco, limitando sua venda ou uso como garantia em outras operações até a quitação do crédito.</li>
        </div>
    </div>
</div>
        </div>  
        </div>
        </section>    
        </main>
    )
}