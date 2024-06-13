using ClinicAPI.Abstract;
using ClinicAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClinicAPI.Repos
{
    public class CabinetRepos : ICabinetRepos
    {
        private readonly ClinicDbContext _context;

        public CabinetRepos(ClinicDbContext context)
        {
            _context = context;
        }

        public async Task<ActionResult<IEnumerable<Cabinet>>> GetCabinets()
        {
            return await _context.Cabinets.ToListAsync();
        }

        public async Task<ActionResult<Cabinet>> GetCabinet(Guid id)
        {
            return await _context.Cabinets.FindAsync(id);
        }
    }
}