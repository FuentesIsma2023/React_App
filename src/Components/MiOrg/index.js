import { useState } from 'react'
import './MiOrg.css'

const MiOrg = (props) => {
    
    //Estado - hooks
    //useState
    //useState()
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)

    return <section className='orgSection'>
        
            <h3 className='title'>Mi Organizacion</h3>
            <img src='/Img/add.png' alt='add' onClick={props.cambiarMostrar}/>
        
    </section>
}
export default MiOrg