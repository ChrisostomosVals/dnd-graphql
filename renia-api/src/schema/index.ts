import { gql } from "apollo-server-express";
import { ClassQuery, ClassTypes } from "./class";
import { ClassCategoryQuery, ClassCategoryTypes } from "./classCategory"
import { ChapterMutation, ChapterQuery, ChapterTypes } from "./chapter";

export const typeDefs = gql`
     type Query
     type Mutation
     ${ClassTypes}
     ${ClassCategoryTypes}
     ${ChapterTypes}
`

export const resolvers = {
    Query: {
        ...ClassQuery,
        ...ClassCategoryQuery,
        ...ChapterQuery
    },
    Mutation: {
        ...ChapterMutation
    }
 }