function selection(){
    console.log('Я работаю');
    let numberOfUser = document.getElementById('outputOfCountries');
    console.log(numberOfUser);
    let selectionOfCountries = document.getElementById('selectionOfCoutries');
    console.log(selectionOfCountries);
    
    if (selectionOfCountries == 'none') {
        numberOfUser.placeholder ='Выберите пожалуйста код страны'
    }
    else if (selectionOfCountries == 'af') {
        numberOfUser.placeholder = '+00(20)'
    }
    else if (selectionOfCountries == 'usa') {
        numberOfUser.placeholder = '+1'
    }else{
        numberOfUser.placeholder = '+7'
    }
}
ы