var pro = {
    name: 'smartphone',
    price: 16000,
    brand: 'samsung',
    id: 2135,
    color: 'black',
    rateing: 5
};
console.log(pro);
for (var values in pro) {
    if (typeof pro[values] === 'string') {
        console.log("".concat(values, ":").concat(pro[values]));
    }
}
