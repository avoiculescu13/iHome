using iHome.Data;
using iHome.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iHome.Services
{
    public class UserService: IUserService<User, LoginContext>
    {
        private readonly IUserDataService<User> _userDataService;

        public UserService()
        {
            _userDataService = new UserDataService();
        }

        public  LoginContext Authenticate(string userName, string password)
        {
            return _userDataService.Authenticate(userName, password);
        }

        public LoginContext Register(User user)
        {
            return _userDataService.Register(user);
        }
    }
}
