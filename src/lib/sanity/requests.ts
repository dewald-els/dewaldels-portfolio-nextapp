import { client } from "./client";
import { ABOUT_QUERY, PROJECTS_QUERY } from "./queries";
import { AboutQueryResult, ProjectQueryResult } from "./types";

const queryProjects = async () => {
  try {
    const projects = await client.fetch<ProjectQueryResult[]>(PROJECTS_QUERY);
    return projects;
  } catch (error) {
    console.log("error: ", error);
    return [];
  }
};

const queryAbout = async () => {
  try {
    const about = await client.fetch<AboutQueryResult[]>(ABOUT_QUERY);
    return about;
  } catch (error) {
    console.log("error: ", error);
    return [];
  }
};

export { queryProjects, queryAbout };
