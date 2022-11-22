using GRAMPRO.Platform.Utility.Model.General;
using GRAMPRO.Platform.Utility.Model;
using Microsoft.Extensions.Configuration;
using Service.DAL.ConnectionADO;
using System.Linq;
using System.Data;
using Microsoft.EntityFrameworkCore;
using GRAMPRO.Platform.Utility.Repository;
using GRAMPRO.Platform.Utility.Model.sample;
using GRAMPRO.Platform.Utility.Implementation.sample;


namespace GRAMPRO.Platform.Utility.Implementation.sample

{
    public class SampleImplementation : ISampleImplementation
    {
        private Response _response;

        private IConfigurationRoot _config;
        private ApplicationContext _context;
        private IDbConnection con;
        //private readonly UserManager<ApplicationUser> userManager;

        public SampleImplementation(ApplicationContext context, IConfigurationRoot config)
        {
            _context = context ?? throw new System.ArgumentNullException(nameof(context));
            _response = new Response();
            _config = config;

        }


        public Response Login(tblUserMaster tu)
        {
            try
            {

                //var user = await tblUserMaster.FindByNameAsync(model.Name);
                var checkLogin = this._context.tblUserMaster.Where(x => x.Email == tu.Email && x.Password == tu.Password).ToList();

                // var password = this._context.tblUserMaster.FirstOrDefault(x => x.Password == tu.Password);

                if (checkLogin.Count > 0)
                {
                    //return tu.User_Id;
                    _response.Success = true;
                    _response.Message = "login success";

                }
                return _response;

            }


            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }

