import { Alumni_Sans, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";

export const alumniSans = Alumni_Sans({ subsets: ['latin', 'cyrillic'] })
export const snowStormKraft = localFont({ src: "/FONT.otf" })
export const robotoMono = Roboto_Mono({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600', '700'] })