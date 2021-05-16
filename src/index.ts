import db  from './firebase/config'
import { retornaDocumentos } from './helpers/mostrar-documentos'


const usariosRef = db.collection('usuarios')


// usariosRef.limit(1)
//     .get().then(retornaDocumentos)

const btnNext = document.createElement('button');
btnNext.innerText = 'Next Page';
document.body.append(btnNext)

//3 . saber cual es el ultimo documento que estamos buscando, por ejemplo hacer pagicnacion de 2 en 2
// coger el ultimo registro luego los siguientes 2
// tiene el mismo problema que cualquier bd y es que si alguien altera el orden puede cambiar
let lastDocument:any = null

btnNext.addEventListener('click',()=>{
    // console.log('click')
    const query = usariosRef
                    .orderBy('nombre')
                    .startAfter(lastDocument)

    query.limit(2).get().then(snap=>{

        //con esto optengo el ultimo documento de firebase
        lastDocument = snap.docs[snap.docs.length - 1]
        retornaDocumentos(snap)
    })
})

//2.simular el registro a penas carge la pagina
btnNext.click()
