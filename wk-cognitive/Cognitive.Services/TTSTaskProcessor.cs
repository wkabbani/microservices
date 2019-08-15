using System.Threading.Tasks;
using Cognitive.Core.Interfaces;
using Cognitive.Core.Models;

namespace Cognitive.Services
{
    public class TTSTaskProcessor : ITTSTaskProcessor
    {
        private readonly ITextToSpeechTaskService _textToSpeechTaskService;
        private readonly ITextToSpeechService _textToSpeechService;

        public TTSTaskProcessor(ITextToSpeechTaskService textToSpeechTaskService, ITextToSpeechService textToSpeechService)
        {
            this._textToSpeechService = textToSpeechService;
            this._textToSpeechTaskService = textToSpeechTaskService;
        }

        public async Task ProcessAsync(TTSTask ttsTask)
        {
            await _textToSpeechTaskService.StartTaskAsync(ttsTask.TaskId);

            var speech = await _textToSpeechService.TextToSpeechAsync(ttsTask.Text);

            await _textToSpeechTaskService.CompleteTaskAsync(ttsTask.TaskId, speech);
        }

        public void Process(TTSTask ttsTask)
        {
            ProcessAsync(ttsTask).Wait();
        }
    }
}
