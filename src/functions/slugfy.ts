const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace('.', '-')
    .replace(' ', '-');
};
export { slugify };
