using System.Threading.Tasks;

namespace Cognitive.Core.Interfaces
{
    public interface ITextToSpeechService
    {
        Task<byte[]> TextToSpeechAsync(string text);
    }
}
