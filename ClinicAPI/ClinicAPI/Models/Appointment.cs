using System.ComponentModel.DataAnnotations;

namespace ClinicAPI.Models
{
    public class Appointment
    {
        public Guid Id { get; set; }


        public Guid DoctorId { get; set; }

        public Doctor? Doctor { get; set; }

        [Required]
        public Guid PatientId { get; set; }

        public Patient? Patient { get; set; }

        
        private DateTime _date;
        
        public DateTime AppointmentDate
        {
            get => _date;
            set => _date = DateTime.SpecifyKind(value, DateTimeKind.Utc);
        }
    }
    public record AppointmentRequest(Guid DoctorId, Guid PatientId, DateTime AppointmentDate);
}