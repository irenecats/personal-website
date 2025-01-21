export class Project {
  constructor(
    public title: string = "No title",
    public description: string = "No description",
    public imageRef: string = "/projects/blank-profile-picture.png",
    public imageAlt: string = "image not found"
  ) {}
}

export const projectList: Project[] = [
  new Project("Veronte Ops", "", "/projects/blank-profile-picture0.png"),
  new Project(
    "Desktop Application Suite",
    "",
    "/projects/blank-profile-picture1.png"
  ),
  new Project(
    "Bachelor’s Degree Thesis",
    "",
    "/projects/blank-profile-picture2.png"
  ),
  new Project(
    "Go! Go!! Robot Brawl",
    "",
    "/projects/blank-profile-picture3.png"
  ),
];
