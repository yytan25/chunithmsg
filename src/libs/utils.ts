import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

/**
 * Slugify a string
 *
 * @param str The string to slugify
 * @returns The slugified string
 */
export const slugify = (str: string) =>
  str
    .normalize('NFKD') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-'); // remove consecutive hyphens

/**
 * Format a duration in milliseconds to a human-readable string
 *
 * @param durationInMilliseconds The duration in milliseconds
 * @returns The formatted duration
 */
export const formatDuration = (durationInMilliseconds: number) => {
  let tempDuration = Math.floor(durationInMilliseconds / 1000);
  const numSeconds = tempDuration % 60;

  tempDuration = Math.floor(tempDuration / 60);
  const numMinutes = tempDuration % 60;

  tempDuration = Math.floor(tempDuration / 60);
  const numHours = tempDuration % 24;

  tempDuration = Math.floor(tempDuration / 24);
  const numDays = tempDuration;

  return `${numDays}d ${numHours}h ${numMinutes}m ${numSeconds}s`;
};
