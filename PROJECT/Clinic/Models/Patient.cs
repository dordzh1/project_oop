using System.ComponentModel.DataAnnotations;
namespace Clinic.Models
{
    public class Patient
    {
        public Guid Id { get; set; }

        [Required(ErrorMessage = "Не указано имя")]
        [MaxLength(100)]
        public string Name { get; set; }

        [Required(ErrorMessage = "Не указан электронный адрес")]
        [MaxLength(100)]
        [EmailAddress]
        public string Email { get; set; }

        public ICollection<Appointment>? Appointments { get; set; }
    }
}
