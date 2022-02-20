using iHome.Model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace iHome.Data
{
    public class UserDataService : IUserDataService<User>
    {
        public LoginContext Authenticate(string userName, string password)
        {
            var user = DatabaseContext.Instance.Users.Where(r=>r.UserName == userName).FirstOrDefault();
            if(user != null)
            {
                if(user.Password != password)
                {
                    return new LoginContext(user, LoginResponseType.WrongCredentials);
                }

                if (user.IsLocked)
                {
                    return new LoginContext(user, LoginResponseType.LockedUser);
                }

                return new LoginContext(user, LoginResponseType.Success);
            }
            return new LoginContext(null, LoginResponseType.UnknowUser);
        }

        public LoginContext Register(User user)
        {
            DatabaseContext.Instance.Users.Add(user);
            return new LoginContext(user, LoginResponseType.Success);
        }

        public bool Delete(User record)
        {
            throw new NotImplementedException();
        }

        public bool DeleteById(Guid id)
        {
            throw new NotImplementedException();
        }

        public List<User> GetAll()
        {
            throw new NotImplementedException();
        }

        public User GetById(Guid id)
        {
            throw new NotImplementedException();
        }

        public User Insert(User record)
        {
            throw new NotImplementedException();
        }

        

        public User Update(User record)
        {
            throw new NotImplementedException();
        }
    }
}
