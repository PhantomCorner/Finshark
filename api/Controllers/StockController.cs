using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
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
            var stocks = _ctx.Stock.ToList();
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
            return Ok(stock);

        }
    }
}