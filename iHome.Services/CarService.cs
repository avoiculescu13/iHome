using iHome.Data;
using iHome.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ExceptionServices;

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
            return _carDataService.Insert(obj);
        }

        public Car Update(Car obj)
        {
            return _carDataService.Update(obj);
        }

        public void Delete(Guid id)
        {
            _carDataService.DeleteById(id);
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
