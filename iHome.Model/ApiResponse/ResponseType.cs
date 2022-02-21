using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iHome.Model
{
    public class ResponseType
    {
        protected static int _code;
        protected static string _message;

        public int Code { get => _code; }
        public string Message { get => _message; }
    }
}
