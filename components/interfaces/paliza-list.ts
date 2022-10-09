export interface PalizaListResponse {
    usuarios:  Paliza[];
}

export interface Paliza {
    nombre: string;
    imgName: string;
    id: number;
    img: string;
}
