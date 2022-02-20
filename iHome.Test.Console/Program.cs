using iHome.Data;
using iHome.Model;
using iHome.Services;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;

namespace iHome.Test.Console
{
    class Program
    {
        static void Main(string[] args)
        {

            Car c
                 = new Car();
            c.Brand = "CarBrand";
            DatabaseContext.Instance.Cars.Add(c);
            DatabaseContext.Instance.SaveChanges();


            User user = new User();
            user.UserName = "ABC";

            DatabaseContext.Instance.Users.Add(user);
            DatabaseContext.Instance.SaveChanges();


            


            //PeriodicTechnicalRevision revision = new PeriodicTechnicalRevision();
            //revision.ServiceGarage = "Toyota Showroom";
            //revision.Kilometers = 30000;
            //revision.Date = DateTime.Now;
            //revision.Price = 700;

            //c = CarService.AddRevisionForCar(c.Id, revision);

            //PeriodicTechnicalInspection inspection = new PeriodicTechnicalInspection();
            //inspection.ServiceGarage = "Toyota Showroom";
            //inspection.Kilometers = 31000;
            //inspection.Date = DateTime.Now.AddDays(-20);
            //inspection.Price = 150;

            //c = CarService.AddInspectionForCar(c.Id, inspection);


        }
    }
}
