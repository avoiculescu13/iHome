using iHome.Data;
using iHome.Model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace iHome.Services
{
    public class CarService : ICarService<Car, Record>
    {
        private readonly ICarDataService<Car, Record> _carDataService;

        public CarService()
        {
            _carDataService = new CarDataService();
        }

        public Car Insert(Car obj)
        {
            obj.DateCreated = DateTime.Now;
            obj.DateModified = DateTime.Now;

            return _carDataService.Insert(obj);
        }

        public Car Update(Car obj)
        {
            obj.DateModified = DateTime.Now;
            return _carDataService.Update(obj);
        }

        public IList<Car> RetriveAll()
        {
            return _carDataService.GetAll();
        }

        public Car RetriveById(Guid id)
        {
            return _carDataService.GetById(id);
        }

        public Car AssignRevision(Guid id, Record revision)
        {
            Car car = _carDataService.GetById(id);
            _carDataService.RegisterTechnicalRevision(car, revision);
            return car;
        }

        public Car AssignInspection(Guid id, Record inspection)
        {
            Car car = _carDataService.GetById(id);
            _carDataService.RegisterTechnicalInspection(car, inspection);
            return car;
        }
    }
}
