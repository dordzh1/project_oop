using ClinicAPI.Abstract;
using ClinicAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClinicAPI.Repos
{
    public class AppointmentRepos : IAppointmentRepos
    {
        private readonly ClinicDbContext _context;
        public AppointmentRepos(ClinicDbContext context)
        {
            _context = context;

        }
        public async Task<ActionResult<IEnumerable<Appointment>>> GetAppointments(Guid id)
        {
            var appointments = await _context.Appointments
                                             .Where(a => a.PatientId == id)
                                             .ToListAsync();
            return appointments;
        }
        public async Task<ActionResult<Appointment>> PostAppointment(AppointmentRequest appointmentRequest)
        {
            Appointment appointment = new Appointment();
            appointment.Id = Guid.NewGuid();
            appointment.AppointmentDate = appointmentRequest.AppointmentDate;
            appointment.PatientId = appointmentRequest.PatientId;
            appointment.DoctorId = appointmentRequest.DoctorId;
            _context.Appointments.Add(appointment);
            await _context.SaveChangesAsync();
            return appointment;
        }
    }
}

