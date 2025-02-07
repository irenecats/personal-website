import SocialLink, { SocialEnum } from "./social-link";

interface Props {
  idElement?: string;
}

export default function Footer({ idElement }: Props) {
  return (
    <footer
      id={idElement}
      className="relative flex flex-row justify-center gap-6 snap-end py-6 md:py-10 bg-[#dadfe2] z-10"
    >
      <SocialLink social={SocialEnum.EMAIL} className="social" />
      <SocialLink social={SocialEnum.LINKEDIN} className="social" />
      <SocialLink social={SocialEnum.GITHUB} className="social" />
    </footer>
  );
}
