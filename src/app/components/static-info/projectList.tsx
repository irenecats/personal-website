export class Project {
  constructor(
    public title: string = "No title",
    public description: string[] = ["No description"],
    public imageRef: string = "/projects/blank-profile-picture.png",
    public imageAlt: string = "image not found",
    public tags: string[] = [],
    public link: string = "#projects"
  ) {}
}

export const projectList: Project[] = [
  new Project(
    "Veronte Suite",
    [
      " I had a major role in the development and maintenance of 12 Java-based aeronautic apps during a critical turning point in the company's transition to a new ecosystem. These apps, are used to visually configure the parameters required on each stage of a UAV autopilot calibration and flight monitoring.",
      "Additionally, I worked on single-page web applications, for creating several UI cartographic tools to facilitate the design of the flight missions, and widgets to visualize and monitor the status of the platform. ",
    ],
    "./projects/embention.jpg",
    "Veronte Ops world map and logo",
    ["Angular", "Typescript", "Leaflet", "Node"],
    "https://www.embention.com/en/"
  ),
  new Project(
    "Bachelor’s Degree Thesis",
    [
      "As my Bachelor’s Degree Thesis, I created this immersive cultural experience made with Unreal Engine.",
      " The environment is based on the City of Arts and Sciences complex located in Valencia, Spain." +
        " In it, the user can walk around L'Umbracle and admire the other astonishing architectural structures" +
        " in the area while interacting with several points with information about the complex.",
    ],
    "./projects/tfg.png",
    "Close up of the textures and main structure of the Umbracle",
    ["VR", "Unreal Engine", "Blender"],
    "https://github.com/irenecats/visit-umbracle"
  ),
  new Project(
    "Go! Go!! Robot Brawl",
    [
      "Go! Go!! Robot Brawl is a cartoon styled fighting game developed entirely from scratch using C++ and OpenGL" +
        " with a small group as part of our Degree’s Final Group Project.",
      "My main role was the creation of the graphics engine, shaders, and core gameplay mechanics as well as planning," +
        " documenting and reviewing the different sprints.",
      "For our work, the University of Alicante granted us honors in both Post-production and Computer Graphics subjects.",
    ],
    "./projects/ggrb.png",
    "The game's logo on top of a plain background",
    ["C++", "OpenGL", "GLSL", "Agile"],
    "https://tako-ko.itch.io/gogo-robot-brawl"
  ),
  new Project(
    "Personal Website",
    [
      "A place to showcase my current projects and knowledge. Hope you like it!",
    ],
    "./projects/website.png",
    "website fluid background effect",
    ["React", "NextJS", "Node", "Github Actions"],
    "https://github.com/irenecats/personal-website"
  ),
];
