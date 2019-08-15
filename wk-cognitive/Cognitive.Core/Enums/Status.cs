using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Cognitive.Core.Enums
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum Status
    {
        Submitted,
        Started,
        Completed
    }
}
