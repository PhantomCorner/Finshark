using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class StockRepository : IStockRepository
    {
        private readonly ApplicationDBContext _ctx;

        public StockRepository(ApplicationDBContext ctx)
        {
            _ctx = ctx;
        }
        public Task<List<Stock>> GetAllAsync()
        {
            return _ctx.Stock.ToListAsync();
        }
    }
}