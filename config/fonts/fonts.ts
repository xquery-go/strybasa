import { Alumni_Sans, Roboto_Mono, Roboto } from "next/font/google";
import localFont from "next/font/local";

export const roboto = Roboto({weight: ['400', '500', '700'], subsets: ['latin', 'cyrillic'], fallback: []})
export const alumniSans = Alumni_Sans({ subsets: ['latin', 'cyrillic'], fallback: [] })
export const robotoMono = Roboto_Mono({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600', '700'], fallback: [] })