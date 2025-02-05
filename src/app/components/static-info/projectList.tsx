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
      "Lorem ipsum odor amet, consectetuer adipiscing elit. " +
        "Felis luctus suscipit litora tempus justo neque. " +
        "Tincidunt rhoncus pellentesque condimentum fames turpis suscipit.",
      "Quisque vel ipsum primis habitant convallis velit netus fames. " +
        "Porta mus cras platea morbi orci viverra vestibulum. " +
        "Habitant maecenas ut mollis varius convallis.",
      "Lorem ipsum odor amet, consectetuer adipiscing elit. " +
        "Felis luctus suscipit litora tempus justo neque." +
        "Tincidunt rhoncus pellentesque condimentum fames turpis suscipit.",
    ],
    "/projects/project0.jpg",
    "",
    ["React", "Java", "Angular"]
  ),
  new Project("Desktop Application Suite", [""], "/projects/project0.jpg"),
  new Project("Bachelor’s Degree Thesis", [""], "/projects/project0.jpg"),
  new Project("Go! Go!! Robot Brawl", [""], "/projects/project0.jpg"),
];
