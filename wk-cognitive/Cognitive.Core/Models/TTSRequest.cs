using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Cognitive.Core.Models
{
    public class TTSRequest
    {
        [Required]
        public string Text { get; set; }

        private Dictionary<string, List<string>> modelErrors;

        public Dictionary<string, List<string>> GetErrors()
        {
            if (modelErrors != null && modelErrors.Any())
            {
                return modelErrors;
            }
            return null;
        }

        public bool IsValid(ModelStateDictionary ModelState)
        {
            if (string.IsNullOrEmpty(Text) || string.IsNullOrWhiteSpace(Text))
            {
                ModelState.AddModelError("Text", "Text is required.");
            }

            modelErrors = ModelState.Where(x => x.Value.Errors.Any()).ToDictionary(
                kvp => kvp.Key,
                kvp => kvp.Value.Errors.Select(e => e.ErrorMessage).ToList()
            );
            return ModelState.IsValid;
        }
    }
}
