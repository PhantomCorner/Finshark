using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.DTOs.Stock;
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
        private readonly ApplicationDBContext _ctx;
        public StockController(ApplicationDBContext ctx)

        {
            _ctx = ctx;

        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var stocks = await _ctx.Stock.ToListAsync();
            var stockDTO = stocks.Select(s => s.ToStockDTO());
            return Ok(stockDTO);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByID([FromRoute] int id)
        {
            var stock = await _ctx.Stock.FindAsync(id);
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
            await _ctx.Stock.AddAsync(stockModel);
            await _ctx.SaveChangesAsync();
            return CreatedAtAction(nameof(GetByID), new { id = stockModel.Id }, stockModel.ToStockDTO());
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateStockRequestDTO updateStockDTO)
        {
            var stockModel = await _ctx.Stock.FirstOrDefaultAsync(stock => stock.Id == id);
            if (stockModel == null)
            {
                return NotFound();
            }
            stockModel.Symbol = updateStockDTO.Symbol;
            stockModel.CompanyName = updateStockDTO.CompanyName;
            stockModel.Purchase = updateStockDTO.Purchase;
            stockModel.LastDiv = updateStockDTO.LastDiv;
            stockModel.Industry = updateStockDTO.Industry;
            stockModel.MarketCap = updateStockDTO.MarketCap;

            await _ctx.SaveChangesAsync();
            return Ok(stockModel.ToStockDTO());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var stock = await _ctx.Stock.FirstOrDefaultAsync(stock => stock.Id == id);
            if (stock == null)
            {
                return NotFound();
            }
            _ctx.Stock.Remove(stock);
            await _ctx.SaveChangesAsync();
            return NoContent();
        }
    }
}