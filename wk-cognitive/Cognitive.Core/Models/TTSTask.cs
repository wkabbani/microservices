using System;
using Cognitive.Core.Enums;

namespace Cognitive.Core.Models
{
    public class TTSTask
    {
        public Guid TaskId { get; set; }
        public Status Status { get; set; }
        public DateTime? Submitted { get; set; }
        public DateTime? Started { get; set; }
        public DateTime? Completed { get; set; }
        public string Text { get; set; }
        public byte[] Audio { get; set; }
    }
}
