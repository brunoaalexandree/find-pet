interface IIcon {
  size: number;
  color: string;
}

export function LeftIcon({ color, size }: IIcon) {
  return (
    <i
      className="icon-arrow_left"
      style={{
        color: color,
        fontSize: `${size}px`,
      }}
    />
  );
}
