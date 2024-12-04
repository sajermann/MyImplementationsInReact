export function isEmpty(objToVerify: object) {
	if (!objToVerify) {
		return true;
	}
	return (
		Object.keys(objToVerify).length === 0 && objToVerify.constructor === Object
	);
}
