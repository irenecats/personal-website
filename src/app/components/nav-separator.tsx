import SparkleRound from "../../../public/round-four-star-fill.svg";
import SparklePoint from "../../../public/point-four-star-fill.svg";
import CircleFill from "../../../public/circle-fill.svg";
import SparkleCustom from "../../../public/sparkle.svg";
import { ReactElement } from "react";

export enum SeparatorTypeEnum {
  SparkleRound,
  SparklePoint,
  SparkleCustom,
  Circle,
}

interface ISeparatorType {
  func: () => ReactElement;
  classN: string;
}

const sparkleMapAux = new Map<SeparatorTypeEnum, ISeparatorType>([
  [
    SeparatorTypeEnum.SparkleRound,
    {
      func: () => <SparkleRound />,
      classN: "text-1xl  mt-0.5",
    },
  ],
  [
    SeparatorTypeEnum.SparklePoint,
    {
      func: () => <SparklePoint />,
      classN: "text-1xl  mt-0.5",
    },
  ],
  [
    SeparatorTypeEnum.Circle,
    {
      func: () => <CircleFill />,
      classN: "text-[0.5em]  mt-[1em]",
    },
  ],
  [
    SeparatorTypeEnum.SparkleCustom,
    {
      func: () => <SparkleCustom />,
      classN: "text-[0.75em] content-center",
    },
  ],
]);

export interface SeparatorProps {
  separatorType: SeparatorTypeEnum;
  classStyle?: string;
}

export default function Separator({
  separatorType,
  classStyle,
}: SeparatorProps) {
  const separator = sparkleMapAux.get(separatorType);
  return (
    <>
      {separator ? (
        <div className={classStyle || separator.classN}>{separator.func()}</div>
      ) : (
        ""
      )}
    </>
  );
}
