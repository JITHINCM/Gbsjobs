using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace GRAMPRO.Platform.Utility.Model.sample
{
    [Table("tblJobApplication")]

    public class tblJobApplication
    {
        [Column("Application_Id")]
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int Application_Id { get; set; }

        [Column("User_Id")]
        public int User_Id { get; set ;}
        [Column("Category_Id")]
        public int Category_Id { get; set; }

        [Column("Email")]

        public string Email { get; set; }
        [Column("JobName")]

        public string JobName { get; set; }
        
        [Column("AppliedDate")]

        public DateTime AppliedDate { get; set; }
        [Column("Response")]

        public string Response { get; set; }
        [Column("Status")]

        public string Status { get; set; }
        [Column("IsActive")]

        public bool IsActive { get; set; }
        [Column("IsDelete")]

        public bool IsDelete { get; set; }
        [Column("CreatedDate")]

        public DateTime CreatedDate { get; set; }
        [Column("ModifiedDate")]

        public DateTime ModifiedDate { get; set; }
         [Column("Job_Id")]

        public int Job_Id { get; set; }

        [Column("ModifiedBy_Id")]
        public int ModifiedBy_Id { get; set; }
        [Column("CreatedBy_Id")]

        public int CreatedBy_Id  { get; set; }

        // 

         
    }
}