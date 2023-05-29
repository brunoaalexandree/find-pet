interface IIcon {
  size: number;
  color: string;
}

export function SearchIcon({ color, size }: IIcon) {
  return (
    <i
      className="icon-search"
      style={{
        color: color,
        fontSize: `${size}px`,
      }}
    />
  );
}
