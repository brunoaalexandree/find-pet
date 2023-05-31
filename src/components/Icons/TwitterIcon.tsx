interface IIcon {
  size: number;
  color: string;
}

export function TwitterIcon({ color, size }: IIcon) {
  return (
    <i
      className="icon-twitter"
      style={{
        color: color,
        fontSize: `${size}px`,
      }}
    />
  );
}
