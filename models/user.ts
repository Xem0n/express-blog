class User {
    id?: number;

    email?: string;
    password?: string;

    nickname?: string;
    name?: string;
    surname?: string;

    register_time?: Date;
    last_login?: Date;

    verified?: boolean;
    superadmin?: boolean;
}

export default User;