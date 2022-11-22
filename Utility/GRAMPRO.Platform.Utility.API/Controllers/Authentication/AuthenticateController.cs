// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Mvc;
// using GRAMPRO.Platform.Utility.Implementation.Authentication;
// using GRAMPRO.Platform.Utility.Model.Authentication;

// namespace GRAMPRO.Platform.Utility.API.Controllers.Authentication
// {
// [ApiController]
//     [Route("authenticate/ret/hCw230b862-99250-4f71-a1271-f8bqxvvbner121967d35d/candidate/AOaemvOPybXzswaLnMtcT3gMn3sp3/")]
//     public class AuthenticateController : ControllerBase
//     {
//         private readonly IAuthenticateImplementation _authenticateImplementation;

//         public AuthenticateController(IAuthenticateImplementation authenticateImplementation)
//         {
//             _authenticateImplementation = authenticateImplementation;
//         }

//         [HttpPost]
//         [Route("login")]
//         public async Task<IActionResult> Login([FromBody] LoginModel model)
//         {
//             var result = await _authenticateImplementation.Login(model);
//             return Ok(result);
//         }

//     }
    
// }