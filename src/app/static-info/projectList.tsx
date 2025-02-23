export class Project {
  constructor(
    public id: number,
    public imageRef: string,
    public tags: string[] = [],
    public link: string = "#projects"
  ) {}
}

export const projectList: Project[] = [
  new Project(
    0,
    "./projects/website.png",
    ["React", "NextJS", "Node", "Github Actions"],
    "https://github.com/irenecats/personal-website"
  ),
  new Project(
    1,
    "./projects/embention.jpg",
    ["Angular", "Typescript", "Leaflet", "Node"],
    "https://www.embention.com/en/"
  ),
  new Project(
    2,
    "./projects/tfg.png",
    ["VR", "Unreal Engine", "Blender"],
    "https://github.com/irenecats/visit-umbracle"
  ),
  new Project(
    3,
    "./projects/ggrb.png",
    ["C++", "OpenGL", "GLSL", "Agile"],
    "https://tako-ko.itch.io/gogo-robot-brawl"
  ),
];
