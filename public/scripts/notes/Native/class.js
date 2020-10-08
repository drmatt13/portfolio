// replace `${i}` --> \`   \$   {i}   \`

const array = [

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'comment': `create new class`},
{'js': `class TestClass {

    constructor(x) {
        this.value = x;
    }

    get() {
        return this.value;
    }

    set(x) {
        this.value = x;
    }
}

testObject = new TestClass(10);

console.log(testObject.get());
console.log(testObject.set(20));`}
        ],
        // output
        [
            {'output': `10`},
            {'output': `20`}
        ],
        //render
        {'render': true}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'comment': `static methods are not called on the 
created object but on the class itself.`},
{'js': `class TestClass {

    constructor(x) {
        this.value = x;
    }

    static hello() {
        return "Hello!!";
    }
}

console.log(TestClass.hello());`}
        ],
        // output
        [
            {'output': `Hello!!`}
        ],
        //render
        {'render': true}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'comment': `class inheritance`},
{'js': `class TestClass {

    constructor(x) {
        this.value = x;
    }

    output() {
        return 'output: ' + this.value;
    }
}

class TestInheritance extends TestClass {

    constructor(x, y) {
        super(x);
        this.secondValue = y;
    }

    show() {
        return this.output() + 
        '\\n' + 
        'output2: ' + 
        this.secondValue;
    }
}

testObject = new TestInheritance(10, 20);
console.log(testObject.show());`}
        ],
        // output
        [
            {'output': `output: 10`},
            {'output': `output: 20`}
        ],
        //render
        {'render': false}
    ],

];