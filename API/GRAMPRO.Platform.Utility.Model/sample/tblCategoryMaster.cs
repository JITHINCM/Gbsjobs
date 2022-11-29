using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace GRAMPRO.Platform.Utility.Model.sample
{
    [Table("tblCategoryMaster")]

    public class tblCategoryMaster
    {
        [Column("Category_Id")]
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int Category_Id { get; set; }

        [Column("CategoryName")]

        public string CategoryName { get; set; }

        [Column("Openings")]

        public int Openings { get; set; }
         [Column("CategoryImage")]

        public string CategoryImage { get; set; }
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