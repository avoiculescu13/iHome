using iHome.Model;
using iHome.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace iHome.Web.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {

        private readonly ILogger<UserController> _logger;
        private readonly IUserService<User, LoginContext> _userService;

        public UserController(ILogger<UserController> logger, IUserService<User, LoginContext> userService)
        {
            _logger = logger;
            _userService = userService;
        }

        [HttpPost]
        [Route("register")]
        public LoginContext Register(User user)
        {
            return _userService.Register(user);
        }

        [HttpPost]
        [Route("authenticate")]
        public LoginContext Authenticate(User user)
        {
            LoginContext context = _userService.Authenticate(user.UserName, user.Password);

            return context;
        }
    }
}
