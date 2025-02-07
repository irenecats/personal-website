import { ReactElement } from "react";
import SvgEmail from "../../../public/icons/email.svg";
import SvgLinkedIn from "../../../public/icons/linkedin.svg";
import SvgGitHub from "../../../public/icons/github.svg";

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
        <SvgEmail
          alt="Letter icon"
          className="size-14 md:size-16 m-auto min-w-[4rem]"
        />
      ),
    },
  ],
  [
    SocialEnum.LINKEDIN,
    {
      ref: "https://www.linkedin.com/in/irene-clemente-aracil",
      svg: () => (
        <SvgLinkedIn
          alt="LinkedIn icon that redirects to my personal page"
          className="size-14 md:size-16 m-auto min-w-[4rem]"
        />
      ),
    },
  ],
  [
    SocialEnum.GITHUB,
    {
      ref: "https://github.com/irenecats",
      svg: () => (
        <SvgGitHub
          alt="Github icon that redirects to my personal profile"
          className="size-14 md:size-16 m-auto min-w-[4rem]"
        />
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
