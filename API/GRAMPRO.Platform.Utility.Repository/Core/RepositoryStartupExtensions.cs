using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
//using Service.Repository.Asset;
//using Service.Repository.Dashboard;
//using Service.Repository.DepartmentR;
using Service.Repository.news;
//using GRAMPRO.Platform.Utility.Model;
using GRAMPRO.Platform.Utility.Model.news;
//using GRAMPRO.Platform.Utility.Model.sample;
using GRAMPRO.Platform.Utility.Model.Authentication;
using Microsoft.AspNetCore.Identity;


namespace GRAMPRO.Platform.Utility.Repository
{
    public static class RepositoryStartupExtensions
    {
        public static IServiceCollection AddCloudscribeCoreRepository(this IServiceCollection services, IConfigurationRoot configuration)
        {
            services.AddDbContext<ApplicationContext>(ServiceLifetime.Scoped);
            // services.AddScoped<IEmployeeRepository, EmployeeRepository>();
            // services.AddScoped<IAssetTypeRepository, AssetTypeRepository>();
            // services.AddScoped<IAssetRepository, AssetRepository>();
            // services.AddScoped<IDashboardRepository, DashboardRepository>();
            // services.AddScoped<IMappingRepository, MappingRepository>();
            // services.AddScoped<IAuthenticateRepository, AuthenticateRepository>();
            // services.AddScoped<IDepartmentRepository, DepartmentRepository>();
            // services.AddScoped<IVendorRepository, VendorRepository>();
            services.AddScoped<InewRepository, newRepository>();


            //For Identity
            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationContext>()
                .AddDefaultTokenProviders();

            return services;
        }
    }
}