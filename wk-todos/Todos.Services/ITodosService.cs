using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Todos.Core;

namespace Todos.Services
{
    public interface ITodosService
    {
        Task<IEnumerable<TodoItem>> GetTodos();
        Task<TodoItem> GetTodo(int id);
        Task<TodoItem> CreateTodo(TodoItem todoItem);
        Task<bool> UpdateTodo(TodoItem todoItem);
        Task<bool> DeleteTodo(int id);
    }
}
