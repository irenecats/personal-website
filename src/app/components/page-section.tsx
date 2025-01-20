interface Props {
  classes?: string;
  children: React.ReactElement | React.ReactElement[];
}

export default function PageSection({ classes, children }: Props) {
  return <section className={`section ${classes}`}>{children}</section>;
}
