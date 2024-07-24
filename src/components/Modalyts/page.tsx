import Image from "next/image";
import creditImg from '@/public/images/credit.svg'
import financementImg from '@/public/images/financement.svg'
import styles from './styles/modalyts.module.scss'
import useWindowSize from "@/src/utils/useWindowSize";

export default function Modalyts(){
    const size = useWindowSize()
    return(
       <main className={styles.main}>
        <section>
        <h1>Financiamento imobiliario</h1>
        {size.width<1000?(
              <Image
              width={350}
              height={350}
              src={financementImg}
              alt="Imagem que ilustra o financiamento imobiliario"
              />
        ):(
            <Image
            width={1400}
            height={700}
            src={financementImg}
            alt="Imagem que ilustra o financiamento imobiliario"
            />
        )}
      
        <p>Financiamento imobiliário é uma modalidade de crédito destinada à aquisição de imóveis, permitindo que os compradores adquiram uma propriedade sem a necessidade de pagar o valor total à vista. O valor financiado é pago em parcelas mensais ao longo de um período que pode variar de 20 a 30 anos, ou até mais, dependendo das condições do contrato.</p>

        <div className={styles.benefits}>
            <div className={styles.benefitContainer}>
                <h2>Prós</h2>
                <div className={styles.benefitList}>
                    <li>Acesso Facilitado à Propriedade: Permite a compra de imóveis mesmo sem dispor de todo o capital.</li>
                    <li>Valorização do Imóvel: O imóvel tende a valorizar com o tempo, podendo representar um bom investimento.</li>
                    <li>Melhoria na Qualidade de Vida: Facilita a mudança para imóveis melhores ou maiores.</li>
                    <li>Previsibilidade Financeira: Com parcelas fixas, facilita o planejamento financeiro.</li>
                    <li>Uso do FGTS: Pode ser utilizado para abater parcelas ou reduzir o valor financiado.</li>
                    <li>Construção de Patrimônio: Ao quitar o financiamento, o imóvel se torna um bem próprio.</li>
                    <li>Incentivos Governamentais: Programas habitacionais oferecem condições especiais, como juros reduzidos.</li>
                </div>
            </div>
            
            <div className={styles.againstContainer}>
                <h2>Contras</h2>
                <div className={styles.againstList}>
                    <li>Endividamento a Longo Prazo: Compromete a renda por um longo período.</li>
                    <li>Taxas de Juros Elevadas: Aumentam significativamente o valor final pago.</li>
                    <li>Risco de Desvalorização: O imóvel pode desvalorizar em crises econômicas.</li>
                    <li>Custos Adicionais: Incluem seguros, taxas de administração, escritura e registro.</li>
                    <li>Penalidades por Atraso: Atrasos podem acarretar multas e até a perda do imóvel.</li>
                    <li>Falta de Flexibilidade: Dificuldade em renegociar condições em caso de dificuldades financeiras.</li>
                    <li>Comprometimento da Capacidade de Crédito: Limita a obtenção de novos empréstimos enquanto o financiamento não é quitado.</li>
                </div>
            </div>
        </div>
        </section>

        <section>
        <h1>Crédito com garantia de imovel</h1>
        {size.width<1000?(
             <Image
             width={350}
             height={350}
             src={creditImg}
             alt="Imagem que representa o crédito com garantia de imovel"
             />
        ):(
            <Image
            width={1400}
            height={700}
            src={creditImg}
            alt="Imagem que representa o crédito com garantia de imovel"
            />
        )}
       
        <p>O crédito com garantia de imóvel, também conhecido como home equity, é um tipo de empréstimo onde o tomador usa um imóvel quitado ou financiado como garantia para obter crédito. Esse tipo de financiamento permite acesso a valores mais altos e prazos mais longos, com taxas de juros geralmente mais baixas comparadas a outras modalidades de crédito pessoal. Os recursos obtidos podem ser utilizados para diversas finalidades, como reforma de imóveis, investimentos, educação, quitação de dívidas e outros projetos pessoais ou empresariais. Caso o tomador não consiga cumprir com as obrigações de pagamento, o imóvel pode ser tomado pela instituição financeira para quitar a dívida.</p>

        <div className={styles.benefits}>
            <div className={styles.benefitContainer}>
                <h2>Prós</h2>
                <div className={styles.benefitList}>
                    <li>Geralmente, as taxas de juros são mais baixas em comparação com outros tipos de crédito pessoal.</li>
                    <li>Oferece prazos de pagamento mais longos, possibilitando parcelas menores e mais acessíveis.</li>
                    <li>Permite obter empréstimos de valores mais altos, já que o imóvel serve como garantia.</li>
                    <li>O dinheiro obtido pode ser usado para diversas finalidades, como quitar dívidas, investir em negócios, reformas, etc.</li>
                    <li>Pode ajudar na consolidação de dívidas com juros mais altos, reduzindo o custo total da dívida.</li>
                    <li>Em alguns casos, é possível refinanciar o crédito para obter melhores condições ao longo do tempo.</li>
                </div>
            </div>
            <div className={styles.againstContainer}>
                <h2>Contras</h2>
                <div className={styles.againstList}>
                    <li>Em caso de inadimplência, o imóvel pode ser tomado pelo banco como pagamento da dívida.</li>
                    <li>A dívida pode durar muitos anos, comprometendo a renda por um longo período.</li>
                    <li>Inclui custos de avaliação do imóvel, registro em cartório e seguros obrigatórios.</li>
                    <li>O processo de aprovação pode ser mais demorado e burocrático devido à necessidade de avaliação e registro do imóvel.</li>
                    <li>Inadimplência pode afetar negativamente a pontuação de crédito e dificultar a obtenção de novos financiamentos.</li>
                    <li>Se o valor do imóvel diminuir, pode haver dificuldades em renegociar ou refinanciar o crédito.</li>
                    <li>O imóvel fica alienado ao banco, limitando sua venda ou uso como garantia em outras operações até a quitação do crédito.</li>
                </div>
            </div>
        </div>
        </section>
       </main>
    )
}