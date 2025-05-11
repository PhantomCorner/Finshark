using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs.Comment
{
    public class CreateCommentDTO
    {
        // add validation
        [Required]
        [MinLength(5, ErrorMessage = "Title must longer than 5 char")]
        [MaxLength(200, ErrorMessage = "Title can not be over 200 char")]
        public string Title { get; set; } = string.Empty;
        [Required]
        [MinLength(5, ErrorMessage = "Content must longer than 5 char")]
        [MaxLength(200, ErrorMessage = "Contnet can not be over 200 char")]
        public string Content { get; set; } = string.Empty;
    }
}