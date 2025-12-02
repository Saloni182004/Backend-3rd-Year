const user=require("./model/user.model")
const request=require("supertest")
const app=require("./server")
jest.mock("./model/user.model")
describe("POST /api/users/register",()=>{
    it("should return user already exist if email is s@gmail.com",async()=>{
        user.findOne.mockResolvedValueOnce(true);
        let response=await request(app).post("/api/users/register").send({
            name:"Saloni",
            email:"s@gmail.com",
            password:"1234"
        })
        expect(response.body.message).toBe("User already exists")
    })

    it("should create a new user with email s@gmail.com",async()=>{
        user.findOne.mockResolvedValueOnce(false);
        user.create.mockResolvedValueOnce({
            name:"Saloni",
            email:"s@gmail.com",
            password:"2345"
        })
        let response=await request(app).post("/api/users/register").send({
            name:"Saloni",
            email:"s@gmail.com",
            password:"2345"
        })
        expect(response.body.message).toBe("user register successfully");
        expect(response.body.data).toEqual({
            name:"Saloni",
            email:"s@gmail.com",
            password:"2345"
        })
    })
})