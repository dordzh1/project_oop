using System.ComponentModel.DataAnnotations;
namespace ClinicAPI.Models
{
    public class Patient
    {
    public Guid Id { get; set; } 
    
    public string Name { get; set; }

    public string Email { get; set; }

    public ICollection<Appointment> Appointments { get; set; }
    }
    public record PatientRequest(string Name, string Email);
}
