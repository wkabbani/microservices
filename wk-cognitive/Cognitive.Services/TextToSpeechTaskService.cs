using System;
using System.Threading.Tasks;
using Cognitive.Core.Enums;
using Cognitive.Core.Interfaces;
using Cognitive.Core.Models;

namespace Cognitive.Services
{
    public class TextToSpeechTaskService : ITextToSpeechTaskService
    {
        private readonly ITTSTasksRepository _ttsTasksRepository;

        public TextToSpeechTaskService(ITTSTasksRepository ttsTasksRepository)
        {
            this._ttsTasksRepository = ttsTasksRepository;
        }

        public async Task<TTSTask> SubmitTaskAsync(TTSRequest ttsRequest)
        {
            var ttsTask = new TTSTask
            {
                Submitted = DateTime.UtcNow,
                Status = Status.Submitted,
                Text = ttsRequest.Text,
            };
            return await _ttsTasksRepository.AddTTSTaskAsync(ttsTask);
        }

        public async Task StartTaskAsync(Guid id)
        {
            var task = await _ttsTasksRepository.GetTTSTaskAsync(id);

            task.Started = DateTime.UtcNow;
            task.Status = Status.Started;

            await _ttsTasksRepository.UpdateTTSTaskAsync(task);
        }

        public async Task CompleteTaskAsync(Guid id, byte[] audio)
        {
            var task = await _ttsTasksRepository.GetTTSTaskAsync(id);

            task.Completed = DateTime.UtcNow;
            task.Status = Status.Completed;
            task.Audio = audio;

            await _ttsTasksRepository.UpdateTTSTaskAsync(task);
        }

        public Task<TTSTask> GetTTSTaskById(Guid taskId)
        {
            return _ttsTasksRepository.GetTTSTaskAsync(taskId);
        }
    }
}
