import { UserLogin } from './userLogin';

export interface Pensamento {

    id?: number
    //dataPost: Date
    post: string
    user?: UserLogin
    // user: Map<string, number>
    //conteudo: string
    //autoria: string
    //modelo: string
}
