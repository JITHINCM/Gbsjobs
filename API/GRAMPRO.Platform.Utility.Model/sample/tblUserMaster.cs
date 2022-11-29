using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace GRAMPRO.Platform.Utility.Model.sample
{
    [Table("tblUserMaster")]

    public class tblUserMaster
    {
        [Column("User_Id")]
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int User_Id { get; set; }

        [Column("Name")]

        public string Name { get; set; }

        [Column("Email")]

        public string Email { get; set; }
        [Column("Password")]

        public string Password { get; set; }
        [Column("DateOfBirth")]

        public DateTime DateOfBirth { get; set; }
        [Column("Mobile")]

        public string Mobile { get; set; }
        [Column("Skills")]

        public string Skills { get; set; }
        [Column("Gender")]

        public string Gender { get; set; }
        [Column("HighestQualification")]

        public string HighestQualification { get; set; }
        [Column("Experience")]

        public int Experience { get; set; }
        [Column("Address")]

        public string Address { get; set; }
        [Column("IsActive")]

        public bool IsActive { get; set; }
        [Column("IsDelete")]

        public bool IsDelete { get; set; }
        [Column("CreatedDate")]

        public DateTime CreatedDate { get; set; }
        [Column("ModifiedDate")]

        public DateTime ModifiedDate { get; set; }
        [Column("CreatedBy_Id")]

        public int CreatedBy_Id  { get; set; }
        [Column("ModifiedBy_Id")]

        public int ModifiedBy_Id { get; set; }
        [Column("UserType")]

        public string UserType { get; set; }
        [Column("Image")]

         public string Image  { get; set; }
          [Column("UploadCV")]

         public string UploadCV  { get; set; }
    }
}