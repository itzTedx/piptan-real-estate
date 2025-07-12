import { defineQuery } from "next-sanity";

export const FAQS_QUERY = defineQuery(`*[_type == "faq"] | order(orderRank) {
    _id,
    question,
    answer,
   
}`);
