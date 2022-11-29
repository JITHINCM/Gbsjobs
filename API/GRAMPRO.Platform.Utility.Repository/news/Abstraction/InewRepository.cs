using System.Collections.Generic;
using GRAMPRO.Platform.Utility.Model.news;
using Service.Repository.Core;

namespace Service.Repository.news
{
    public interface InewRepository : IDBRepository
    {
        IEnumerable<newR> Getjobdetailsbyid(int JobId);
        IEnumerable<newuser> Getuserdetailsbyid(string email);
        IEnumerable<newcount> GetOpeningsCount();
        IEnumerable<newuserapplication> Getuserapplication(string status);
        IEnumerable<newapplicationsbyuser> Getapplicationsbyuser(int userid);
        IEnumerable<newusertype> GetUsertype(string email);
        IEnumerable<newsearch> Getsearch(string filter);
        IEnumerable<newreport> Getreport();
        //IEnumerable<statusresponse> GetStatusResponse(int User_Id);



    }
}