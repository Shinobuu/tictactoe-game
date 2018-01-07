
document.addEventListener('DOMContentLoaded', function(){ // DOMContenLoaded <- standardowa nazwa dla przeglądarek
 var playerClasses = { // obiekt może być przypisany do zmiennej
    'playerA' : 'red', // klucz -> wartość
    'playerB' : 'blue'
    };

    var currentPlayer;
    var emptyFields;
    
    initGame(); // inicjowanie funkcji


    function initGame(){
        var fields= document.querySelectorAll('.board > div'); // znajdź wszystkie divy w .board - są naszymi polami klikalnymi
        emptyFields=9;    
        currentPlayer = 'playerA'; //pierwszy zaczyna gracz A
        fields.forEach(field =>field.addEventListener('click', fieldClickHandler)); // dla każdego field uruchom funkcję kiedy ją klikniemy

    }

    function fieldClickHandler(){
        var PlayerClass = playerClasses[currentPlayer];
        this.classList.add(PlayerClass); // zmiana htmla z poziomu jsa, jeżeli np. zrobię sobie klasę z animacją w Cssie to za pomocą tego, mogę tą klasę dodać
        //this.classList.add('red');
        emptyFields --;// zmniejsza liczbę klikniętych pól o jeden
        
        if (currentPlayer === 'playerA'){
            currentPlayer = 'playerB';
        }
        else {
            currentPlayer = 'playerA';
        }
        if (emptyFields===0){
            alert('End of the Game!');
        }
        this.removeEventListener('click', fieldClickHandler);
        checkWinner();
    }

    function checkWinner (){
        var fields = document.querySelectorAll('.board > div'); // pobierz pola z .board
        /*
        
            +---+---+---+
            | 0 | 1 | 2 |
            +---+---+---+
            | 3 | 4 | 5 |
            +---+---+---+
            | 6 | 7 | 8 |
            +---+---+---+
            
        */
        // poziome możliwości wygranej 012, 345, 678
        var row1 = fields[0].className + fields[1].className + fields[2].className; //.className sprawdza nazwę klasy
        var row2 = fields[3].className + fields[4].className + fields[5].className;
        var row3 = fields[6].className + fields[7].className + fields[8].className;
        
        // pionowe możliwości wygranej 036, 147, 258
        var column1 = fields[0].className + fields[3].className + fields[6].className;
        var column2 = fields[1].className + fields[4].className + fields[7].className;
        var column3 = fields[2].className + fields[5].className + fields[8].className;
        // diagonalne możliwości wygranej 048, 246
        var diagonal1 = fields[0].className + fields[4].className + fields[8].className;
        var diagonal2 = fields[2].className + fields[4].className + fields[6].className;
       
        // zrób tablicę, sprawdź czy w jakiejś konfguracji jest redredred - czerwony wygrywa
        var boardCheck =[
            row1, row2, row3, column1, column2, column3, diagonal1, diagonal2
        ];
        
        if (boardCheck.includes ("redredred")){ //czerwony wygrywa
            //setTimeout chrome fix
            setTimeout(()=>{
                alert("Red Wins!");
                initGame();
            },100);
            return;
        }
        
        if (boardCheck.includes ("blueblueblue")){  // niebieski wygrywa
            setTimeout(()=>{
                alert("Blue Wins!");
                initGame();
            },100);
            return;
        }
       
        if (emptyFields===0) //brak wygranych 
        {
            setTimeout(()=>{
                alert("Nobody Wins");
                initGame();
            },100);
            return;
        }
    }
    
});