export function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function rangeIncrement(
  currentValue: number,
  min: number,
  max: number
) {
  const range = max - min + 1;
  // Calculate the new value relative to the minimum, apply modulo, and add the minimum back
  let newValue = ((currentValue - min + 1) % range) + min;

  // Handle potential negative results from the modulo operator in some edge cases by
  // ensuring the value is non-negative relative to the range
  if (newValue < min) {
    newValue += range;
  }

  return newValue;
}

export function createIgnoreRegex(text: string) {
  // Get unique characters from the text
  const chars = [...new Set(text.split(""))];

  // Escape regex special characters like . ? * + etc.
  const escaped = chars
    .map((c) => c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("");

  // Regex means: ignore EVERYTHING except these characters
  return new RegExp(`[^${escaped}]`, "g");
}

export function createIgnoreList(text: string) {
  const textChars = new Set(text.split(""));

  const fullCharSet = Array.from(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|:;\"'<>,.?/~` "
  );

  // Ignore everything NOT included in text characters
  return fullCharSet.filter((char) => !textChars.has(char));
}

export function generateUnicodeString(text: string): {
  0: number;
  1: number;
} & Array<number> {
  const textList = text.split("");
  if (!text) {
    return [65, 90];
  }

  if (text.length == 2) {
    const char = text.charCodeAt(0);
    return [char, char, char, char];
  }

  if (text.length == 2) {
    return [
      text.charCodeAt(0),
      text.charCodeAt(0),
      ...textList.map((_, i) => text.charCodeAt(i)),
      ...textList.map((_, i) => text.charCodeAt(i)),
    ];
  }
  return [
    text.charCodeAt(0),
    text.charCodeAt(0),
    ...textList.map((_, i) => text.charCodeAt(i)),
  ];
}
