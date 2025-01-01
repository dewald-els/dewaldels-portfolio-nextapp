import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(
  `*[_type == "project" && defined(slug.current)][0...12]{
  "id": _id,
  title,
  shortDescription,
  "bodyText": pt::text(body),
  body,
  "thumbnailUrl": thumbnail.asset->url,
  image[]->{
    "url": screenshot.asset->url,
    caption
  },
  links,
  techStack[]->{
  title
  },
   projectTags[]->{
   title
 }}`
);

export const ABOUT_QUERY = defineQuery(
  `*[_type == "about"][0...1]{
  "id": _id,
  title,
  body,
  "bodyText": pt::text(body),
   skills[]->{
   title
 }}`
);
