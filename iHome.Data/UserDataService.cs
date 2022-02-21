using iHome.Model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace iHome.Data
{
    public class UserDataService : IUserDataService<User>
    {
        public UseContext Authenticate(string userName, string password)
        {
            var user = DatabaseContext.Instance.Users.Where(r => r.UserName == userName).FirstOrDefault();
            if (user != null)
            {
                if (user.Password != password)
                {
                    return new UseContext(user, LoginResponseType.WrongCredentials);
                }

                if (user.IsLocked)
                {
                    return new UseContext(user, LoginResponseType.LockedUser);
                }

                return new UseContext(user, LoginResponseType.Success);
            }
            return new UseContext(null, LoginResponseType.UnknowUser);
        }

        public UseContext Register(User user)
        {
            if (DatabaseContext.Instance.Users.Where(r => r.UserName.Equals(user.UserName)).FirstOrDefault() != null)
            {
                return new UseContext(user, RegisterResponseType.DuplicateUserName);
            }

            if (DatabaseContext.Instance.Users.Where(r => r.EmailAddress.Equals(user.EmailAddress)).FirstOrDefault() != null)
            {
                return new UseContext(user, RegisterResponseType.DuplicateEmailAddress);
            }

            DatabaseContext.Instance.Users.Add(user);
            DatabaseContext.Instance.SaveChanges();
            return new UseContext(user, RegisterResponseType.Success);
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
