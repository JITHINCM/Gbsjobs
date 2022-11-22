using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace GRAMPRO.Platform.Utility.Model.sample
{
    [Table("tblJobMaster")]

    public class tblJobMaster
    {
        [Column("Job_Id")]
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int Job_Id { get; set; }

        [Column("Category_Id")]

        public int Category_Id { get; set; }

        [Column("JobName")]

        public string JobName { get; set; }
        [Column("Openings")]

        public int Openings { get; set; }
        [Column("Description")]

        public string Description { get; set; }
        [Column("Experience")]

        public int Experience { get; set; }
        [Column("Skills")]

        public string Skills { get; set; }
        [Column("LastDateForApplying")]

        public DateTime LastDateForApplying { get; set; }

        [Column("JobType")]

        public string JobType { get; set; }
        [Column("SalaryPackage")]

        public string SalaryPackage { get; set; }
        [Column("ContactNumber")]

        public string ContactNumber { get; set; }
        [Column("IsActive")]

        public bool IsActive { get; set; }
        [Column("IsDelete")]

        public bool IsDelete { get; set; }
        [Column("CreatedDate")]

        public DateTime CreatedDate { get; set; }
        [Column("ModifiedDate")]

        public DateTime ModifiedDate { get; set; }

        [Column("ModifiedBy_Id")]

        public int ModifiedBy_Id { get; set; }
        [Column("CreatedBy_Id")]

        public int CreatedBy_Id  { get; set; }
         
    }
}