import db  from './firebase/config'

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
usariosRef.doc('kUsiLryr9JZIMusEfTVB')
    .delete()
    .then(resp=>console.log(resp))
    .catch(e=>console.log('error',e))



    