const request = require("supertest");
const app = require('./routes/User');
const mongoose = require('mongoose');


describe("Test the root path", () => {
test("It should response the POST method", () => {
const response = request(app).post("http://localhost:8000/User/add").send ({
"Name": "Obaid",
"Email": "obaid",
"Age": 12,
"Contact": 123
})
expect(response.statusCode).toBe(200);
})

test("task3", () => {
    const response = request(app).post("http://localhost:8000/User/add").send ({
    "Name": "Obaid",
    
    })
    expect(response.statusCode).toBe(200);
    })

    test("task2", () => {
        const response = request(app).delete("http://localhost:8000/User/:id").send ({
        "id": "123456",
        
        })
        expect(response.statusCode).toBe(200);
        })
})