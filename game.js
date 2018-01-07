// this zależy od tego jak funkcja jest wywoływana
document.addEventListener('DOMContentLoaded', function(){ // DOMContenLoaded <- standardowa nazwa dla przeglądarek
 var playerClasses = { // obiekt może być przypisany do zmiennej
    'playerA' : 'red', // klucz -> wartość
    'playerB' : 'blue'
};

var currentPlayer;
initGame(); // inicjowanie funkcji


    function initGame(){
        var fields= document.querySelectorAll('.board > div'); // znajdź wszystkie divy w .board - są naszymi polami klikalnymi
            
         currentPlayer = 'playerA'; //pierwszy zaczyna gracz A
        fields.forEach(field =>field.addEventListener('click', fieldClickHandler)); // dla każdego field uruchom funkcję kiedy ją klikniemy

    }

    function fieldClickHandler(){
        var PlayerClass = playerClasses[currentPlayer];
        this.classList.add(PlayerClass); // zmiana htmla z poziomu jsa, jeżeli np. zrobię sobie klasę z animacją w Cssie to za pomocą tego, mogę tą klasę dodać
        
        if (currentPlayer === 'playerA'){
            currentPlayer = 'playerB';
        }
        else {
            currentPlayer = 'playerA';
        }

        this.removeEventListener('click', fieldClickHandler);
    }
});