declare module '@tailwindcss/aspect-ratio';
declare module '@tailwindcss/typography';
declare module '@tailwindcss/forms';
declare module '@tailwindcss/line-clamp';
declare module "tailwindcss/lib/util/flattenColorPalette" {
    export default function flattenColorPalette(
      palette: Record<string, string | Record<string, string>>,
    ): Record<string, string>;
  }