        public Response getTbl1Data()
        {
            try
            {
                _response.Data = this._context.tblUserMaster.ToList();
                _response.Success = true;
                _response.Message = "success";
                return _response;
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }



        public Response SaveData(tblUserMaster sample)
        {
            try
            {
                this._context.tblUserMaster.Add(sample);
                this._context.SaveChanges();
                _response.Success = true;
                return _response;
                //var existingData = this._context.tblUserMaster.UserType;
                // return existingData;
                //_response.success=sample.UserType;
                //  var s= sample .UserType;
                // return s;
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;

            }
        }



        public Response deleteUser(tblUserMaster sample)
        {
            try
            {
                if (sample.User_Id > 0)
                {
                    var existingAsset = this._context.tblUserMaster.FirstOrDefault(x => x.User_Id == sample.User_Id);
                    if (existingAsset != null)
                    {
                        //existingAsset.Email=-1;
                        existingAsset.IsDelete = true;
                        existingAsset.ModifiedBy_Id = 2;
                        existingAsset.ModifiedDate = System.DateTime.UtcNow;
                        this._context.Entry(existingAsset).State = EntityState.Modified;
                        this._context.SaveChanges();


                    }

                }

                _response.Success = true;
                return _response;
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }

        public Response UpdateUser(tblUserMaster sam)
        {
            try
            {
                if (sam.User_Id > 0)
                {
                    var existingData = this._context.tblUserMaster.FirstOrDefault(x => x.User_Id == sam.User_Id);
                    if (existingData != null)
                    {
                        // existingData.Name = sam.Name;
                        // existingData.Email = sam.Email;
                        // existingData.Mobile = sam.Mobile;
                        // existingData.Password = sam.Password;
                        // existingData.Skills = sam.Skills;
                        // existingData.Gender = sam.Gender;
                        // existingData.HighestQualification = sam.HighestQualification;
                        // existingData.Experience = sam.Experience;
                        // existingData.Address = sam.Address;
                         existingData.UploadCV = sam.UploadCV;
                        _response.Success = true;
                    }
                    else
                    {
                        _response.Success = false;
                        _response.Message = "Data not found";
                        return _response;
                    }

                }
                this._context.SaveChanges();
                return _response;
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }




        //--------------------------------------Category------------------------------------------------------

        public Response getTbl2Data()
        {
            try
            {
                _response.Data = this._context.tblCategoryMaster.ToList();
                _response.Success = true;
                _response.Message = "success";
                return _response;
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }



        public Response Savecategory(tblCategoryMaster sample)
        {
            try
            {


                this._context.tblCategoryMaster.Add(sample);
                this._context.SaveChanges();
                _response.Success = true;
                return _response;
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }



        public Response deletecategory(tblCategoryMaster sample)
        {
            try
            {
                if (sample.Category_Id > 0)
                {
                    var existingAsset = this._context.tblCategoryMaster.FirstOrDefault(x => x.Category_Id == sample.Category_Id);
                    if (existingAsset != null)
                    {
                        //existingAsset.Email=-1;
                        existingAsset.IsDelete = true;
                        //existingAsset.ModifiedBy_Id = 2;
                        existingAsset.ModifiedDate = System.DateTime.UtcNow;
                        this._context.Entry(existingAsset).State = EntityState.Modified;
                        this._context.SaveChanges();


                    }

                }

                _response.Success = true;
                return _response;
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }


        public Response UpdateCategory(tblCategoryMaster sam)
        {
            try
            {
                if (sam.Category_Id > 0)
                {
                    var existingData = this._context.tblCategoryMaster.FirstOrDefault(x => x.Category_Id == sam.Category_Id);
                    if (existingData != null)
                    {
                        //existingData.CategoryName = sam.CategoryName;
                        existingData.Openings = sam.Openings;
                        //existingData.IsDelete = sam.IsDelete;
                        _response.Success = true;
                    }
                    else
                    {

                        _response.Success = false;
                        _response.Message = "data not found";

                    }

                }
                this._context.SaveChanges();
                return _response;
                // else
                // {
                //    // sam.CreatedBy_Id = 1;
                //     sam.CreatedDate = System.DateTime.UtcNow;
                //     this._context.tblCategoryMaster.Add(sam);


                // }

            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }
        //--------------------------------------------JOB Details-----------------------------------------------
        public Response getTbl3Data()
        {
            try
            {
                _response.Data = this._context.tblJobMaster.ToList();
                _response.Success = true;
                _response.Message = "success";
                return _response;
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }



        public Response Savejob(tblJobMaster sample)
        {
            try
            {


                this._context.tblJobMaster.Add(sample);
                this._context.SaveChanges();
                _response.Success = true;
                return _response;
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }



        public Response deletejob(tblJobMaster sample)
        {
            try
            {
                if (sample.Job_Id > 0)
                {
                    var existingAsset = this._context.tblJobMaster.FirstOrDefault(x => x.Job_Id == sample.Job_Id);
                    if (existingAsset != null)
                    {
                        //existingAsset.Email=-1;
                        existingAsset.IsDelete = true;
                        //existingAsset.ModifiedBy_Id = 2;
                        existingAsset.ModifiedDate = System.DateTime.UtcNow;
                        this._context.Entry(existingAsset).State = EntityState.Modified;
                        this._context.SaveChanges();


                    }

                }

                _response.Success = true;
                return _response;
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }


        public Response UpdateJob(tblJobMaster sam)
        {
            try
            {
                if (sam.Job_Id > 0)
                {
                    var existingData = this._context.tblJobMaster.FirstOrDefault(x => x.Job_Id == sam.Job_Id);
                    if (existingData != null)
                    {
                        existingData.JobName = sam.JobName;
                        existingData.Openings = sam.Openings;
                        existingData.Category_Id = sam.Category_Id;
                        existingData.Description = sam.Description;
                        existingData.Experience = sam.Experience;
                        existingData.Skills = sam.Skills;
                        existingData.CreatedBy_Id = sam.CreatedBy_Id;
                        existingData.IsDelete = sam.IsDelete;
                        existingData.LastDateForApplying = sam.LastDateForApplying;
                        _response.Success = true;
                    }
                    else
                    {
                        _response.Success = false;
                        _response.Message = "Data not found";
                        return _response;

                    }

                }
                this._context.SaveChanges();
                return _response;
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }

        //-------------------------------------------job application----------------------------------------

        public Response getTbl4Data()
        {
            try
            {
                _response.Data = this._context.tblJobApplication.ToList();
                _response.Success = true;
                _response.Message = "success";
                return _response;
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }



        public Response Savejobapplication(tblJobApplication sample)
        {
            try
            {


                this._context.tblJobApplication.Add(sample);
                this._context.SaveChanges();
                _response.Success = true;
                return _response;
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }



        public Response deletejobapplication(tblJobApplication sample)
        {
            try
            {
                if (sample.Application_Id > 0)
                {
                    var existingAsset = this._context.tblJobApplication.FirstOrDefault(x => x.Application_Id == sample.Application_Id);
                    if (existingAsset != null)
                    {
                        //existingAsset.Email=-1;
                        existingAsset.IsDelete = true;
                        //existingAsset.ModifiedBy_Id = 2;
                        existingAsset.ModifiedDate = System.DateTime.UtcNow;
                        this._context.Entry(existingAsset).State = EntityState.Modified;
                        this._context.SaveChanges();


                    }

                }

                _response.Success = true;
                return _response;
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }
        public Response UpdateJobApplication(tblJobApplication sam)
        {
            try
            {
                if (sam.Application_Id > 0)
                {
                    var existingData = this._context.tblJobApplication.FirstOrDefault(x => x.Application_Id == sam.Application_Id);
                    if (existingData != null)
                    {
                        existingData.Response = sam.Response;
                        _response.Success = true;

                    }
                    else
                    {
                        _response.Success = false;
                        _response.Message = "Data not found";
                    }

                }
                this._context.SaveChanges();
                return _response;
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }



        // public Response Login1(tblUserMaster tu)
        // {
        //     try
        //     {

        //         //var user = await tblUserMaster.FindByNameAsync(model.Name);
        //         //----------------var check = this._context.tblUserMaster.FirstOrDefault( tu=> tu.UserType);
        //         var check = this._context.tblUserMaster.FirstOrDefault(tu.Email);
        //         // var password = this._context.tblUserMaster.FirstOrDefault(x => x.Password == tu.Password);

        //         if (check.Length > 0)
        //         {
        //             _response.Success = true;
        //             _response.Message=check;
        //             //_response.Message = "login success";


        //             //quare { x => x*x } and the second is used to find which values are divisible by 3 { x => (x % 3) == 0 }.
        //         }
        //         return _response;

        //     }


        //     catch (System.Exception)
        //     {
        //         _response.Success = false;
        //         return _response;
        //     }
        // }






        //------------------------------------ LOGIN -----------------------------------------------

        //  public async Task<Response> Login(LoginModel model)
        // {
        //     try
        //     {
        //         var user = await userManager.FindByNameAsync(model.Username);
        //         if (user != null && await userManager.CheckPasswordAsync(user, model.Password))
        //         {
        //             var userRoles = await userManager.GetRolesAsync(user);

        //             var authClaims = new List<Claim>
        //         {
        //             new Claim(ClaimTypes.Name, user.UserName),
        //             new Claim("UserId", user.Id),
        //             //new Claim("CompanyId", Convert.ToString(user.CompanyId)),
        //             //new Claim("UserRoleId",Convert.ToString(user.UserRoleId)),
        //             new Claim("EntityId",Convert.ToString(user.EntityId)),

        //             new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        //         };

        //             foreach (var userRole in userRoles)
        //             {
        //                 authClaims.Add(new Claim(ClaimTypes.Role, userRole));
        //             }

        //             var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

        //             var token = new JwtSecurityToken(
        //                 issuer: _configuration["JWT:ValidIssuer"],
        //                 audience: _configuration["JWT:ValidAudience"],
        //                 expires: DateTime.Now.AddDays(3),
        //                 claims: authClaims,
        //                 signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
        //                 );
        //             _response.Success = true;
        //             _response.Data = new RegisterModel
        //             {
        //                 Username = model.Username,
        //                 DisplayName = user.DisplayName,
        //                 PhoneNumber = user.PhoneNumber,

        //                 Token = new JwtSecurityTokenHandler().WriteToken(token)
        //             };
        //             return _response;
        //         }
        //         _response.Success = false;
        //         _response.Data = new AuthResponse { Status = "Failed", Message = "Internal server error, please try again.!" };
        //         return _response;
        //     }
        //     catch (System.Exception)
        //     {
        //         _response.Success = false;
        //         return _response;
        //     }

        // }






        //------------------------------------- simple login  --------------------------------------------




    }

}

