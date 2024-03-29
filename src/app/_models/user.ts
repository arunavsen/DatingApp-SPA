import { Photo } from "./photo";

export interface User{
    id: number;
    username: string;
    knownAs: string;
    age: number;
    gender: string;
    createdAt: Date;
    lastActivatedAt: Date;
    photoUrl: string;
    city: string;
    country: string;
    interestes?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}