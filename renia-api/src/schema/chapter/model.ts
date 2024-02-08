export type Chapter = {
    _id: string;
    name: string;
    story: string;
    date: string;
    worldId: string;
}

export type CreateChapter = {
    name: string;
    story: string;
    date: string;
    worldId: string;
}
export type UpdateChapter = {
    _id: string;
    name: string;
    story: string;
    date: string;
}