export function isEmpty(objToVerify: object) {
	return (
		Object.keys(objToVerify).length === 0 && objToVerify.constructor === Object
	);
}
