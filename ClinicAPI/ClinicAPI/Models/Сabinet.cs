using System.ComponentModel.DataAnnotations;

namespace ClinicAPI.Models
{
    public class Cabinet
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public ICollection<Doctor>? Doctors { get; set; }
    }
}