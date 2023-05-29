interface IHeartIcon {
  size: number;
  color: string;
}

export function HeartIcon({ color, size }: IHeartIcon) {
  return (
    <i
      className="icon-heart"
      style={{
        color: color,
        fontSize: `${size}px`,
      }}
    />
  );
}
