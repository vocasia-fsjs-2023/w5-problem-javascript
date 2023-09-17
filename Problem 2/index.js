const visitor = {
	name: "Alfa", age: 20, uang: 350000
};

const juice = 50000;
const wine = 300000;

if (!visitor.name) {
	console.log("Anda tidak boleh masuk!");
} else {

	if (visitor.age < 17) {
		if (visitor.uang < juice) {
			console.log("Uang tidak cukup. Anda harus pulang");
		} else {
			const change = visitor.uang - juice;
			console.log('Anda bisa pesan juice. Sisa uang anda: ${change}');
		}
	} else {
		if (visitor.uang < wine) {
			console.log("Uang tidak cukup. Anda harus pulang.");
		} else {
			const change = visitor.uang - wine;
			console.log('Anda bisa pesan anggur. Sisa uang anda: ${change}')
		}
	}
}