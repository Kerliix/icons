import fs from "fs";

export const icons = {
  k: fs.readFileSync(new URL('./icons/k.svg', import.meta.url), 'utf-8'),
  pay: fs.readFileSync(new URL('./icons/pay.svg', import.meta.url), 'utf-8')
};

