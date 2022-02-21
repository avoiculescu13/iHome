using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iHome.Model
{
    public class LoginResponseType : ResponseType
    {
        private LoginResponseType(int code, string message)
        {
            _code = code;
            _message = message;
        }

        public static LoginResponseType Success 
        {
            get
            {
                return new LoginResponseType(1, "Success");
            }
        }
        public static LoginResponseType UnknowUser
        {
            get
            {
                return new LoginResponseType(2, "Unknow User");
            }
        }
        public static LoginResponseType WrongCredentials
        {
            get
            {
                return new LoginResponseType(4, "Wrong Credentials");
            }
        }
        public static LoginResponseType LockedUser
        {
            get
            {
                return new LoginResponseType(8, "Locked User");
            }
        }


    }
}
