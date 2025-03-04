import { ReactElement } from "react";
import EmailSvg from "./svgs/email-svg";
import LinkedInSvg from "./svgs/linkedin-svg";
import GithubSvg from "./svgs/github-svg";

interface Props {
  social: SocialEnum;
  className: string;
}

export enum SocialEnum {
  EMAIL,
  LINKEDIN,
  GITHUB,
}

interface ISocialInfo {
  ref: string;
  svg: () => ReactElement;
}

const socialMap = new Map<SocialEnum, ISocialInfo>([
  [
    SocialEnum.EMAIL,
    {
      ref: "mailto:ireneclemt@gmail.com",
      svg: () => (
        <EmailSvg className="size-14 md:size-16 m-auto min-w-[4rem]" />
      ),
    },
  ],
  [
    SocialEnum.LINKEDIN,
    {
      ref: "https://www.linkedin.com/in/irene-clemente-aracil",
      svg: () => (
        <LinkedInSvg className="size-14 md:size-16 m-auto min-w-[4rem]" />
      ),
    },
  ],
  [
    SocialEnum.GITHUB,
    {
      ref: "https://github.com/irenecats",
      svg: () => (
        <GithubSvg className="size-14 md:size-16 m-auto min-w-[4rem]" />
      ),
    },
  ],
]);

export default function SocialLink({ social, className }: Props) {
  const socialElem = socialMap.get(social);
  const classes =
    "text-[#071a45] w-fit p-4 rounded-xl pointer-events-auto flex justify-center " +
    className;
  return (
    <a
      className={classes}
      target="_blank"
      rel="noopener noreferrer"
      href={socialElem?.ref}
    >
      {socialElem?.svg()}
    </a>
  );
}
