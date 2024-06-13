using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Clinic.Models;

namespace Clinic.Controllers
{
    public class DoctorsController : Controller
    {
        private readonly ClinicDbContext _context;

        public DoctorsController(ClinicDbContext context)
        {
            _context = context;
        }

        // GET: Doctors
        public async Task<IActionResult> Index()
        {
            var clinicDbContext = _context.Doctors.Include(d => d.Cabinet);
            return View(await clinicDbContext.ToListAsync());
        }

        // GET: Doctors/Create
        public IActionResult Create()
        {
            ViewData["CabinetId"] = new SelectList(_context.Cabinets, "Id", "Name");
            return View();
        }

        // POST: Doctors/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,Specialization,Photo,CabinetId")] Doctor doctor, IFormFile uploadImage)
        {

            byte[] imageData = null;

            // Считываем переданный файл в массив байтов
            using (var memoryStream = new MemoryStream())
            {
                await uploadImage.CopyToAsync(memoryStream);
                doctor.Photo = memoryStream.ToArray();
            }
            _context.Add(doctor);
            await _context.SaveChangesAsync();

            ViewData["CabinetId"] = new SelectList(_context.Cabinets, "Id", "Name", doctor.CabinetId);

            return RedirectToAction(nameof(Index));
        }

        // GET: Doctors/Delete/5
        public async Task<IActionResult> Delete(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var doctor = await _context.Doctors
                .Include(d => d.Cabinet)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (doctor == null)
            {
                return NotFound();
            }

            return View(doctor);
        }

        // POST: Doctors/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(Guid id)
        {
            var doctor = await _context.Doctors.FindAsync(id);
            if (doctor != null)
            {
                _context.Doctors.Remove(doctor);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool DoctorExists(Guid id)
        {
            return _context.Doctors.Any(e => e.Id == id);
        }
    }
}
