using iHome.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace iHome.Data
{
    public class UserDataService : IUserDataService<User>
    {
        public UseContext Authenticate(string userName, string password)
        {
            User user = null;
            using (DatabaseContext context = new DatabaseContext())
            {
                user = context.Users.Where(r => r.UserName == userName).AsNoTracking().FirstOrDefault();
            }

            if (user != null)
            {
                if (user.Password != password)
                {
                    return new UseContext(user, AuthenticationResponseType.Instance.WrongCredentials);
                }

                if (user.IsLocked)
                {
                    return new UseContext(user, AuthenticationResponseType.Instance.LockedUser);
                }

                return new UseContext(user, AuthenticationResponseType.Instance.Success);
            }
            return new UseContext(null, AuthenticationResponseType.Instance.UnknowUser);
        }

        public UseContext Register(User user)
        {
            User usr = null;
            using (DatabaseContext context = new DatabaseContext())
            {
                usr = context.Users.Where(r => r.UserName.Equals(user.UserName)).AsNoTracking().FirstOrDefault();
                if (usr != null)
                {
                    return new UseContext(user, AuthenticationResponseType.Instance.DuplicateUserName);
                }

                usr = context.Users.Where(r => r.EmailAddress.Equals(user.EmailAddress)).AsNoTracking().FirstOrDefault();
                if (usr != null)
                {
                    return new UseContext(user, AuthenticationResponseType.Instance.DuplicateEmailAddress);
                }

                user.RecordId = Guid.NewGuid();
                user.DateCreated = DateTime.Now;
                user.DateModified = DateTime.Now;

                context.Users.Add(user);
                context.SaveChanges();
            }

            return new UseContext(user, AuthenticationResponseType.Instance.Success);
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

        public User GetByUserName(string userName)
        {
            using (DatabaseContext context = new DatabaseContext())
            {
                return context.Users.Where(r => r.UserName == userName).AsNoTracking().FirstOrDefault();
            }
        }
    }
}
