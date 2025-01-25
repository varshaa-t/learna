import { DM_Sans } from "next/font/google";
import { Manrope } from "next/font/google";

export const dmSansFont = DM_Sans({
    weight: ["300", "500", "600","900"],
    subsets: ["latin"]
})

export const manropeFont = Manrope({
  weight: ["400", "600"],
  subsets: ["latin"]
})