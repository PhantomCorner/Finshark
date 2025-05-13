using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Helpers;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class CommentRepository : ICommentRepository
    {
        private readonly ApplicationDBContext _ctx;
        public CommentRepository(ApplicationDBContext ctx)
        {
            _ctx = ctx;
        }

        public async Task<List<Comment>> GetAllAsync(CommentQueryObject commentQueryObject)
        {
            var comments = _ctx.Comments.Include(a => a.AppUser).AsQueryable();
            if (!string.IsNullOrWhiteSpace(commentQueryObject.Symbol))
            {
                comments = comments.Where(s => s.Stock.Symbol == commentQueryObject.Symbol);
            }
            if (commentQueryObject.IsDecsending == true)
            {
                comments = comments.OrderByDescending(c => c.Created);
            }
            ;
            return await comments.ToListAsync();
        }

        public async Task<Comment?> GetByIdAsync(int id)
        {
            return await _ctx.Comments.Include(a => a.AppUser).FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<Comment> CreateAsync(Comment commentModel)
        {
            await _ctx.Comments.AddAsync(commentModel);
            await _ctx.SaveChangesAsync();
            return commentModel;
        }

        public async Task<Comment?> UpdateAsync(int id, Comment commentModel)
        {
            var existingComment = await _ctx.Comments.FindAsync(id);
            if (existingComment == null)
            {
                return null;
            }
            existingComment.Title = commentModel.Title;
            existingComment.Content = commentModel.Content;
            await _ctx.SaveChangesAsync();
            return existingComment;
        }

        public async Task<bool?> DeleteAsync(int id)
        {
            var existingComment = await _ctx.Comments.FindAsync(id);
            if (existingComment == null)
            {
                return null;
            }
            _ctx.Remove(existingComment);
            await _ctx.SaveChangesAsync();
            return true;
        }
    }
}