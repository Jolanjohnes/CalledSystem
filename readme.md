#### Sistema de Chamado

##### Objetito: Cadastrar os chamados de unidade de saúde para suporte técnico

**Tecnologias envolvidas**
_React.js_
_styled-components_
_React Icons_
_Firebase_

##### Configuração do firebase.

Criar uma pasta chamada config dentro do diretório \src e dentro um arquivo **firebaseConfig.js**

no arquivo **firebaseConfig.js** a seguinte estrutura:

```
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: ***************,
  authDomain: ***********,
  projectId: ************,
  storageBucket: ********,
  messagingSenderId:*****,
  appId: ****************,
  measurementId: ********'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

```
