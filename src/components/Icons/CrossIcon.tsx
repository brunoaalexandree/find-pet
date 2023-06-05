interface IIcon {
  size: number;
  color: string;
}

export function CrossIcon({ color, size }: IIcon) {
  return (
    <i
      className="icon-cross"
      style={{
        color: color,
        fontSize: `${size}px`,
      }}
    />
  );
}
