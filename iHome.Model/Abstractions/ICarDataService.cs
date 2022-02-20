using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iHome.Model
{
    public interface ICarDataService<T, U> : IRecordDataService<T>, IRevisionDataService<T, U>, IInspectionDataService<T, U>
        where T : Record
        where U : Record
    {
        List<T> GetByBrand(string brand);
        List<T> GetByType(CarType type);
    }
}
