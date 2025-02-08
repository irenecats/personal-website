interface Props {
  social: SocialEnum;
}

export enum SocialEnum {
  EMAIL,
  LINKEDIN,
  GITHUB,
}

interface ISocialInfo {
  ref: string;
}

const socialMap = new Map<SocialEnum, ISocialInfo>([
  [
    SocialEnum.EMAIL,
    {
      ref: "mailto:ireneclemt@gmail.com",
    },
  ],
  [
    SocialEnum.LINKEDIN,
    {
      ref: "https://www.linkedin.com/in/irene-clemente-aracil",
    },
  ],
  [
    SocialEnum.GITHUB,
    {
      ref: "https://github.com/irenecats",
    },
  ],
]);

export default function SocialLink({ social }: Props) {
  const socialElem = socialMap.get(social);

  return (
    <a
      className="text-[#071a45] w-fit p-4 rounded-xl pointer-events-auto flex justify-center"
      target="_blank"
      rel="noopener noreferrer"
      href={socialElem?.ref}
    >
      TMP
    </a>
  );
}
