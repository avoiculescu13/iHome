using iHome.Lib;
using iHome.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace iHome.Data
{
    public class CarDataService : ICarDataService<Car, Record>
    {
        public bool Delete(Car car)
        {
            DatabaseContext.Instance.Cars.Remove(car);
            DatabaseContext.Instance.SaveChanges();
            return true;
        }

        public bool DeleteById(Guid id)
        {
            DatabaseContext.Instance.Cars.Remove(GetById(id));
            DatabaseContext.Instance.SaveChanges();
            return true;
        }

        public List<Car> GetAll()
        {
            return DatabaseContext.Instance.Cars.ToList();
        }

        public List<Car> GetByBrand(string brand)
        {
            return DatabaseContext.Instance.Cars.Where(r => r.Brand == brand).ToList();
        }
        public Car GetById(Guid id)
        {
            return DatabaseContext.Instance.Cars.Where(r => r.Id == id).FirstOrDefault();
        }

        public List<Car> GetByType(CarType type)
        {
            return DatabaseContext.Instance.Cars.Where(r => r.Type == type).ToList();
        }

        public Car Insert(Car car)
        {
            DatabaseContext.Instance.Cars.Add(car);
            DatabaseContext.Instance.SaveChanges();
            return car;
        }

        public Car RegisterTechnicalInspection(Car car, Record inspection)
        {
            var c = DatabaseContext.Instance.Cars.Include(r=>r.TechnicalInspection).FirstOrDefault(d=>d.Id == car.Id);

            car.TechnicalInspection.Add((PeriodicTechnicalInspection)inspection);
            c = car;
            DatabaseContext.Instance.Entry(car).State = EntityState.Modified;
            //DatabaseContext.Instance.Cars.Update(car);
            DatabaseContext.Instance.SaveChanges();

            return car;
        }

        public Car RegisterTechnicalRevision(Car car, Record revision)
        {
            car.TechnicalRevision.Add((PeriodicTechnicalRevision)revision);
            DatabaseContext.Instance.Cars.Update(car);
            DatabaseContext.Instance.SaveChanges();

            return car;
        }

        public Car Update(Car record)
        {
            DatabaseContext.Instance.Cars.Update(record);
            return record;
        }
    }
}
