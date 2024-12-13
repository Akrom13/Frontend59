function courseSale(){
    const courseName = document.getElementById("courseName").value
    const PYTHON_PRICE = 12000000;
    const FRONTEND_PRICE = 14000000;
    const UX_UI_PRICE = 9000000;
    let price;
    if (courseName == "none") {
        price = 0;
    } else if (courseName == "py") {
        price = PYTHON_PRICE;
    } else if (courseName == "fr") {
        price = FRONTEND_PRICE;
    } else if (courseName == "ux") {
        price = UX_UI_PRICE;
    } else {
        price = "Ты кто вообще";
    }
    const  discountRange = document.getElementById("discountRange").value;
    const discountValue = document.getElementById("discountValue")
    discountValue.innerHTML = discountRange +"%"
    const sum = price/100*(100-discountRange)
    const resultValue = document.getElementById("sale")
    resultValue.value=sum
}
function onSelectCountry() {
    let country = document.getElementById("country");
    let phone = document.getElementById("phone");
    let countryValue = country.value;
    if (countryValue === "uz") {
        phone.value = "+998";
    } else if (countryValue === "kz") {
        phone.value = "+997";
    } else if (countryValue === "us") {
        phone.value = "+1";
    }
}
function activeBtn() {
    let checkbox = document.getElementById("check");
    let btn = document.getElementById("btn");
    if (checkbox.checked) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}
document.getElementById("country").addEventListener("change", onSelectCountry);
document.getElementById("check").addEventListener("change", activeBtn);

document.getElementById("calcButton").addEventListener("click", function () {
    const sideA = parseFloat(document.getElementById("sideA").value);
    const sideB = parseFloat(document.getElementById("sideB").value);

    if (isNaN(sideA) || isNaN(sideB)) {
        alert("Введите числовые значения для сторон!");
    } else {
        const area = sideA * sideB;
        alert(`Площадь прямоугольника: ${area}`);
    }
});

