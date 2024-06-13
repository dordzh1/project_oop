using System.ComponentModel.DataAnnotations;

namespace Clinic.Models
{
    public class Cabinet
    {
        public Guid Id { get; set; }

        [Required(ErrorMessage = "Не указана специализация")]
        [MaxLength(100)]
        public string Name { get; set; }
        public ICollection<Doctor>? Doctors { get; set; }
    }
}