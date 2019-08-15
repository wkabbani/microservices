using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Cognitive.Repositories.Context;
using Cognitive.Core.Interfaces;
using Cognitive.Core.Models;
using Cognitive.Repositories.Entities;
using System;
using Cognitive.Core.Enums;

namespace Cognitive.Repositories
{
    public class TTSTasksRepository : ITTSTasksRepository
    {
        private readonly CognitiveContext _context;

        public TTSTasksRepository(CognitiveContext context)
        {
            this._context = context;
        }

        public async Task<TTSTask> AddTTSTaskAsync(TTSTask ttsTask)
        {
            var entity = new TTSTaskEntity
            {
                Id = Guid.NewGuid(),
                Status = (byte)ttsTask.Status,
                Submitted = ttsTask.Submitted,
                Started = ttsTask.Started,
                Completed = ttsTask.Completed,
                Text = ttsTask.Text,
                Audio = ttsTask.Audio,
            };
            await _context.TTSTasks.AddAsync(entity);
            await _context.SaveChangesAsync();
            ttsTask.TaskId = entity.Id;
            return ttsTask;
        }

        public async Task<TTSTask> GetTTSTaskAsync(Guid id)
        {
            var entity = await _context.TTSTasks.FindAsync(id);

            if (entity == null) return null;

            var ttsTask = new TTSTask
            {
                TaskId = entity.Id,
                Submitted = entity.Submitted,
                Started = entity.Started,
                Completed = entity.Completed,
                Status = (Status)entity.Status,
                Text = entity.Text,
                Audio = entity.Audio,
            };
            return ttsTask;
        }

        public async Task UpdateTTSTaskAsync(TTSTask ttsTask)
        {
            var entity = await _context.TTSTasks.FindAsync(ttsTask.TaskId);
            if (entity != null)
            {
                entity.Started = ttsTask.Started;
                entity.Submitted = ttsTask.Submitted;
                entity.Completed = ttsTask.Completed;
                entity.Status = (byte)ttsTask.Status;
                entity.Text = ttsTask.Text;
                entity.Audio = ttsTask.Audio;
                _context.Entry(entity).State = EntityState.Modified;
                await _context.SaveChangesAsync();
            }
        }
    }
}
