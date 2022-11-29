using GRAMPRO.Platform.Utility.Model;
using GRAMPRO.Platform.Utility.Model.sample;
using GRAMPRO.Platform.Utility.Model.General;
namespace GRAMPRO.Platform.Utility.Implementation.sample
{
    public interface ISampleImplementation
    {
        Response getTbl1Data();
        Response SaveData(tblUserMaster sample);
        Response deleteUser(tblUserMaster sample);
        Response getTbl2Data();
        Response Savecategory(tblCategoryMaster sample);
        Response deletecategory(tblCategoryMaster sample);
        Response getTbl3Data();
        Response Savejob(tblJobMaster sample);
        Response deletejob(tblJobMaster sample);
        Response UpdateJob(tblJobMaster sam );
        Response getTbl4Data();
        Response Savejobapplication(tblJobApplication sample);
        Response deletejobapplication(tblJobApplication sample);

        //----------------------------------------------LOG IN ---------------------------------------
        //Task<Response> Login(LoginModel model);
        Response Login(tblUserMaster tu);
        //Response getuserData(tblUserMaster Name);
       // Response Login1(tblUserMaster tu);
        Response UpdateUser(tblUserMaster sam);
        Response UpdateJobApplication(tblJobApplication sam );
        Response UpdateCategory(tblCategoryMaster sam );

    }
}