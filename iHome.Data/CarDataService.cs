using iHome.Lib;
using iHome.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Runtime.ExceptionServices;
using System.Text;
using System.Threading.Tasks;

namespace iHome.Data
{
    public class CarDataService : ICarDataService<Car, Record>
    {
        private readonly IUserActivityDataService<UserActivity> _userActvDataService;

        public CarDataService()
        {
            _userActvDataService = new UserActivityDataService();
        }

        public bool Delete(Car car)
        {
            try
            {
                using(DatabaseContext dbContext = new DatabaseContext())
                {
                    dbContext.Cars.Remove(car);
                    dbContext.SaveChanges();
                }

                _userActvDataService.Insert(BuildUserActivity(car, "Delete", "Success"));

                return true;
            }
            catch (Exception ex)
            {
                _userActvDataService.Insert(BuildUserActivity(car, "Delete", "Failed"));
                ExceptionDispatchInfo.Capture(ex).Throw();
            }
            return false;
        }

        public bool DeleteById(Guid id)
        {
            return this.Delete(GetById(id));
        }

        public List<Car> GetAll()
        {
            using (DatabaseContext dc = new DatabaseContext())
            {
                return dc.Cars.AsNoTracking().ToList();
            }
        }

        public List<Car> GetByBrand(string brand)
        {
            using (DatabaseContext dc = new DatabaseContext())
            {
                return dc.Cars.Where(r => r.Brand == brand).AsNoTracking().ToList();
            }
        }
        public Car GetById(Guid id)
        {
            using (DatabaseContext dc = new DatabaseContext())
            {
                return dc.Cars.Where(r => r.RecordId == id).AsNoTracking().FirstOrDefault();
            }
        }

        public List<Car> GetByType(CarType type)
        {
            using (DatabaseContext dc = new DatabaseContext())
            {
                return dc.Cars.Where(r => r.Type == type).AsNoTracking().ToList();
            }
        }

        public Car Insert(Car car)
        {
            try
            {
                car.RecordId = Guid.NewGuid();
                car.DateModified = DateTime.Now;
                car.DateCreated = DateTime.Now;

                using (DatabaseContext dc = new DatabaseContext())
                {
                    dc.Cars.Add(car);
                    dc.SaveChanges();
                }

                _userActvDataService.Insert(BuildUserActivity(car, "Insert", "Success"));
            }
            catch (Exception ex)
            {
                _userActvDataService.Insert(BuildUserActivity(car, "Insert", "Failed"));
                ExceptionDispatchInfo.Capture(ex).Throw();
            }

            return car;
        }

        public Car RegisterTechnicalInspection(Car car, Record inspection)
        {
            inspection.RecordId = Guid.NewGuid();
            inspection.DateModified = DateTime.Now;
            inspection.DateCreated = DateTime.Now;

            using (DatabaseContext dc = new DatabaseContext())
            {
                //var c = dc.Cars.Include(r => r.TechnicalInspection).FirstOrDefault(d => d.RecordId == car.RecordId);

                car.TechnicalInspection.Add((PeriodicTechnicalInspection)inspection);
                dc.Entry(car).State = EntityState.Modified;
                dc.SaveChanges();
            }

            return car;
        }

        public Car RegisterTechnicalRevision(Car car, Record revision)
        {
            revision.RecordId = Guid.NewGuid();
            revision.DateModified = DateTime.Now;
            revision.DateCreated = DateTime.Now;

            using (DatabaseContext dc = new DatabaseContext())
            {
                car.TechnicalRevision.Add((PeriodicTechnicalRevision)revision);
                dc.Entry(car).State = EntityState.Modified;
                dc.SaveChanges();
            }

            return car;
        }

        public Car Update(Car record)
        {
            record.DateModified = DateTime.Now;
            using (DatabaseContext dc = new DatabaseContext())
            {
                dc.Cars.Update(record);
                dc.SaveChanges();
            }

            return record;
        }


        private UserActivity BuildUserActivity(Record record, string action, string actionStatus)
        {
            UserActivity result = new UserActivity();
            result.ActionStatus = actionStatus;
            result.Action = action;
            result.EntityId = record != null ? record.RecordId : Guid.Empty;
            result.EntityType = record.GetType().Name;
            result.UserName = (record as Car).UserName;

            return result;
        }
    }
}
