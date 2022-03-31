using iHome.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace iHome.Data
{
    public class DatabaseContext : DbContext
    {
        public DbSet<UserActivity> UserActivities { get; set; }
        public DbSet<Car> Cars { get; set; }
        public DbSet<PeriodicTechnicalRevision> TechnicalRevisions { get; set; }
        public DbSet<PeriodicTechnicalInspection> TechnicalInspections { get; set; }
        public DbSet<User> Users { get; set; }

        public DatabaseContext() : base()
        {
            this.Database.EnsureCreated();

            //Insert admin user
            if (this.Users.Where(r => r.IsAdmin == true).FirstOrDefault() == null)
            {
                this.Users.Add(new User()
                {
                    DateCreated = DateTime.Now,
                    DateModified = DateTime.Now,
                    EmailAddress = "voiculescu.andrei88@gmail.com",
                    IsAdmin = true,
                    IsLocked = false,
                    FullName = "Andrei Voiculescu",
                    Password = "Welcome#1",
                    UserName = "avoiculescu"
                });
                this.SaveChanges();
            }
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(@"Server=.\SqlExpress;Database=iHome;User Id=sa;Password=minegold;");
            options.EnableSensitiveDataLogging(true);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Car>()
                .HasMany(r => r.TechnicalInspection)
                .WithOne().OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Car>()
                .HasMany(r => r.TechnicalRevision)
                .WithOne().OnDelete(DeleteBehavior.Cascade);
            ;                
                
        }
    }
}
