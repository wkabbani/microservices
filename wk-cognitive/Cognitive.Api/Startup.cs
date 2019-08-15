using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cognitive.Core.Interfaces;
using Cognitive.Core.Models;
using Cognitive.Repositories;
using Cognitive.Repositories.Context;
using Cognitive.Services;
using Hangfire;
using Hangfire.MemoryStorage;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Cognitive.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            // setup hangfire
            services.AddHangfire(x => x.UseMemoryStorage());
            services.AddSingleton<IBackgroundJobClient>(new BackgroundJobClient(new MemoryStorage()));
            services.AddHangfireServer();

            // Register the IOptions object
            services.Configure<ServiceSettings>(Configuration.GetSection("ServiceSettings"));

            // Explicitly register the settings object by delegating to the IOptions object
            services.AddSingleton(resolver =>
                resolver.GetRequiredService<IOptions<ServiceSettings>>().Value);

            // register services
            services.AddScoped<ITextToSpeechService, TextToSpeechService>();
            services.AddScoped<ITextToSpeechTaskService, TextToSpeechTaskService>();
            services.AddScoped<ITTSTasksRepository, TTSTasksRepository>();
            services.AddScoped<ITTSTaskProcessor, TTSTaskProcessor>();

            // setup EF
            string dbName = Guid.NewGuid().ToString();
            services.AddDbContext<CognitiveContext>(options => options.UseInMemoryDatabase(dbName));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            // setup hangfire dashboard
            app.UseHangfireDashboard();

            // app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
