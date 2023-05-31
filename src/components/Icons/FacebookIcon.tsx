interface IIcon {
  size: number;
  color: string;
}

export function FacebookIcon({ color, size }: IIcon) {
  return (
    <i
      className="icon-facebook"
      style={{
        color: color,
        fontSize: `${size}px`,
      }}
    />
  );
}
