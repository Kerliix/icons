import fs from "fs";

export const KerliixIcon = fs.readFileSync(new URL('./icons/KerliixIcon.svg', import.meta.url), 'utf-8');
export const KerliixIcons = fs.readFileSync(new URL('./icons/KerliixIcons.svg', import.meta.url), 'utf-8');
export const KerliixPayIcon = fs.readFileSync(new URL('./icons/KerliixPay.svg', import.meta.url), 'utf-8');
