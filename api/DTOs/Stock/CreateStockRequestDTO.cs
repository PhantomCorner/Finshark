using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using Microsoft.AspNetCore.Mvc;

namespace api.DTOs.Stock
{
    public class CreateStockRequestDTO
    {
        [Required]
        [MaxLength(10, ErrorMessage = "Symbol must longer than 10 char")]
        public string Symbol { get; set; } = string.Empty;
        [Required]
        [MaxLength(10, ErrorMessage = "CompanyName must longer than 10 char")]
        public string CompanyName { get; set; } = string.Empty;

        public decimal Purchase { get; set; }

        public decimal LastDiv { get; set; }

        public string Industry { get; set; } = string.Empty;

        public long MarketCap { get; set; }
    }
}