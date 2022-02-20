using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iHome.Model
{
    public class User : Record
    {
        public User()
        {
            Id = Guid.NewGuid();
        }

        public string Name { get; set; }
        public string EmailAddress { get; set; }
        public string Password { get; set; }
        public string UserName { get; set; }
        public bool IsAdmin { get; set; }
        public bool IsLocked { get; set; }
    }
}
