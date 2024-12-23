import SparkleRound from "../../../public/round-four-star-fill.svg";
import SparklePoint from "../../../public/point-four-star-fill.svg";
import CircleFill from "../../../public/circle-fill.svg";
import Circle from "../../../public/circle.svg";
import { ReactElement } from "react";

export enum SeparatorTypeEnum {
  SparkleRound,
  SparklePoint,
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
]);

export interface SeparatorProps {
  separatorType: SeparatorTypeEnum;
}

export default function Separator({ separatorType }: SeparatorProps) {
  const separator = sparkleMapAux.get(separatorType);
  return (
    <>
      {separator ? (
        <div className={separator.classN}>{separator.func()}</div>
      ) : (
        ""
      )}
    </>
  );
}
