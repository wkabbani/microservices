using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Todos.Core;
using Todos.Repositories;

namespace Todos.Services
{
    public class TodosService : ITodosService
    {
        private readonly ITodosRepository _todosRepository;

        public TodosService(ITodosRepository todosRepository)
        {
            this._todosRepository = todosRepository;
        }

        public Task CreateTodoAsync(TodoItem todoItem)
        {
            return _todosRepository.CreateTodoAsync(todoItem);
        }

        public Task<bool> DeleteTodoAsync(int id)
        {
            return _todosRepository.DeleteTodoAsync(id);
        }

        public Task<TodoItem> GetTodoAsync(int id)
        {
            return _todosRepository.GetTodoAsync(id);
        }

        public Task<IEnumerable<TodoItem>> GetTodosAsync()
        {
            return _todosRepository.GetTodosAsync();
        }

        public Task<bool> UpdateTodoAsync(TodoItem todoItem)
        {
            return _todosRepository.UpdateTodoAsync(todoItem);
        }
    }
}
