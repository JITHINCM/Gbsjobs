
using GRAMPRO.Platform.Utility.Model.sample;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using GRAMPRO.Platform.Utility.Implementation.sample;
using GRAMPRO.Platform.Utility.Model;





namespace GRAMPRO.Platform.Utility.API.Controllers.sample
{

    [ApiController]
    [Route("GBSJobs/")]
    public class SampleController: ControllerBase
    {
            private IWebHostEnvironment _environment;
        private ISampleImplementation _sampleImplementation;
         public SampleController(IWebHostEnvironment environment,
                                     ISampleImplementation sampleImplementation,
                                     IConfigurationRoot config)
        {
            _environment = environment;
            _sampleImplementation = sampleImplementation;
        }
        //--------------------LOgin--------------------------------------
        [HttpPost]
        [Route("v1/login")]
        public IActionResult Login(tblUserMaster tu)
        {
            var result = this._sampleImplementation.Login(tu);
            return Ok(result);
        }



        // [HttpPost]
        // [Route("v1/login details")]
        // public IActionResult Login1(tblUserMaster tu)
        // {
        //     var result = this._sampleImplementation.Login(tu);
        //     return Ok(result);
        // }


        //------------------------user-------------------------------------


         [HttpGet]
        [Route("v1/users")]
        public IActionResult getTbl1Data()
        {
            var result = this._sampleImplementation.getTbl1Data();
            return Ok(result);
        }


        [HttpPost]
         [Route("v1/savedata/")]
        public IActionResult SaveData(tblUserMaster sample)
        {
            var result = this._sampleImplementation.SaveData(sample);
            return Ok(result);
        }

        [HttpDelete]
        [Route("v1/delete/")]
        public IActionResult deleteUser(tblUserMaster sample)
        {
            var result = this._sampleImplementation.deleteUser(sample);
            return Ok(result);
        }

        [HttpPut]
        [Route("v1/update user details")]
        public IActionResult UpdateUser(tblUserMaster sam)
        {
            var result = this._sampleImplementation.UpdateUser(sam);
            return Ok(result);
        }
        //----------------------------------category-------------------------------------------------------
        [HttpGet]
        [Route("v1/Category")]
        public IActionResult getTbl2Data()
        {
            var result = this._sampleImplementation.getTbl2Data();
            return Ok(result);
        }


        [HttpPost]
         [Route("v1/savecategory/")]
        public IActionResult Savecategory(tblCategoryMaster sample)
        {
            var result = this._sampleImplementation.Savecategory(sample);
            return Ok(result);
        }

        [HttpDelete]
        [Route("v1/deletecategory/")]
        public IActionResult deletecategory(tblCategoryMaster sample)
        {
            var result = this._sampleImplementation.deletecategory(sample);
            return Ok(result);
        }



        [HttpPut]
        [Route("v1/update Category")]
        public IActionResult UpdateCategory(tblCategoryMaster sam)
        {
            var result = this._sampleImplementation.UpdateCategory(sam);
            return Ok(result);
        }
        //----------------------------------------------Job -----------------------------------------


        [HttpGet]
        [Route("v1/Job")]
        public IActionResult getTbl3Data()
        {
            var result = this._sampleImplementation.getTbl3Data();
            return Ok(result);
        }


        [HttpPost]
         [Route("v1/savejob/")]
        public IActionResult Savejob(tblJobMaster sample)
        {
            var result = this._sampleImplementation.Savejob(sample);
            return Ok(result);
        }

        [HttpDelete]
        [Route("v1/v1/deletejob/")]
        public IActionResult deletejob(tblJobMaster sample)
        {
            var result = this._sampleImplementation.deletejob(sample);
            return Ok(result);
        }

         [HttpPut]
        [Route("v1/update Job details")]
        public IActionResult UpdateJob(tblJobMaster sam)
        {
            var result = this._sampleImplementation.UpdateJob(sam);
            return Ok(result);
        }
        //------------------------------------------job Application-----------------------------------------



        [HttpGet]
        [Route("v1/Jobapplication")]
        public IActionResult getTbl4Data()
        {
            var result = this._sampleImplementation.getTbl4Data();
            return Ok(result);
        }


        [HttpPost]
         [Route("v1/savejobapplication/")]
        public IActionResult Savejobapplication(tblJobApplication sample)
        {
            var result = this._sampleImplementation.Savejobapplication(sample);
            return Ok(result);
        }

        [HttpDelete]
        [Route("v1/deletejobapplication/")]
        public IActionResult deletejobapplication(tblJobApplication sample)
        {
            var result = this._sampleImplementation.deletejobapplication(sample);
            return Ok(result);
        }

        [HttpPut]
        [Route("v1/update job Applications")]
        public IActionResult UpdateJobApplication(tblJobApplication sam)
        {
            var result = this._sampleImplementation.UpdateJobApplication(sam);
            return Ok(result);
        }
        //--------------------------------- LOGIN ------------------------------------------------------
        // [HttpPost]
        // [Route("login")]
        // public async Task<IActionResult> Login([FromBody] LoginModel model)
        // {
        //     var result = await _sampleImplementation.Login(model);
        //     return Ok(result);
        // }
        


        //----------------------------------------save with update-------------------------------

        


        
    
    }

}