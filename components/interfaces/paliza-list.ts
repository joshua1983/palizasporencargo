export interface PalizaListResponse {
    usuarios:  Paliza[];
}

export interface Paliza {
    _id: any;
    nombre: string;
    imgName: string;
    id: number;
    img: string;
}
