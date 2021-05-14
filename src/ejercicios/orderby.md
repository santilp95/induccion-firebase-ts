



## Ejemplo 2 nombres igiales pero quiero ordenar segun salario
# select*from usuarios order by nombre desc, salario asc


```
import db  from './firebase/config'
import { retornaDocumentos } from './helpers/mostrar-documentos'


const usariosRef = db.collection('usuarios')

usariosRef
    .orderBy('nombre','desc')
    .orderBy('salario','asc')
    .get().then(retornaDocumentos)
```