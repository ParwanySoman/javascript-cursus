'use strict';

describe('Strings of characters : ', function () {

    it('Give the size of the string', function () {
        var result = CountString('This text has a certain size');
        expect(result).toEqual(28);
    });

    it('Replace the first word in the chain to a C', function () {
        var result = ReplaceThis('This text has a certain size');
        expect(result).toEqual('C text has a certain size');
    });

    it('Concatenate the two strings', function () {
        var result = ConcatString('Javascript is ', 'great');
        expect(result).toEqual('Javascript is great');
    });

    it('Display the fifth character of the string', function () {
        var result = DisplayChar5('These exercises are great!');
        expect(result).toEqual('e');
    });

    it('Display the first 9 characters', function () {
        var result = DisplayChar9('I\'d even say they\'re excellent.');
        expect(result).toEqual('I\'d even ');
    });

    it('Capitalize the string', function () {
        var result = CapitalString('Another excellent exercise');
        expect(result).toEqual('ANOTHER EXCELLENT EXERCISE');
    });

    it('Put the string in lowercase', function () {
        var result = MinimalizeString('This one too!');
        expect(result).toEqual('this one too!');
    });
    it('Delete spaces before and after the chain', function () {
        var result = SupprEspaceString(' Rome wasn\'t built in a day ');
        expect(result).toEqual('Rome wasn\'t built in a day');
    });
    it('Show true if the input parameter of the function is of type string', function () {
        var result = IsString('Is it a string?');
        expect(result).toEqual(true);
    });
    it('Display the file extension', function () {
        var result = ExtensionString('images/photo01.jpg');
        expect(result).toEqual('jpg');
    });
    it('Count the number of spaces in the chain', function () {
        var result = NumberEspaceString('Sire, open up, we have big ones!');
        expect(result).toEqual(6);
    });
    it('Reverse a string of characters', function () {
        var result = InverseString('After tomorrow, from today?');
        expect(result).toEqual('?yadot morf ,worromot retfA');
    });
})

describe('Numbers and mathematical operations : ', function () {
    it('Calculate the power of one number in relation to another (x to the power y)', function () {
        var result = CalculationPower(2, 3);
        expect(result).toEqual(8);
    });
    it('Display the absolute value of a number', function () {
        var result = ValueAbsolute(-5);
        expect(result).toEqual(5);
    });
    it('Display the absolute values of several numbers', function () {
        var result = ValueAbsoluteArray([-5,-50,-25,-568]);
        expect(result).toEqual([5,50,25,568]);
    });
    it('Calculate the surface area of a circle according to its radius. Round it up to the nearest integer', function () {
        var result = SufaceCircle(5);
        expect(result).toEqual(79);
    });
    it('Calculate the hypothenuse of a rectangular triangle', function () {
        var result = Hypothenuse(5, 8);
        expect(result).toEqual(9.433981132056603);
    });
    it('Calculate the BMI (Weight / (height x height). Keep only two digits after the decimal point.', function () {
        var result = CalcIBM(65, 1.75);
        expect(result).toEqual(21.22);
    });
})
