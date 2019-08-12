using Microsoft.AspNetCore.Mvc;

namespace Todos.Api.Controllers
{
    [Route("api/v1")]
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
