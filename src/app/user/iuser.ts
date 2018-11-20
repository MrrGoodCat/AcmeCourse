export interface iUser {
    id: number;
    name: string;
    secondName: string;
    email: string;
    phone: number;
    birthday: number;
    avatar: string;
    hobbies?: string[];
}