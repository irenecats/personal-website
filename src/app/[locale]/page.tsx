"use client";
import { useTranslations } from "next-intl";
import DecorativeBgHeroBt from "../components/decoration/decorative-bg-hero-bt";
import DecorativeSeparator from "../components/decoration/decorative-separator";
import PageSection from "../components/page-section";
import ScrollableGallery from "../components/project-gallery/scrollable-gallery";
import RocketGraphic from "../components/rocket-graphic";
import ArrowDownSvg from "../components/svgs/arrow-down-svg";

export default function Home() {
  const heroText = useTranslations("Hero");
  const aboutText = useTranslations("About");
  return (
    <>
      <PageSection idElement="hero" classes="relative hero">
        <h1>Irene Clemente Aracil</h1>
        <h2>{heroText("subtitle")}</h2>
        <DecorativeBgHeroBt />
      </PageSection>
      <PageSection idElement="about" classes="about">
        <div>
          <h1>About</h1>
          <div className="aboutText marginContent">
            <p>{aboutText("about0")}</p>
            <p>{aboutText("about1")}</p>
            <p>{aboutText("about2")}</p>
            <p>{aboutText("about3")}</p>
            <a
              href="IreneClemente-CV.pdf"
              className="flex flex-row items-center w-fit bg-[#dadfe2] mt-10 rounded-xl text-[#071a45] font-extrabold cursor-pointer"
            >
              {aboutText("download")}
              <ArrowDownSvg className="size-10 fill-[#071a45]" />
            </a>
          </div>
        </div>
        <RocketGraphic />
      </PageSection>
      <DecorativeSeparator />
      <PageSection idElement="projects">
        <ScrollableGallery />
      </PageSection>
    </>
  );
}
