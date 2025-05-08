using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.DTOs.Stock;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

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
        public IActionResult GetAll()
        {
            var stocks = _ctx.Stock.ToList().Select(s => s.ToStockDTO());
            return Ok(stocks);
        }
        [HttpGet("{id}")]
        public IActionResult GetByID([FromRoute] int id)
        {
            var stock = _ctx.Stock.Find(id);
            if (stock == null)
            {
                return NotFound();
            }
            return Ok(stock.ToStockDTO());
        }
        [HttpPost]
        public IActionResult Create([FromBody] CreateStockRequestDTO stockDTO)
        {
            var stockModel = stockDTO.ToStockFromCreateDTO();
            _ctx.Stock.Add(stockModel);
            _ctx.SaveChanges();
            return CreatedAtAction(nameof(GetByID), new { id = stockModel.Id }, stockModel.ToStockDTO());
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult Update([FromRoute] int id, [FromBody] UpdateStockRequestDTO stockDTO)
        {
            var
        }
    }
}