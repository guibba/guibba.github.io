type Class = string | string[] | undefined;

function cls(...classes: Class[]): string {
  const result: string[] = [];

  classes.forEach((item) => {
    if (item) {
      if (typeof item === 'string') {
        result.push(item);
      } else if (Array.isArray(item)) {
        result.push(...item);
      }
    }
  });

  return result.join(' ');
}

export default cls;
