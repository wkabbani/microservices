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

        public Task<TodoItem> CreateTodo(TodoItem todoItem)
        {
            return _todosRepository.CreateTodo(todoItem);
        }

        public Task<bool> DeleteTodo(int id)
        {
            return _todosRepository.DeleteTodo(id);
        }

        public Task<TodoItem> GetTodo(int id)
        {
            return _todosRepository.GetTodo(id);
        }

        public Task<IEnumerable<TodoItem>> GetTodos()
        {
            return _todosRepository.GetTodos();
        }

        public Task<bool> UpdateTodo(TodoItem todoItem)
        {
            return _todosRepository.UpdateTodo(todoItem);
        }
    }
}
