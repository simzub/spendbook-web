interface ContentCardProps {
  description: string;
  content: string | number;
}

export default function ContentCard(props: ContentCardProps) {
  return (
    <div className="box-border flex w-372px flex-col items-start justify-center gap-3 rounded-2xl border border-primary py-6 px-7 ">
      {typeof props.content === 'number' ? (
        <h1 className="font-bold text-3xl ">{props.content}</h1>
      ) : (
        <h1 className="font-bold text-primary  text-3xl ">{props.content}</h1>
      )}
      <h3 className="font-medium uppercase text-secondary text-lg ">{props.description}</h3>
    </div>
  );
}
