using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iHome.Model
{
    public class LoginContext
    {
        public User User { get; set; }
        public LoginResponseType LoginResponseType { get; set; }

        public LoginContext(User user, LoginResponseType responseType)
        {
            User = user;
            LoginResponseType = responseType;
        }
    }
}
