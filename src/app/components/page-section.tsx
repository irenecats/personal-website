interface Props {
  idElement?: string;
  classes?: string;
  children: React.ReactElement | React.ReactElement[];
}

export default function PageSection({ idElement, classes, children }: Props) {
  return (
    <section id={idElement} className={`section ${classes}`}>
      {children}
    </section>
  );
}
