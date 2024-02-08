export const ClassCategoryTypes = `
    type ClassCategory {
        _id: ID!
        name: String!
    }
    extend type Query {
        getClassCategory(id: ID!): ClassCategory
        getClassCategories: [ClassCategory]!
    }
`