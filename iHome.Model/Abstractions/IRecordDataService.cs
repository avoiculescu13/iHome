using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace iHome.Model
{
    public interface IRecordDataService<T>
        where T : Record
    {
        T Insert(T record);
        T Update(T record);
        bool Delete(T record);
        bool DeleteById(Guid id);
        List<T> GetAll();
        T GetById(Guid id);
    }
}
