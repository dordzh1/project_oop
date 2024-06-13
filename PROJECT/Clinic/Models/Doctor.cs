using Clinic.Models;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace Clinic.Models
{
    public class Doctor
    {
        public Guid Id { get; set; }

        [Required]
        [MaxLength(100)]
        [MinLength(1)]
        public string Name { get; set; }


        [Required]
        [MaxLength(100)]
        [MinLength(1)]
        public string Specialization { get; set; }

        public byte[] Photo { get; set; }

        [Required]
        public Guid CabinetId { get; set; }
        public Cabinet? Cabinet { get; set; }

        // Расписание
        public ICollection<Appointment> Appointments { get; set; }
    }
}