using System.Collections.Generic;
using System.Threading.Tasks;
using Todos.Core;

namespace Todos.Repositories
{
    public interface ITodosRepository
    {
        Task<IEnumerable<TodoItem>> GetTodosAsync();
        Task<TodoItem> GetTodoAsync(int id);
        Task CreateTodoAsync(TodoItem todoItem);
        Task<bool> UpdateTodoAsync(TodoItem todoItem);
        Task<bool> DeleteTodoAsync(int id);
    }
}
