using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ClinicAPI.Models
{
    public class Doctor
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Specialization { get; set; }

        public byte[] Photo { get; set; }

        public Guid CabinetId { get; set; }
        public Cabinet? Cabinet { get; set; }

        // Расписание
        public ICollection<Appointment> Appointments { get; set; }
    }
}