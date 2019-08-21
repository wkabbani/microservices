using System;
using System.Threading.Tasks;
using Cognitive.Core.Interfaces;
using Cognitive.Core.Models;
using Grpc.Core;

namespace Cognitive.Services
{
    public class TextToSpeechService : ITextToSpeechService
    {
        private readonly ServiceSettings _serviceSettings;

        public TextToSpeechService(ServiceSettings serviceSettings)
        {
            this._serviceSettings = serviceSettings;
        }

        public async Task<byte[]> TextToSpeechAsync(string text)
        {
            var grpcServerAddress = $"{this._serviceSettings.GrpcServerHost}:{this._serviceSettings.GrpcServerPort}";
            Console.WriteLine($"Connecting to grpc server on {grpcServerAddress}");
            Channel channel = new Channel(grpcServerAddress, ChannelCredentials.Insecure);
            var client = new Tts.TextToSpeech.TextToSpeechClient(channel);

            var reply = await client.TTSAsync(new Tts.Text { Text_ = text });
            await channel.ShutdownAsync();

            return reply.Audio.ToByteArray();
        }
    }
}
