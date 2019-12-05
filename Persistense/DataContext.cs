using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistense
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Activity> Activity { get; set; }

    }
}