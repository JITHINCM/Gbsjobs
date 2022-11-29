using GRAMPRO.Platform.Utility.Model;
//using GRAMPRO.Platform.Utility.Model.Recruitment;
using GRAMPRO.Platform.Utility.Model.Authentication;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using GRAMPRO.Platform.Utility.Model.sample;
using GRAMPRO.Platform.Utility.Model.General;
using GRAMPRO.Platform.Utility.Model.news;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;


namespace GRAMPRO.Platform.Utility.Repository
{
    public partial class ApplicationContext : IdentityDbContext<ApplicationUser>
    {
        private IConfigurationRoot _config;
        public ApplicationContext(DbContextOptions<ApplicationContext> options,
         IConfigurationRoot config)
        : base(options)
        {
            _config = config;
        }

    
        //public DbSet<District> District { get; set; }
        //public DbSet<Designation> Designation { get; set; }
        //public DbSet<EntityDetails> EntityDetails { get; set; }
        //public DbSet<EmployeeMaster> EmployeeMaster { get; set; }
        //public DbSet<status> ststusTbl { get; set; }
        //public DbSet<AssetMapping> AssetMapping { get; set; }
        //public DbSet<asset_type> AssetType { get; set; }
        //public DbSet<Assets> Assets { get; set; }
        //public DbSet<BrandDetails> BrandDetails { get; set; }
        //public DbSet<UserRole> UserRole { get; set; }
        //public DbSet<Department> Department { get; set; }
        //public DbSet<Vendor> Vendor { get; set; }
        //public DbSet<RegisterModel> RegisterModel { get; set; }

        public DbSet<tblUserMaster> tblUserMaster { get; set; }
        public DbSet<tblCategoryMaster> tblCategoryMaster { get; set; }
        public DbSet<tblJobMaster> tblJobMaster { get; set; }
        public DbSet<tblJobApplication> tblJobApplication { get; set; }

        
        
       // public DbSet<newR> newR { get; set; }
        // public DbSet<LoginModel> LoginModel { get; set; }
        




        protected override void OnConfiguring(DbContextOptionsBuilder
        optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer(_config["ConnectionStrings:DbConnection"]);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}