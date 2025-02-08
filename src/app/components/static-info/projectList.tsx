export class Project {
  constructor(
    public title: string = "No title",
    public description: string[] = ["No description"],
    public imageRef: string = "/projects/blank-profile-picture.png",
    public imageAlt: string = "image not found",
    public tags: string[] = []
  ) {}
}

export const projectList: Project[] = [
  new Project(
    "Veronte Ops",
    [
      "1 Lorem ipsum odor amet, consectetuer adipiscing elit. " +
        "Felis luctus suscipit litora tempus justo neque. " +
        "Tincidunt rhoncus pellentesque condimentum fames turpis suscipit.",
      "2 Quisque vel ipsum primis habitant convallis velit netus fames. " +
        "Porta mus cras platea morbi orci viverra vestibulum. " +
        "Habitant maecenas ut mollis varius convallis.",
    ],
    "./projects/project2.png",
    "",
    ["React", "Java", "Angular", "Java", "Angular"]
  ),
  new Project("Desktop Application Suite", [""], "./projects/project1.png"),
  new Project("Bachelor’s Degree Thesis", [""], "./projects/project2.png"),
  new Project("Go! Go!! Robot Brawl", [""], "./projects/project2.png"),
];
