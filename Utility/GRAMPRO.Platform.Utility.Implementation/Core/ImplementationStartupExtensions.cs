//using GRAMPRO.Platform.Utility.Implementation.Recruitment;
//using GRAMPRO.Platform.Utility.Implementation.Authentication;
using GRAMPRO.Platform.Utility.Implementation.sample;
using GRAMPRO.Platform.Utility.Implementation.news;
using GRAMPRO.Platform.Utility.Repository;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace GRAMPRO.Platform.Utility.Implementation
{
    public static class ImplementationStartupExtensions
    {
        public static IServiceCollection AddCloudscribeCoreImplementation(this IServiceCollection services, IConfigurationRoot configuration)
        {
            services.AddCloudscribeCoreRepository(configuration);
            // services.AddScoped<IEsafHoldingsImplementation, EsafHoldingsImplementation>();
            // services.AddScoped<ICandidateImplementation, CandidateImplementation>();
            // services.AddScoped<IGeneralImplementation, GeneralImplementation>();
            // // services.AddScoped<IUserImplementation, UserImplementation>();
            // services.AddScoped<IEmployeeImplementation, EmployeeImplementation>();
            // services.AddScoped<IMappingAssetImplementation, MappingAssetImplementation>();
            // services.AddScoped<IAssettypeImplementation, AssettypeImplementation>();
            // services.AddScoped<IAssetImplementation, AssetImplementation>();
            // services.AddScoped<IDashboardImplementation, DashboardImplementation>();
            // services.AddScoped<ISearchImplementation, SearchImplementation>();
            // services.AddScoped<IAuthenticateImplementation, AuthenticateImplementation>();
            // services.AddScoped<IDepartmentImplementation, DepartmentImplementation>();
            // services.AddScoped<IVendorImplementation, VendorImplementation>();
            services.AddScoped<ISampleImplementation,SampleImplementation>();
            services.AddScoped<INewImplementation,NewImplementation>();

            












            return services;
        }
    }
}