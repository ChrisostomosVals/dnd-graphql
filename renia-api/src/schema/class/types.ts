export const ClassTypes = `
    type Class {
        _id: ID!
        name: String!
        categoryId: String!
    }
    extend type Query {
        getClass(id: ID!): Class
        getClasses: [Class]!
    }
`