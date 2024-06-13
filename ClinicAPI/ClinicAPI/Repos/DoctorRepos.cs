using ClinicAPI.Abstract;
using ClinicAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClinicAPI.Repos
{
    public class DoctorRepos : IDoctorRepos
    {
        private readonly ClinicDbContext _context;
        public DoctorRepos(ClinicDbContext context)
        {
            _context = context;
        }
        public async Task<ActionResult<IEnumerable<Doctor>>> GetDoctors()
        {
            return await _context.Doctors.ToListAsync();
        }
        public async Task<ActionResult<Doctor>> GetDoctor(Guid id)
        {
            return await _context.Doctors.FindAsync(id);
        }
    }
}
