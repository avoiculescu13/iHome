export interface User
{
    fullName: string;
    userName: string;
    password: string;
    emailAddress: string;
    isAdmin: boolean;
    isLocked: boolean;
}

export interface UserAction{
    action: string;
    actionStatus: string;
    entityType: string;
    entityId: string;
    read: boolean;
    userName: string;
    dateCreated: Date;
}

export interface IUserActionResolved{
    userActions: UserAction[];
    error?: any;
}