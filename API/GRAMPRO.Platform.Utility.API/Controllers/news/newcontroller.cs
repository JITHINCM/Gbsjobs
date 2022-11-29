using GRAMPRO.Platform.Utility.Implementation.news;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using GRAMPRO.Platform.Utility.Model.news;
using GRAMPRO.Platform.Utility.Model.sample;

namespace GRAMPRO.Platform.Utility.API.Controllers.news
{

    [ApiController]
    [Route("GBSJobs/")]
    public class newController : ControllerBase
    {
        private IWebHostEnvironment _environment;
        private INewImplementation _newImplementation;
        public newController(IWebHostEnvironment environment,
                                     INewImplementation newImplementation,
                                     IConfigurationRoot config)
        {
            _environment = environment;
            _newImplementation = newImplementation;
        }
        [HttpPost]
        [Route("v2/getjobdetails")]
        public IActionResult Getjobdetailsbyid(int JobId)
        {
            var result = this._newImplementation.Getjobdetailsbyid(JobId);
            return Ok(result);
        }

        [HttpPost]
        [Route("v2/getuseretails")]
        public IActionResult Getuserdetailsbyid(string email)
        {
            var result = this._newImplementation.Getuserdetailsbyid(email);
            return Ok(result);
        }



        [HttpGet]
        [Route("v2/getopeningscount")]
        public IActionResult GetOpeningsCount()
        {
            var result = this._newImplementation.GetOpeningsCount();
            return Ok(result);
        }


        [HttpGet]
        [Route("v2/getuserapplications")]
        public IActionResult Getuserapplication(string status)
        {
            var result = this._newImplementation.Getuserapplication(status);
            return Ok(result);
        }



        [HttpGet]
        [Route("v2/getappliedjobsbyUser")]
        public IActionResult Getapplicationsbyuser(int userid)
        {
            var result = this._newImplementation.Getapplicationsbyuser(userid);
            return Ok(result);
        }
        [HttpGet]
        [Route("v2/getusertype")]
        public IActionResult GetUsertype(string email)
        {
            var result = this._newImplementation.GetUsertype(email);
            return Ok(result);
        }



        [HttpGet]
        [Route("v2/search")]
        public IActionResult Getsearch(string filter)
        {
            var result = this._newImplementation.Getsearch(filter);
            return Ok(result);
        }


        [HttpGet]
        [Route("v2/report")]
        public IActionResult Getreport()
        {
            var result = this._newImplementation.Getreport();
            return Ok(result);
        }
        [HttpPut]
        [Route("v2/GetStatusResponse")]
        public IActionResult GetStatusResponse(tblJobApplication news)
        {
            var result = this._newImplementation.GetStatusResponse(news);
            return Ok(result);
        }
        


    }
}