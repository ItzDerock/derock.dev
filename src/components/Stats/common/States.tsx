type StateProps = {
  customText?: string | React.ReactNode;
}

export function Loading(props: StateProps) {
  return <span className="text-secondary transition-colors animate-pulse">{props.customText ?? "..."}</span>;
}

export function Error(props: StateProps) {
  return <span className="text-primary transition-colors">{props.customText ?? "Err!"}</span>;
}