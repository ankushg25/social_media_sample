export interface UserInfoInterface {
    id: number;
    fname: string;
    lname: string;
    avatar: string;
}


export interface ResponseInterface {
    error: boolean;
    response: UserInfoInterface[];
}