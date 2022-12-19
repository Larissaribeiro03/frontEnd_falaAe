
import { Pensamento } from "./postagem"
import { UserLogin } from "./userLogin"

export interface Reactions {
    id?: number
    dataReaction: Date
    post: Pensamento
    user: UserLogin
    tipoReaction: number
}