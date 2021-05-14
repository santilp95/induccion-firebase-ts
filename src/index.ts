import db  from './firebase/config'
import { retornaDocumentos } from './helpers/mostrar-documentos'

const usuario = {
    nombre: 'Fiona',
    activo: true,
    fechaNacimiento: 0,

}

const usariosRef = db.collection('usuarios')

//insert into usario

// db.collection('usuarios')
//     .add(usuario)
//     .then(docRef =>{
//         console.log(docRef)
//     })
//     .catch(e=>console.log('error',e))



// update usuarios set activo = false where ...
// usariosRef
//     .doc('ZtevqgyEZ7V2B9N4GURD')
//     .update({
//         activo: false
//     })

// usariosRef
//     .doc('ZtevqgyEZ7V2B9N4GURD')
//     .set({
//         activo: false
//     })

//delete from usuario where id ='xx'
// usariosRef.doc('kUsiLryr9JZIMusEfTVB')
//     .delete()
//     .then(()=>console.log('Borrado'))
//     .catch(e=>console.log('error',e))


//select * from usuarios
// usariosRef
//     .onSnapshot(snap => console.log(snap))

// //aca primero mostramos que snaphijo tiene sus proto pero con data() optenemos los datos
// usariosRef
//     .onSnapshot(snap => {
//         snap.forEach(snapHijo =>console.log(snapHijo.data()))
//     })

//se dispara cada evz que cambia la bd
// usariosRef
//     .onSnapshot(snap => {
//         const usuarios: any[] = []

//         snap.forEach(snapHijo =>{
//             usuarios.push({
//                 id: snapHijo.id,
//                 ...snapHijo.data()
//             })
//         })

//         console.log(usuarios)
//     })
    
//optimizar cofigo con el get es para no etsar mirando siempre
// usariosRef
//     .onSnapshot(snap=>retornaDocumentos(snap))

usariosRef.get().then(retornaDocumentos)