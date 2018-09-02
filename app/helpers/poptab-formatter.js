import { helper } from '@ember/component/helper';

const CURRENCY_SYMBOL = "$";

export function poptabFormatter([money]) {
  return CURRENCY_SYMBOL + [money.toString()];
}

export default helper(poptabFormatter);
