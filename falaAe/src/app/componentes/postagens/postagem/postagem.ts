import { UserLogin } from "./userLogin"


export interface Pensamento {

    id?: number
    dataPost: Date
    post: string
    user: UserLogin
    modelo: string
    gostei: number
    naoGostei: number
    //conteudo: string
    //autoria: string
    //modelo: string
}
