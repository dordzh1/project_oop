using System.ComponentModel.DataAnnotations;

namespace Clinic.Models
{
    public class Appointment
    {
        public Guid Id { get; set; }

        [Required]
        public Guid DoctorId { get; set; }

        public Doctor? Doctor { get; set; }

        [Required]
        public Guid PatientId { get; set; }

        public Patient? Patient { get; set; }

        
        private DateTime _date;
        
        [Required]
        public DateTime AppointmentDate
        {
            get => _date;   
            set => _date = DateTime.SpecifyKind(value, DateTimeKind.Utc);
        }
    }
}
