import { UserLogin } from './userLogin';

export interface Pensamento {

    id?: number
    //dataPost: Date
    post: string
    user?: UserLogin
    modelo: string
    // user: Map<string, number>
    //conteudo: string
    //autoria: string
    //modelo: string
}
