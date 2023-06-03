function getRandomSize(): 'small' | 'large' {
  const sizes: ('small' | 'large')[] = ['small', 'large'];
  const randomIndex = Math.floor(Math.random() * sizes.length);
  return sizes[randomIndex];
}

export default getRandomSize;
