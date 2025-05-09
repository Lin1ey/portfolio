import { AboutMeData } from "@/types/aboutme.js";
import { LinkData } from "@/types/links.js";
import { ProjectData } from "@/types/projects.js";


export default class DataService {
  async getAboutMeData(): Promise<AboutMeData> {
    let data = await fetch('data/AboutMeData.json').then((data) => data.json());
    return data;
  }

  async getLinksData(): Promise<LinkData[]> {
    let data = await fetch('data/LinksData.json').then((data) => data.json());
    return data;
  }

  async getProjectsData(): Promise<ProjectData[]> {
    let data = await fetch('data/ProjectsData.json').then((data) => data.json());
    return data;
  }
}
