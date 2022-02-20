using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iHome.Model
{
    public interface IUserDataService<T> : IRecordDataService<T>
        where T: Record
    {
        LoginContext Authenticate(string userName, string password);
        LoginContext Register(T user);
    }
}
