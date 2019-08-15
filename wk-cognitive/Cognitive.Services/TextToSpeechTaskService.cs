using System;
using System.Threading.Tasks;
using Cognitive.Core.Enums;
using Cognitive.Core.Interfaces;
using Cognitive.Core.Models;
using Hangfire;

namespace Cognitive.Services
{
    public class TextToSpeechTaskService : ITextToSpeechTaskService
    {
        private readonly ITTSTasksRepository _ttsTasksRepository;
        private readonly IBackgroundJobClient _backgroundJobClient;

        public TextToSpeechTaskService(ITTSTasksRepository ttsTasksRepository, IBackgroundJobClient backgroundJobClient)
        {
            this._ttsTasksRepository = ttsTasksRepository;
            this._backgroundJobClient = backgroundJobClient;
        }

        public async Task<TTSTask> SubmitTaskAsync(TTSRequest ttsRequest)
        {
            var ttsTask = new TTSTask
            {
                Submitted = DateTime.UtcNow,
                Status = Status.Submitted,
                Text = ttsRequest.Text,
            };
            var savedTask = await _ttsTasksRepository.AddTTSTaskAsync(ttsTask);

            _backgroundJobClient.Enqueue<ITTSTaskProcessor>(t => t.Process(savedTask));

            return savedTask;
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
