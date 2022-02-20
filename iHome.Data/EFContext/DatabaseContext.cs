using iHome.Model;
using Microsoft.EntityFrameworkCore;
using System;

namespace iHome.Data
{
    public class DatabaseContext : DbContext
    {
        private static DatabaseContext _instance;

        public static DatabaseContext Instance
        {
            get => _instance;
        }

        static DatabaseContext()
        {
            _instance = new DatabaseContext();
        }

        public DbSet<Car> Cars { get; set; }
        public DbSet<PeriodicTechnicalRevision> TechnicalRevisions { get; set; }
        public DbSet<PeriodicTechnicalInspection> TechnicalInspections { get; set; }
        public DbSet<User> Users { get; set; }

        private DatabaseContext() : base()
        {
            this.Database.EnsureCreated();

            //Inser admin user
            this.Users.Add(new User()
            {
                DateCreated = DateTime.Now,
                DateModified = DateTime.Now,
                EmailAddress = "voiculescu.andrei88@gmail.com",
                IsAdmin = true,
                IsLocked = false,
                Name = "Andrei Voiculescu",
                Password = "Welcome#1",
                UserName = "avoiculescu"
            });
            this.SaveChanges();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(@"Server=.\SqlExpress;Database=iHome;User Id=sa;Password=minegold;");
        }
    }
}
