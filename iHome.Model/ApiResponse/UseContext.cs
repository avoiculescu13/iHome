using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iHome.Model
{
    public class UseContext
    {
        public User User { get; set; }
        public ResponseType ResponseType { get; set; }

        public UseContext(User user, ResponseType responseType)
        {
            User = user;
            ResponseType = responseType;
        }
    }
}
