using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Todos.Core;

namespace Todos.Repositories
{
    public class TodosRepository : ITodosRepository
    {
        public Task<TodoItem> CreateTodo(TodoItem todoItem)
        {
            return Task.FromResult(new TodoItem
            {
                Id = todoItem.Id,
                Description = todoItem.Description,
                IsDone = todoItem.IsDone,
            });
        }

        public Task<bool> DeleteTodo(int id)
        {
            return Task.FromResult(true);
        }

        public Task<TodoItem> GetTodo(int id)
        {
            return Task.FromResult(new TodoItem
            {
                Id = id,
                Description = "description",
                IsDone = false,
            });
        }

        public Task<IEnumerable<TodoItem>> GetTodos()
        {
            var list = new List<TodoItem>{
                new TodoItem
                {
                    Id = 1,
                    Description = "description",
                    IsDone = false,
                },
                new TodoItem
                {
                    Id = 2,
                    Description = "description",
                    IsDone = false,
                },
                new TodoItem
                {
                    Id = 3,
                    Description = "description",
                    IsDone = false,
                },
            };

            return Task.FromResult(list as IEnumerable<TodoItem>);
        }

        public Task<bool> UpdateTodo(TodoItem todoItem)
        {
            return Task.FromResult(true);
        }
    }
}
