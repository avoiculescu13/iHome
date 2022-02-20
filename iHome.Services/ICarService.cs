using iHome.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iHome.Services
{
    public  interface ICarService<T, U>
        where T : Record
        where U : Record
    {
        T Insert(T obj);
        T Update(T obj);
        IList<T> RetriveAll();
        T RetriveById(Guid id);
        T AssignRevision(Guid id, U revision);
        T AssignInspection(Guid id, U inspection);
    }
}
