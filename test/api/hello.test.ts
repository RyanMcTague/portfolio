import httpMocks from 'node-mocks-http';
import handleHello from '../../pages/api/hello'
describe("/api/hello", ()=>{

  const mockAPI = () =>{
    const req = httpMocks.createRequest({
      method: 'GET',
      url: '/api/hello',
    })
    
    const res = httpMocks.createResponse();
    return {req, res}
  }

  it("GET returns a 200 response", async()=>{
    const { req, res} = mockAPI()
    handleHello(req, res)
    expect(res.statusCode).toBe(200)
  })

  it("GET returns a correct data", async()=>{
    const { req, res} = mockAPI()
    handleHello(req, res)
    const data = res._getJSONData()
    expect(data.message).toEqual("Hello!")
  })
})