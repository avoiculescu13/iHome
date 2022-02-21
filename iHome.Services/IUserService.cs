using iHome.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iHome.Services
{
    public interface IUserService<T, U>
        where T : User
        where U : UseContext
    {
        U Authenticate(string username, string password);
        U Register(T user);
    }
}
