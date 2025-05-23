using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs.Comment;
using api.Models;

namespace api.Mappers
{
    public static class CommentMapper
    {
        public static CommentDTO ToCommentDTO(this Comment commentModel)
        {
            return new CommentDTO
            {
                Id = commentModel.Id,
                Title = commentModel.Title,
                Content = commentModel.Content,
                Created = commentModel.Created,
                CreatedBy = commentModel.AppUser.UserName,
                StockId = commentModel.StockId,
            };
        }
        public static Comment ToCommentFromCreate(this CreateCommentDTO commentDTO, int stockId)
        {
            return new Comment
            {

                Title = commentDTO.Title,
                Content = commentDTO.Content,
                StockId = stockId,
            };
        }
        public static Comment ToCommentFromUpdate(this updateCommentRequestDTO commentDTO)
        {
            return new Comment
            {

                Title = commentDTO.Title,
                Content = commentDTO.Content,

            };
        }
    }
}