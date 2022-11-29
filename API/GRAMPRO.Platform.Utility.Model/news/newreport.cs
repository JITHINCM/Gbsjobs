using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GRAMPRO.Platform.Utility.Model.news
{
    public class newreport
    {
        
        public int Application_Id { get; set; }
        public int Category_Id { get; set; }
        public string CategoryName { get; set; }
        public int Job_Id { get; set; }
        public string JobName { get; set; }
        public string Needed_Skills { get; set; }
        public int Needed_Experience { get; set; }
        public int User_Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string User_Skills { get; set; }
        public int User_Experience { get; set; }
        public DateTime AppliedDate { get; set; }
        public DateTime LastDateForApplying { get; set; }
        public string Response { get; set; }
        public string Status { get; set; }
        //   public string JobType { get; set; }

    } //Job_Id,,,Openings,Description,Experience,Skills,LastDateForApplying,ContactNumber,SalaryPackage,

}




