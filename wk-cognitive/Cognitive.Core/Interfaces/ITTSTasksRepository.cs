using System;
using System.Threading.Tasks;
using Cognitive.Core.Models;

namespace Cognitive.Core.Interfaces
{
    public interface ITTSTasksRepository
    {
        Task<TTSTask> GetTTSTaskAsync(Guid id);
        Task<TTSTask> AddTTSTaskAsync(TTSTask ttsTask);
        Task UpdateTTSTaskAsync(TTSTask ttsTask);
    }
}
