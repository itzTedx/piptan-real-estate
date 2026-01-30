import { defineQuery } from "next-sanity";

export const DEVELOPERS_QUERY =
	defineQuery(`*[_type == "developer"] | order(_createdAt) {
    _id,
    name,
    logo,
}`);
