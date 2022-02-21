using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iHome.Model
{
    public class RegisterResponseType : ResponseType
    {
        private RegisterResponseType(int code, string message)
        {
            _code = code;
            _message = message;
        }

        public static RegisterResponseType Success 
        {
            get
            {
                return new RegisterResponseType(1, "Success");
            }
        }
        public static RegisterResponseType DuplicateUserName
        {
            get
            {
                return new RegisterResponseType(2, "This user name is already taken.");
            }
        }

        public static RegisterResponseType DuplicateEmailAddress
        {
            get
            {
                return new RegisterResponseType(4, "This email address is already registered in the system.");
            }
        }
    }
}
