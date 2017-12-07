/*action*/

export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";
export const RESET = "counter/RESET";

export function increment() {
    console.log("increment");
    return {type: INCREMENT}
}

export function decrement() {
    console.log("decrement");
    return {type: DECREMENT}
}

export function reset() {
    console.log("reset");
    return {type: RESET}
}