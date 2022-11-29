using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GRAMPRO.Platform.Utility.Model.news
{
    public class newapplicationsbyuser
    {

        public int Job_Id { get; set; }
        public string CategoryName { get; set; }
        public int User_Id { get; set; }
        public string JobName { get; set; }
        public DateTime AppliedDate { get; set; }
        public string Status { get; set; }

    } //Job_Id,,,Openings,Description,Experience,Skills,LastDateForApplying,ContactNumber,SalaryPackage,

}




