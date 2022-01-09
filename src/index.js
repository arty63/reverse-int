module.exports = function reverse (n) {
        let strNumber = String(Math.abs(n));
        let reversed = '';
        for (let i=1; i<=strNumber.length; i += 1){
            reversed += strNumber[strNumber.length-i]
        }return reversed
}
