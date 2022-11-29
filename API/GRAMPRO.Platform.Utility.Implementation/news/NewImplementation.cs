using System.Linq;
using System.Data;
using GRAMPRO.Platform.Utility.Model;
using GRAMPRO.Platform.Utility.Model.sample;
using GRAMPRO.Platform.Utility.Repository;
using Microsoft.Extensions.Configuration;
using Service.DAL.ConnectionADO;
using GRAMPRO.Platform.Utility.Model.news;
using GRAMPRO.Platform.Utility.Implementation.news;
//using Service.Repository.Dashboard;
using Service.Repository.news;
using Microsoft.EntityFrameworkCore;



namespace GRAMPRO.Platform.Utility.Implementation.news
{
    public class NewImplementation : INewImplementation
    {
        private Response _response;
        private IConfigurationRoot _config;
        private ApplicationContext _context;
        private InewRepository _newRepository;
        private IDbConnection con;

        public NewImplementation(ApplicationContext context, IConfigurationRoot config, InewRepository newRepository)
        {
            _context = context ?? throw new System.ArgumentNullException(nameof(context));
            _response = new Response();
            _config = config;
            _newRepository = newRepository;
        }

         public Response Getjobdetailsbyid(int JobId)
        {
            try
            {
                using (con = DataContextFactory.GetDataContext(_config))
                {
                    using (IDbTransaction trn = con.BeginTransaction())
                    {
                        _response.Success = true;
                        _newRepository.DbConnection = con;
                        _newRepository.DbTransaction = trn;
                        _response.Data = _newRepository.Getjobdetailsbyid(JobId);
                        trn.Commit();
                        return _response;
                    }
                }
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }


        public Response Getuserdetailsbyid(string email)
        {
            try
            {
                using (con = DataContextFactory.GetDataContext(_config))
                {
                    using (IDbTransaction trn = con.BeginTransaction())
                    {
                        _response.Success = true;
                        _newRepository.DbConnection = con;
                        _newRepository.DbTransaction = trn;
                        _response.Data = _newRepository.Getuserdetailsbyid(email);
                        trn.Commit();
                        return _response;
                    }
                }
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }


        public Response GetOpeningsCount()
        {
            try
            {
                using (con = DataContextFactory.GetDataContext(_config))
                {
                    using (IDbTransaction trn = con.BeginTransaction())
                    {
                        _response.Success = true;
                        _newRepository.DbConnection = con;
                        _newRepository.DbTransaction = trn;
                        _response.Data = _newRepository.GetOpeningsCount();
                        trn.Commit();
                        return _response;
                    }
                }
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }

        public Response Getuserapplication(string status)
        {
            try
            {
                using (con = DataContextFactory.GetDataContext(_config))
                {
                    using (IDbTransaction trn = con.BeginTransaction())
                    {
                        _response.Success = true;
                        _newRepository.DbConnection = con;
                        _newRepository.DbTransaction = trn;
                        _response.Data = _newRepository.Getuserapplication(status);
                        trn.Commit();
                        return _response;
                    }
                }
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }





        public Response Getapplicationsbyuser(int userid)
        {
            try
            {
                using (con = DataContextFactory.GetDataContext(_config))
                {
                    using (IDbTransaction trn = con.BeginTransaction())
                    {
                        _response.Success = true;
                        _newRepository.DbConnection = con;
                        _newRepository.DbTransaction = trn;
                        _response.Data = _newRepository.Getapplicationsbyuser(userid);
                        trn.Commit();
                        return _response;
                    }
                }
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }





         public Response GetUsertype(string email)
        {
            try
            {
                using (con = DataContextFactory.GetDataContext(_config))
                {
                    using (IDbTransaction trn = con.BeginTransaction())
                    {
                        _response.Success = true;
                        _newRepository.DbConnection = con;
                        _newRepository.DbTransaction = trn;
                        _response.Data = _newRepository.GetUsertype(email);
                        trn.Commit();
                        return _response;
                    }
                }
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }

        public Response Getsearch(string filter)
        {
            try
            {
                if (string.IsNullOrEmpty(filter))
                {
                    _response.Data = this._context.tblJobMaster.Where(x => x.IsDelete == false).ToList();
                }
                else
                {
                    _response.Data = this._context.tblJobMaster.Where(x => x.JobName.Contains(filter)).ToList();
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



         public Response Getreport()
        {
            try
            {
                using (con = DataContextFactory.GetDataContext(_config))
                {
                    using (IDbTransaction trn = con.BeginTransaction())
                    {
                        _response.Success = true;
                        _newRepository.DbConnection = con;
                        _newRepository.DbTransaction = trn;
                        _response.Data = _newRepository.Getreport();
                        trn.Commit();
                        return _response;
                    }
                }
            }
            catch (System.Exception)
            {
                _response.Success = false;
                return _response;
            }
        }
        //  public Response GetStatusResponse(int User_Id)
        // {
        //     try
        //     {
        //         using (con = DataContextFactory.GetDataContext(_config))
        //         {
        //             using (IDbTransaction trn = con.BeginTransaction())
        //             {
        //                 _response.Success = true;
        //                 _newRepository.DbConnection = con;
        //                 _newRepository.DbTransaction = trn;
        //                 _response.Data = _newRepository.GetStatusResponse(User_Id);
        //                 trn.Commit();
        //                 return _response;
        //             }
        //         }
        //     }
        //     catch (System.Exception)
        //     {
        //         _response.Success = false;
        //         return _response;
        //     }
        // }
        public Response GetStatusResponse(tblJobApplication news)
        {
            try
            {
                if (news.Application_Id > 0)
                {
                    var existingAsset = this._context.tblJobApplication.FirstOrDefault(x => x.Application_Id == news.Application_Id);
                    if (existingAsset != null)
                    {
                       
                        existingAsset.Status = news.Status;
                        existingAsset.Response = news.Response;
                        
                    }

                }
                else
                {
                    //news.IsDelete ==false;
                   // news.CreatedDate = System.DateTime.UtcNow;
                    this._context.tblJobApplication.Add(news);

                   }

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








    }
}