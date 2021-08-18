function calculateSumOfMinorDivisors() {
    if (document.getElementById("inputNumber").value == "") {
        alert("O campo de número inteiro está em branco. Preencha novamente!");
    } else {

        var IntegerAtinput = document.getElementById("inputNumber").value;

        IntegerAtinput = parseInt(IntegerAtinput);

        var sum = 0;

        for (var integer = 0; integer < IntegerAtinput; integer++) {

            if ((integer % 3 == 0) || (integer % 5 == 0)) {
                sum += integer;

            }
        }

        document.getElementById("showingSummation").innerHTML = sum;
    }
}