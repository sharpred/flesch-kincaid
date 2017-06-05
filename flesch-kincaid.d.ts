declare module 'flesch-kincaid' {
    export function rate(str: String): Number;
    export function grade(str: String): Number;
}