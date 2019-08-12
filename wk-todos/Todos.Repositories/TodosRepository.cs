using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Todos.Core;

namespace Todos.Repositories
{
    public class TodosRepository : ITodosRepository
    {
        private readonly TodoContext _context;

        public TodosRepository(TodoContext context)
        {
            this._context = context;
        }

        public async Task CreateTodoAsync(TodoItem todoItem)
        {
            _context.TodoItems.Add(todoItem);
            await _context.SaveChangesAsync();
        }

        public async Task<bool> DeleteTodoAsync(int id)
        {
            var entity = await _context.TodoItems.FindAsync(id);
            if (entity == null)
            {
                return await Task.FromResult(false);
            }
            _context.TodoItems.Remove(entity);
            await _context.SaveChangesAsync();
            return await Task.FromResult(true);
        }

        public async Task<TodoItem> GetTodoAsync(int id)
        {
            return await _context.TodoItems.FindAsync(id);
        }

        public async Task<IEnumerable<TodoItem>> GetTodosAsync()
        {
            return await this._context.TodoItems.ToListAsync();
        }

        public async Task<bool> UpdateTodoAsync(TodoItem todoItem)
        {
            var entity = await _context.TodoItems.FindAsync(todoItem.Id);
            if (entity == null)
            {
                return await Task.FromResult(false);
            }

            entity.Description = todoItem.Description;
            entity.IsDone = todoItem.IsDone;
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return await Task.FromResult(true);
        }
    }
}
