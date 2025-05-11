using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.DTOs.Stock;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
// Controller should not have direct access to db.
// so we applying interfaces to do that
namespace api.Controllers
{
    [Route("api/stock")]
    [ApiController]
    public class StockController : ControllerBase
    {
        private readonly IStockRepository _stockRepo;
        private readonly ApplicationDBContext _ctx;
        public StockController(ApplicationDBContext ctx, IStockRepository stockRepo)
        {
            _stockRepo = stockRepo;
            _ctx = ctx;

        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var stocks = await _stockRepo.GetAllAsync();
            var stockDTO = stocks.Select(s => s.ToStockDTO());
            return Ok(stockDTO);
        }
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetByID([FromRoute] int id)
        {
            var stock = await _stockRepo.GetByIdAsync(id);
            if (stock == null)
            {
                return NotFound();
            }
            return Ok(stock.ToStockDTO());
        }
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateStockRequestDTO createStockDTO)
        {
            var stockModel = createStockDTO.ToStockFromCreateDTO();
            await _stockRepo.CreateStock(stockModel);
            return CreatedAtAction(nameof(GetByID), new { id = stockModel.Id }, stockModel.ToStockDTO());
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateStockRequestDTO updateStockDTO)
        {
            var stockModel = await _stockRepo.UpdateStockAsync(id, updateStockDTO);
            if (stockModel == null)
            {
                return NotFound();
            }


            return Ok(stockModel.ToStockDTO());
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var stock = await _stockRepo.DeleteStockAsync(id);
            if (stock == null)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}