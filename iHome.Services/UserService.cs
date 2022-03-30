using iHome.Data;
using iHome.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ExceptionServices;
using System.Text;
using System.Threading.Tasks;

namespace iHome.Services
{
    public class UserService : IUserService<User, UseContext>
    {
        private readonly IUserDataService<User> _userDataService;
        private readonly IUserActivityDataService<UserActivity> _userActvDataService;

        public UserService()
        {
            _userDataService = new UserDataService();
            _userActvDataService = new UserActivityDataService();
        }

        public UseContext Authenticate(string userName, string password)
        {
            try
            {
                UseContext context = _userDataService.Authenticate(userName, password);

                if (context.ResponseType == AuthenticationResponseType.Instance.Success)
                {
                    var activity = BuildUserActivity(context);
                    _userActvDataService.Insert(activity);
                }

                return context;
            }
            catch (Exception ex)
            {
                ExceptionDispatchInfo.Capture(ex).Throw();
            }
            return new UseContext(null, null);
        }

        public UseContext Register(User user)
        {
            try
            {
                UseContext context = _userDataService.Register(user);

                if (context.ResponseType == AuthenticationResponseType.Instance.Success)
                {
                    var activity = BuildUserActivity(context);
                    _userActvDataService.Insert(activity);
                }
            }
            catch (Exception ex)
            {
                ExceptionDispatchInfo.Capture(ex).Throw();
            }
            return new UseContext(null, null);
        }

        private UserActivity BuildUserActivity(UseContext context)
        {
            UserActivity actv = new UserActivity();
            actv.Action = context.ContextType.ToString();
            actv.EntityId = context.User.RecordId;
            actv.ActionStatus = Status.Success.ToString();
            actv.EntityType = "User";
            actv.UserName = context.User.UserName;

            return actv;
        }
    }
}
