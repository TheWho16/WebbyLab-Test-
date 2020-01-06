// ES6
class Animal {
    constructor(name){
        this._name = name;
    }
    getName(){
        return this._name;
    }
}

class Dog extends Animal {
    constructor(name){
        super(name)
        this._name= name;
    }
    bark (){
        return (`Dog ${this._name} is barking`)
    }
}

const dog = new Dog ('Aban');



console.log(dog.getName ());
console.log(dog.bark ());

//ES5

var Animal = function () {
    function Animal(name) {
        _classCallCheck(this, Animal);

        this._name = name;
    }

    _createClass(Animal, [{
        key: 'getName',
        value: function getName() {
            return this._name;
        }
    }]);

    return Animal;
}();

var Dog = function (_Animal) {
    _inherits(Dog, _Animal);

    function Dog(name) {
        _classCallCheck(this, Dog);

        var _this = _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this, name));

        _this._name = name;
        return _this;
    }

    _createClass(Dog, [{
        key: 'bark',
        value: function bark() {
            return 'Dog ' + this._name + ' is barking';
        }
    }]);

    return Dog;
}(Animal);

var dog = new Dog('Aban');

console.log(dog.getName());
console.log(dog.bark());