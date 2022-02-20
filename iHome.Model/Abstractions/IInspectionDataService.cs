using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iHome.Model
{
    public interface IInspectionDataService<T, U>  
        where T : Record
        where U : Record
    {
        T RegisterTechnicalInspection(T car, U inspection);
    }
}
