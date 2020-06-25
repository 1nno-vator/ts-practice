"use strict";
/*

// const message: string = 'hello world';
// console.log(message);

let count = 0; // 숫자
count += 1;
// count = '문자열';

const message: string = 'hello world'; // 문자열

const done: boolean = true; // boolean 값

const numbers: number[] = [1, 2, 3]; // 숫자배열
const messages: string[] = ['hello', 'world']; // 문자열배열

// messages.push(1);
messages.push('hihi');

let mightBeUndifined: string | undefined = undefined; // string 또는 undefined
let nullableNumber: number | null = null; // null 일수도 있고 number 일수도 있음

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나
color = 'yellow';
// color = 'green';
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
console.log(' - - - - - - - - - - - - - - - - - - - - - - ');
console.log(' interface ');
var AccesorCircle = /** @class */ (function () {
    // implements 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시
    function AccesorCircle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    AccesorCircle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return AccesorCircle;
}());
var AccesorRectangle = /** @class */ (function () {
    function AccesorRectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    AccesorRectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return AccesorRectangle;
}());
var anotherCircle = new AccesorCircle(5);
var anotherRectangle = new AccesorRectangle(5, 5);
console.log(anotherCircle.radius); // error 없음
var person = {
    name: '김민성',
    age: 27
};
var expert = {
    name: '이윤선',
    skils: ['HTML', 'CSS(+SCSS)', 'Javascript(Vanilla, Jquery, React, Redux, ContextAPI)']
};
var people = [person, expert];
// console.log(expert);
// interface와 type 중 무엇을 사용해야 하는가?
// 현재 interface와 type의 차이가 거의 없다.
// 라이브러리 작성 혹은 다른 라이브러리를 위한 타입 지원 파일을 작성할때는 interface가 권장되고 있다.
console.log(' - - - - - - - - - - - - - - - - - - - - - - ');
console.log(' type ');
var aliasPerson = {
    name: '김민성',
    age: 27
};
var aliasDeveloper = {
    name: '이윤선',
    skils: ['javascript', 'react']
};
var aliasPeople = [aliasPerson, aliasDeveloper];
var color = 'red';
var colors = ['red', 'yellow'];
console.log(' - - - - - - - - - - - - - - - - - - - - - - ');
console.log(' Generics ');
// 파라미터로 들어오는 값의 타입을 모르는 경우, 'function merge(a: any, b: any): any' 처럼 선언가능
// 그러나, 이는 타입추론이 망가진 것으로 볼 수 있음. (사실상 파라미터로 들어오는 타입이 'any' 타입인 것처럼 느껴짐)
// generics 사용 시 실제 파라미터로 들어온 값의 타입을 활용하게 된다.
function anyMerge(a, b) {
    return __assign(__assign({}, a), b);
}
function genericsMerge(a, b) {
    return __assign(__assign({}, a), b);
}
// anyMerged, genericsMerged에  마우스를 올려보면 차이를 알 수 있음
var anyMerged = anyMerge({ foo: 1 }, { bar: 1 });
var genericsMerged = genericsMerge({ foo: 1 }, { bar: 1 });
function wrap(param) {
    return {
        param: param
    };
}
var wraped = wrap(10);
console.log(' - - - - - - - - - - - - - - - - - - - - - - ');
console.log(' Generic Class ');
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
