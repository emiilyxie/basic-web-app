import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Emily"
          ));
    })

    test('should return andrew ID', () => {
        const query = "What is your andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "elx"
          ));
    })

    test('should sqare cube', () => {
        const query = "Which of the following numbers is both a square and a cube: 3969, 4523, 2380, 729, 2677, 2660?";
        const response: string = QueryProcessor(query);
        console.log(response);
        expect(response).toBe((
            "elx"
          ));
    })

    test('should return andrew ID', () => {
        const query = "Which of the following numbers are primes: 2, 23, 21, 47, 38?";
        const response: string = QueryProcessor(query);
        console.log(response);
        expect(response).toBe((
            "elx"
          ));
    })
});