using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ClinicAPI.Models;

namespace ClinicAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentsController : ControllerBase
    {
        private readonly ClinicDbContext _context;

        public AppointmentsController(ClinicDbContext context)
        {
            _context = context;
        }

        // GET: api/Appointments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Appointment>>> GetAppointments(Guid id)
        {
            var appointments = await _context.Appointments
                                             .Where(a => a.PatientId == id)
                                             .ToListAsync();

            if (appointments == null || !appointments.Any())
            {
                return NotFound();
            }

            return Ok(appointments);
        }

        // POST: api/Appointments
        [HttpPost]
        public async Task<ActionResult<Appointment>> PostAppointment(AppointmentRequest appointmentRequest)
        {
            Appointment appointment = new Appointment();
            appointment.Id = Guid.NewGuid();
            appointment.AppointmentDate = appointmentRequest.AppointmentDate;
            appointment.PatientId = appointmentRequest.PatientId;
            appointment.DoctorId = appointmentRequest.DoctorId;
            _context.Appointments.Add(appointment);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
