using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.DTOs.Stock;
using api.Helpers;
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

        public async Task<Stock> CreateStock(Stock stockModel)
        {
            await _ctx.Stock.AddAsync(stockModel);
            await _ctx.SaveChangesAsync();
            return stockModel;
        }

        public async Task<Stock?> DeleteStockAsync(int id)
        {
            var stockModel = await _ctx.Stock.FirstOrDefaultAsync(item => item.Id == id);
            if (stockModel == null)
            {
                return null;
            }
            _ctx.Stock.Remove(stockModel);
            await _ctx.SaveChangesAsync();
            return stockModel;
        }

        public async Task<List<Stock>> GetAllAsync(QueryObject query)
        {
            var stocks = _ctx.Stock.Include(c => c.Comments).AsQueryable();
            if (!string.IsNullOrWhiteSpace(query.CompanyName))
            {
                stocks = stocks.Where(s => s.CompanyName.Contains(query.CompanyName));
            }
            if (!string.IsNullOrWhiteSpace(query.Symbol))
            {
                stocks = stocks.Where(s => s.Symbol.Contains(query.Symbol));
            }
            // if sort by symbol

            if (!string.IsNullOrWhiteSpace(query.SortBy))
            {
                if (query.SortBy.Equals("Symbol", StringComparison.OrdinalIgnoreCase))
                {
                    stocks = query.IsDecsending ? stocks.OrderByDescending(s => s.Symbol) : stocks.OrderBy(s => s.Symbol);
                }
            }

            // if sort by market cap
            if (!string.IsNullOrWhiteSpace(query.SortBy))
            {
                if (query.SortBy.Equals("marketCap", StringComparison.OrdinalIgnoreCase))
                {
                    stocks = query.IsDecsending ? stocks.OrderByDescending(s => s.MarketCap) : stocks.OrderBy(s => s.MarketCap);
                }
            }

            var skipNum = ((query.PageNum - 1) * query.PageSize);
            return await stocks.Skip(skipNum).Take(query.PageSize).ToListAsync();
        }



        public async Task<Stock?> GetByIdAsync(int id)
        {
            return await _ctx.Stock.Include(c => c.Comments).FirstOrDefaultAsync(i => i.Id == id);

        }

        public Task<bool> StockExist(int id)
        {
            return _ctx.Stock.AnyAsync(s => s.Id == id);
        }

        public async Task<Stock?> UpdateStockAsync(int id, UpdateStockRequestDTO stockDTO)
        {
            var existingStock = await _ctx.Stock.FirstOrDefaultAsync(item => item.Id == id);
            if (existingStock == null)
            {
                return null;
            }
            existingStock.Symbol = stockDTO.Symbol;
            existingStock.CompanyName = stockDTO.CompanyName;
            existingStock.Purchase = stockDTO.Purchase;
            existingStock.LastDiv = stockDTO.LastDiv;
            existingStock.Industry = stockDTO.Industry;
            existingStock.MarketCap = stockDTO.MarketCap;
            await _ctx.SaveChangesAsync();
            return existingStock;

        }
    }
}