import { helper } from '@ember/component/helper';

export function emptyCheck(params/*, hash*/) {
	if (params == '') {
		return '--';
	}
  	return params;
}

export default helper(emptyCheck);
