using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs.Comment;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/comment")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepo;
        private readonly IStockRepository _stockRepo;
        public CommentController(ICommentRepository commentRepo, IStockRepository stockRepo)
        {
            _commentRepo = commentRepo;
            _stockRepo = stockRepo;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var comment = await _commentRepo.GetAllAsync();
            var CommentDTO = comment.Select(s => s.ToCommentDTO());
            return Ok(CommentDTO);
        }
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);

            }
            var comment = await _commentRepo.GetByIdAsync(id);
            if (comment == null)
            {
                return NotFound();
            }
            return Ok(comment.ToCommentDTO());
        }
        [HttpPost("{stockId:int}")]
        public async Task<IActionResult> Create([FromRoute] int stockId, CreateCommentDTO commentDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);

            }
            // if stock id doesnt exist
            if (!await _stockRepo.StockExist(stockId))
            {
                return BadRequest("Stock not found");
            }
            var commentModel = commentDTO.ToCommentFromCreate(stockId);
            await _commentRepo.CreateAsync(commentModel);
            return CreatedAtAction(nameof(GetById), new { id = commentModel }, commentModel.ToCommentDTO());

        }
        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Put([FromRoute] int id, [FromBody] updateCommentRequestDTO updateDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);

            }
            var comment = await _commentRepo.UpdateAsync(id, updateDTO.ToCommentFromUpdate());
            if (comment == null)
            {
                return NotFound("Comment not found");
            }
            return Ok(comment.ToCommentDTO());
        }
        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);

            }
            var comment = await _commentRepo.DeleteAsync(id);
            if (comment == null)
            {
                return NotFound("Comment not found");
            }
            return Ok("Comment removed");
        }
    }
}