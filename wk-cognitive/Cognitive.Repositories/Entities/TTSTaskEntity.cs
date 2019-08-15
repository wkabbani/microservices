using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cognitive.Repositories.Entities
{
    [Table("TTSTasks")]
    public class TTSTaskEntity
    {
        [Key]
        public Guid Id { get; set; }
        public byte Status { get; set; }
        public DateTime? Submitted { get; set; }
        public DateTime? Started { get; set; }
        public DateTime? Completed { get; set; }
        public string Text { get; set; }
        public byte[] Audio { get; set; }
    }
}
