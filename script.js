
/*Ejercicios con clases
    la notación _variable indica um atributo privado al que solamente se puede
    acceder desde la clase con un getter
*/

    
    class User{
        constructor(name, surname, age){
            this._name       = name;
            this._surname    = surname;
            this._age        = age;
        }
    
       setName(name){
            this._name = name;
        }

       getName(){
           return this._name;
       } 
    }

// fin clase User

