using EmployeeManagementWithJQuery.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagementWithJQuery.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }
    }
}
