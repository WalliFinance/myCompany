import {motion} from 'framer-motion'

export default function Inner({children}:any){
    const anim = (variants:any)=>{
        return{
            initial: 'initial',
            animate: 'enter',
            exit: 'exit',
            variants
        }
    }

    const opacity = {
        initial:{
            opacity:0
        },
        enter:{
            opacity:0
        },
        exit:{
            opacity:0
        }
    }
    return(
        <motion.div {...anim(opacity)}>
        {children}
        </motion.div>
    )
}