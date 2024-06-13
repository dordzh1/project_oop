using ClinicAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace ClinicAPI.Abstract
{
    public interface IAppointmentRepos
    {
        Task<ActionResult<IEnumerable<Appointment>>> GetAppointments(Guid id);
        Task<ActionResult<Appointment>> PostAppointment(AppointmentRequest appointmentRequest);
    }
}