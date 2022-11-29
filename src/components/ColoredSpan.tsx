interface ColoredSpanProps {
  color: 'success' | 'error';
  children: React.ReactNode;
}

export default function ColoredSpan(props: ColoredSpanProps) {
  let colorClass = '';
  switch (props.color) {
    case 'success':
      colorClass = 'text-green-500';
      break;
    case 'error':
      colorClass = 'text-red-500';
      break;
    default:
      colorClass = '';
  }

  return <span className={colorClass}>{props.children}</span>;
}
