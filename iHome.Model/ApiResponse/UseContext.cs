using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace iHome.Model
{
    public class UseContext
    {
        [JsonIgnore]
        public ContextType ContextType { get; set; }
        public User User { get; set; }
        public AuthenticationResponseType ResponseType { get; set; }

        public UseContext(User user, AuthenticationResponseType responseType)
        {
            User = user;
            ResponseType = responseType;
        }
    }
}
