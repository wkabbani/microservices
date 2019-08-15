
using System;
using System.Threading.Tasks;
using Cognitive.Core.Models;

namespace Cognitive.Core.Interfaces
{
    public interface ITextToSpeechTaskService
    {
        Task<TTSTask> SubmitTaskAsync(TTSRequest ttsRequest);
        Task StartTaskAsync(Guid id);
        Task CompleteTaskAsync(Guid id, byte[] audio);
        Task<TTSTask> GetTTSTaskById(Guid taskId);
    }
}
