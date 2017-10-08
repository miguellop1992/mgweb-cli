export interface IUser {
    id: number,
    email?: string;
    password?: string,
    firstname?: string,
    lastname?: boolean,
    birth?: Date | string,
    degress?: string,
    price_hour?: number,
    label_type?: string,
    jobs?: IUserJob[],
    status?: number,

}

export interface IUserJob {
    id: number,
    user_id: number,
    company?: string,
    job?: string,
    descrip?: string,
    from?: Date | string,
    to?: Date | string,
    status?: number,
} 
