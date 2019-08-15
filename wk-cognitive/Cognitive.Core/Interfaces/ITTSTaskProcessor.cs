using System.Threading.Tasks;
using Cognitive.Core.Models;

namespace Cognitive.Core.Interfaces
{
    public interface ITTSTaskProcessor
    {
        Task ProcessAsync(TTSTask ttsTask);

        void Process(TTSTask ttsTask);
    }
}
