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


/*

// function fnName(param: type, ..., param: type): return type
function sum(x: number, y: number): number {
    return x + y;
}

sum(1, 2);

function sumArray(numbers: number[]): number {
    // reduce : (더 간단하게 풀기 위하여 or 특정규칙 적용을 위해) 고쳐나간다.
    //          -> 주어진 상태를 고쳐나가는 것
    // reduce(누산기(accumulator) acc, 현재값 currentValue, 현재인덱스 idx, 원본배열 src)
    // reducer 함수의 반환값은 누산기에 '할당' 되며, 누산기는 순회 중 유지되어 최종적으로 하나의 값(최종 누산값)만 남는다.
    
    // acc에 currentValue 값을 계속 더해나감.
    // arr.reduce(callback[, initialValue])
    // reference : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

*/

// Shape interface 선언
interface Shape {
    getArea(): number; // shpare interface에서는 getArea라는 함수를 반드시 구현해야함. return type은 number
}

class Circle implements Shape {
    // implements 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시
    
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width:number, height:number){
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
    console.log(shape.getArea());
})

console.log(' - - - - - - - - - - - - - - - - - - - - - - ');
console.log(' interface ');

class AccesorCircle implements Shape {
    // implements 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시
    constructor(public radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class AccesorRectangle implements Shape {
    constructor(private width:number, private height:number){
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const anotherCircle = new AccesorCircle(5);
const anotherRectangle = new AccesorRectangle(5, 5);

console.log(anotherCircle.radius); // error 없음

interface Person {
    name: string;
    age?: number; // 물음표를 넣으면 값이 필수가 아니다.
}
interface Developer extends Person {
    skils: string[];
}

const person: Person = {
    name: '김민성',
    age: 27
};

const expert: Developer = {
    name: '이윤선',
    skils: ['HTML', 'CSS(+SCSS)', 'Javascript(Vanilla, Jquery, React, Redux, ContextAPI)']
}

const people: Person[] = [person, expert];

// console.log(expert);

// interface와 type 중 무엇을 사용해야 하는가?
// 현재 interface와 type의 차이가 거의 없다.
// 라이브러리 작성 혹은 다른 라이브러리를 위한 타입 지원 파일을 작성할때는 interface가 권장되고 있다.
console.log(' - - - - - - - - - - - - - - - - - - - - - - ');
console.log(' type ');

type aliasPerson = {
    name: string;
    age?: number;
}

// '&'로 두 개 이상의 type 결합
type aliasDeveloper = aliasPerson & {
    skils: string[];
}

const aliasPerson = {
    name: '김민성',
    age: 27
}

const aliasDeveloper = {
    name: '이윤선',
    skils: ['javascript', 'react']
}

type aliasPeople = aliasPerson[];
const aliasPeople: aliasPeople = [aliasPerson, aliasDeveloper];

type Color = 'red' | 'yellow' | 'orange';
const color: Color = 'red';
const colors: Color[] = ['red', 'yellow'];

console.log(' - - - - - - - - - - - - - - - - - - - - - - ');
console.log(' Generics ');

// 파라미터로 들어오는 값의 타입을 모르는 경우, 'function merge(a: any, b: any): any' 처럼 선언가능
// 그러나, 이는 타입추론이 망가진 것으로 볼 수 있음. (사실상 파라미터로 들어오는 타입이 'any' 타입인 것처럼 느껴짐)


// generics 사용 시 실제 파라미터로 들어온 값의 타입을 활용하게 된다.
function anyMerge(a: any, b: any): any {
    return {
        ...a,
        ...b
    };
}

function genericsMerge<A, B>(a: A, b: B): A & B {
    return {
        ...a,
        ...b
    };
}

// anyMerged, genericsMerged에  마우스를 올려보면 차이를 알 수 있음
const anyMerged = anyMerge({ foo: 1 }, { bar: 1 });
const genericsMerged = genericsMerge({ foo: 1 }, { bar: 1 });

function wrap<T>(param: T) {
    return {
        param
    }
}
const wraped = wrap(10);

console.log(' - - - - - - - - - - - - - - - - - - - - - - ');
console.log(' Generic Class ');

class Queue<T> {
    list: T[] = [];
    get length() {
        return this.list.length;
    }
    enqueue(item: T) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();
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
