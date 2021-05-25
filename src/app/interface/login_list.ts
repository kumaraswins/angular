export interface UserList {
    id: number;
    name: string;
    uuid:string;
    password:string;
    createdAt:string;
    updatedAt:string;
    disbaled: boolean;

}
export interface NewUserList {
    name: string;
    uuid:string;
    password:string;
}
