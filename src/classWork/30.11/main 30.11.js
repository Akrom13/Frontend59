function sum(){
    let a = +document.getElementsByName("a")[0].value
    let b = +document.getElementsByName("b")[0].value
    let result = document.getElementById("result")
    let c = a + b

    result.innerHTML = "Результат:" + c
}
function division(){
    let a = +document.getElementsByName("a")[0].value
    let b = +document.getElementsByName("b")[0].value
    let result = document.getElementById("result")
    let c
    if(b==0){
        c="На ноль делить нельзя"
    }else{
        c-a/b
    }
    result.innerHTML = "Результат:" + c
}
function calc(){
    let a = +document.getElementsByName("a")[0].value
    let b = +document.getElementsByName("b")[0].value
    let result = document.getElementById("result")
    let btn = event.target
    let c = btn.innerHTML
}

    if(c=="+"){
        let d = a + b;
        result.innerHTML = "Результат:" + d;
    }else if (c=="-"){
        let d = a - b;
        result.innerHTML = "Результат:" + d;
    }else if (c=="*"){
        let d = a * b;
        result.innerHTML = "Результат:" + d;
    }else if (c=="/"){
        let d = a / b;
        result.innerHTML = "Результат:" + d;
    }
    else{
        result.innerHTML = "Я не понял что вы хотите от меня";
    }