interface IIcon {
  size: number;
  color: string;
}

export function MenuIcon({ color, size }: IIcon) {
  return (
    <i
      className="icon-menu"
      style={{
        color: color,
        fontSize: `${size}px`,
      }}
    />
  );
}
