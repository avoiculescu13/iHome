using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iHome.Model
{
    public interface IRevisionDataService<T, U>  
        where T : Record
        where U : Record
    {
        T RegisterTechnicalRevision(T car, U revision);
    }
}
