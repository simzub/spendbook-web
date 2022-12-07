interface ContentCardProps {
  description: string;
  content?: React.ReactNode;
  children?: React.ReactNode;
}

export default function ContentCard(props: ContentCardProps) {
  return (
    <div className="box-border flex w-full flex-col items-start justify-center gap-3 rounded-2xl border border-primary-900 bg-white py-6 px-7 ">
      <h1 className="font-bold text-3xl">{props.children || props.content}</h1>
      <h3 className="font-medium uppercase text-secondary text-base ">
        {props.description}
      </h3>
    </div>
  );
}
