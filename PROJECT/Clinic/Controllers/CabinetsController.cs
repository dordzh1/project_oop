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
    public class CabinetsController : Controller
    {
        private readonly ClinicDbContext _context;

        public CabinetsController(ClinicDbContext context)
        {
            _context = context;
        }

        // GET: Cabinets
        public async Task<IActionResult> Index()
        {
            return View(await _context.Cabinets.ToListAsync());
        }

        // GET: Cabinets/Details/5
        public async Task<IActionResult> Details(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var cabinet = await _context.Cabinets
                .FirstOrDefaultAsync(m => m.Id == id);
            if (cabinet == null)
            {
                return NotFound();
            }

            return View(cabinet);
        }

        // GET: Cabinets/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Cabinets/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name")] Cabinet cabinet)
        {
            if (ModelState.IsValid)
            {
                cabinet.Id = Guid.NewGuid();
                _context.Add(cabinet);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(cabinet);
        }

        // GET: Cabinets/Edit/5
        public async Task<IActionResult> Edit(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var cabinet = await _context.Cabinets.FindAsync(id);
            if (cabinet == null)
            {
                return NotFound();
            }
            return View(cabinet);
        }

        // POST: Cabinets/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(Guid id, [Bind("Id,Name")] Cabinet cabinet)
        {
            if (id != cabinet.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(cabinet);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CabinetExists(cabinet.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(cabinet);
        }

        // GET: Cabinets/Delete/5
        public async Task<IActionResult> Delete(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var cabinet = await _context.Cabinets
                .FirstOrDefaultAsync(m => m.Id == id);
            if (cabinet == null)
            {
                return NotFound();
            }

            return View(cabinet);
        }

        // POST: Cabinets/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(Guid id)
        {
            var cabinet = await _context.Cabinets.FindAsync(id);
            if (cabinet != null)
            {
                _context.Cabinets.Remove(cabinet);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool CabinetExists(Guid id)
        {
            return _context.Cabinets.Any(e => e.Id == id);
        }
    }
}
