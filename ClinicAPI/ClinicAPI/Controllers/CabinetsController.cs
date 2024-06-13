using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ClinicAPI.Models;


namespace ClinicAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CabinetsController : ControllerBase
    {
        private readonly ClinicDbContext _context;

        public CabinetsController(ClinicDbContext context)
        {
            _context = context;
        }

        // GET: api/Cabinets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cabinet>>> GetCabinets()
        {
            return await _context.Cabinets.ToListAsync();
        }

        // GET: api/Cabinets/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Cabinet>> GetCabinet(Guid id)
        {
            var cabinet = await _context.Cabinets.FindAsync(id);

            if (cabinet == null)
            {
                return NotFound();
            }

            return cabinet;
        }
    }
}
