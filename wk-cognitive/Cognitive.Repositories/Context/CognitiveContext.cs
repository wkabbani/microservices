using Microsoft.EntityFrameworkCore;
using Cognitive.Repositories.Entities;

namespace Cognitive.Repositories.Context
{
    public class CognitiveContext : DbContext
    {
        public CognitiveContext(DbContextOptions<CognitiveContext> options)
            : base(options)
        {
        }

        public DbSet<TTSTaskEntity> TTSTasks { get; set; }
    }
}