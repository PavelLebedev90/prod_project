type TMode = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: TMode,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls, value]) => cls),
  ].join(" ");
}
