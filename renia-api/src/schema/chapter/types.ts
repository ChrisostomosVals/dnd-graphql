export const ChapterTypes = `
    type Chapter {
        _id: ID!
        name: String!
        story: String!
        date: String!
        worldId: String!
    }
    input CreateChapter {
        name: String!
        story: String!
        date: String!
        worldId: String!
    }
    input UpdateChapter {
        _id: ID!
        name: String!
        story: String!
        date: String!
    }
    extend type Query {
        getChapter(id: ID!): Chapter
        getChapters: [Chapter]!
    }
    extend type Mutation {
        createChapter(data: CreateChapter!): Chapter
        updateChapter(data: UpdateChapter!): Chapter
        deleteChapter(id: String!): Boolean!
    }
`