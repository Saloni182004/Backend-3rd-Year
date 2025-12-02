const math=require("./math");
/**
 * {
 * multiply,
 * sub,
 * modulo
 * }
 */
// module mocking
jest.mock("./math")
/**
 * {
 * multiply:jest.fun(),
 * sub:jest.fun(),
 * modulo:jest.fun()
 * }
 */
test("multiplication of 2 and 3 is 6",()=>{
    math.multiply.mockReturnValueOnce(6);
    expect(math.multiply(2,3)).toBe(6);
})
test("subtraction of 2 and 3 is -1",()=>{
    math.sub.mockReturnValueOnce(-1);
    expect(math.sub(2,3)).toBe(-1);
})
test("modulo of 2 and 3 is 0",()=>{
    math.modulo.mockReturnValueOnce(2);
    expect(math.modulo(2,3)).toBe(2);
})