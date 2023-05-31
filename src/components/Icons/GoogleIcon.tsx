interface IIcon {
  size: number;
  color: string;
}

export function GoogleIcon({ color, size }: IIcon) {
  return (
    <i
      className="icon-google"
      style={{
        color: color,
        fontSize: `${size}px`,
      }}
    />
  );
}
