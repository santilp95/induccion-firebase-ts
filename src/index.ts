import db  from './firebase/config'
import { retornaDocumentos } from './helpers/mostrar-documentos'


const usariosRef = db.collection('usuarios')


// usariosRef.limit(1)
//     .get().then(retornaDocumentos)

const btnNext = document.createElement('button');
btnNext.innerText = 'Next Page';
document.body.append(btnNext)

btnNext.addEventListener('click',()=>{
    console.log('click')
})

//simular el registro a penas carge la pagina
btnNext.click()
