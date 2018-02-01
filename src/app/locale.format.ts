import * as numeral from 'numeral';

export function getCurrentNumeralLocale(): NumeralJSLocale {
  return (numeral as any).localeData() as NumeralJSLocale;
}
