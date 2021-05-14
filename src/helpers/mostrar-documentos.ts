import firebase from 'firebase';


export const retornaDocumentos = (snap: firebase.firestore.QuerySnapshot) =>{
    const documentos: any[] = []

    snap.forEach(snapHijo =>{
        documentos.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })

    console.log(documentos)
    return documentos
}