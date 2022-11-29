using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GRAMPRO.Platform.Utility.Model.news
{
    public class newuser
    {
        // public int Job_Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Mobile { get; set; }
        public string Skills { get; set; }
        public string Gender { get; set; }
        public string Address { get; set; }
        public int Experience { get; set; }
        public string HighestQualification { get; set; }
        public string Image { get; set; }
        public string UploadCV { get; set; }
        public string UserType { get; set; }
        //   public string SalaryPackage { get; set; }
        //   public string JobType { get; set; }

    } //Job_Id,,,Openings,Description,Experience,Skills,LastDateForApplying,ContactNumber,SalaryPackage,

}




