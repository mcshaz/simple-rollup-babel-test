import { FooClass } from './FooClass'
export function main() {
    // fix inconsistent implementations
    console.log(parseInt("10"));
    // pollyfill prototypes
    console.log([1, 2, 3].find((i) => i % 2 === 0));
    //ES 6 class & modules
    const fooInst = new FooClass();
    console.log(fooInst.propertyBar);
}
