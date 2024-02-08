export type UserBson = {
    _id: string;
    roles: Record<string, string>;
    characters: Record<string, string>;
    name: string;
    email: string;
}