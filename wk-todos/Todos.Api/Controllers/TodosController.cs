using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Todos.Core;
using Todos.Services;

namespace Todos.Api.Controllers
{
    [Route("api/todos")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private readonly ITodosService _todosService;

        public TodosController(ITodosService todosService)
        {
            this._todosService = todosService;
        }

        // GET api/todos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoItem>>> Get()
        {
            var result = await this._todosService.GetTodosAsync();
            return result.ToList();
        }

        // GET api/todos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TodoItem>> Get(int id)
        {
            var todoItem = await this._todosService.GetTodoAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            return todoItem;
        }

        // POST api/todos
        [HttpPost]
        public async Task<ActionResult<TodoItem>> Post([FromBody] TodoItem todoItem)
        {
            await this._todosService.CreateTodoAsync(todoItem);
            return CreatedAtAction(nameof(Get), new { id = todoItem.Id }, todoItem);
        }

        // PUT api/todos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] TodoItem todoItem)
        {
            if (id != todoItem.Id)
            {
                return BadRequest();
            }

            var success = await this._todosService.UpdateTodoAsync(todoItem);
            if (success)
            {
                return NoContent();
            }
            else
            {
                return StatusCode(500);
            }
        }

        // DELETE api/todos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var todoItem = await _todosService.GetTodoAsync(id);
            if (todoItem == null)
            {
                return NotFound();
            }

            var success = await _todosService.DeleteTodoAsync(id);
            if (success)
            {
                return NoContent();
            }
            else
            {
                return StatusCode(500);
            }
        }
    }
}
