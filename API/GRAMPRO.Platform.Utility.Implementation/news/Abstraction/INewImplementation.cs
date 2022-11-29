using GRAMPRO.Platform.Utility.Model;
using GRAMPRO.Platform.Utility.Model.news;
using GRAMPRO.Platform.Utility.Model.sample;

namespace GRAMPRO.Platform.Utility.Implementation.news
{
    public interface INewImplementation
    {
        Response Getjobdetailsbyid(int JobId);
        Response Getuserdetailsbyid(string email);
        Response GetOpeningsCount();
        Response Getuserapplication(string status);
        Response Getapplicationsbyuser(int userid);
        Response GetUsertype(string email);
        Response Getsearch(string email);
        Response  Getreport();
        //Response GetStatusResponse(int User_Id);
        Response GetStatusResponse(tblJobApplication news);
        



    }
}