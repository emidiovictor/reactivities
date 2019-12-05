using Microsoft.EntityFrameworkCore;

namespace Persistense.DataContext
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

    }
}