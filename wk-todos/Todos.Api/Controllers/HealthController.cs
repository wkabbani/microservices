using Microsoft.AspNetCore.Mvc;

namespace Todos.Api.Controllers
{
    [Route("system")]
    [ApiController]
    public class HealthController : ControllerBase
    {
        [HttpGet("health")]
        public ActionResult GetHealth()
        {
            return Ok();
        }

        [HttpGet("readiness")]
        public ActionResult GetReadiness()
        {
            return Ok();
        }
    }
}
