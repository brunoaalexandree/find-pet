interface IIcon {
  size: number;
  color: string;
}

export function ArrowDownIcon({ color, size }: IIcon) {
  return (
    <i
      className="icon-arrow-down"
      style={{
        color: color,
        fontSize: `${size}px`,
      }}
    />
  );
}
