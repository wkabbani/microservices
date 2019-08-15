using System;
using System.Threading.Tasks;
using Cognitive.Core.Interfaces;
using Cognitive.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace Cognitive.Api.Controllers
{
    [Route("api/v1/tts")]
    [ApiController]
    public class TTSController : ControllerBase
    {
        private readonly ITextToSpeechTaskService _textToSpeechTaskService;

        public TTSController(ITextToSpeechTaskService textToSpeechTaskService)
        {
            this._textToSpeechTaskService = textToSpeechTaskService;
        }

        // Post /tts
        /// <summary>
        /// Creates a text-to-speech task
        /// </summary>
        /// <returns>
        /// TTSTask object . 
        /// </returns>
        ///<param name="ttsRequest" >text to speech request</param>
        [HttpPost]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public async Task<ActionResult<TTSTask>> SubmitText([FromBody]TTSRequest ttsRequest)
        {
            if (!ttsRequest.IsValid(ModelState))
            {
                return BadRequest(ttsRequest.GetErrors());
            }
            var result = await _textToSpeechTaskService.SubmitTaskAsync(ttsRequest);
            return Ok(result);
        }


        // GET /tts/{id}
        /// <summary>
        /// Returns a TTSTask object
        /// </summary>
        /// <returns>
        /// TTSTask object. 
        /// </returns>
        ///<param name="id" >The id of the text-to-speech task.</param>
        [HttpGet("{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public async Task<ActionResult<TTSTask>> Get(string id)
        {
            Guid.TryParse(id, out Guid taskId);
            if (taskId == Guid.Empty)
            {
                return BadRequest();
            }

            var result = await _textToSpeechTaskService.GetTTSTaskById(taskId);
            if (result == null)
            {
                NotFound();
            }
            return Ok(result);
        }
    }
}
