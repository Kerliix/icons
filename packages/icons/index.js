import fs from "fs";

export const icons = {
  KerliixIcon: fs.readFileSync(new URL('./icons/KerliixIcon.svg', import.meta.url), 'utf-8'),
  KerliixPay: fs.readFileSync(new URL('./icons/KerliixPay.svg', import.meta.url), 'utf-8')
};

