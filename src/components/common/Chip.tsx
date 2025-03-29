interface Props {
  className: string;
  text: string;
}


export function Chip({ text, className }: Props) {


  return (
    <div className={className}>
      {text}
    </div>
  );
}