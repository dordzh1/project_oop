using ClinicAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace ClinicAPI.Abstract
{
    public interface IDoctorRepos
    {
        Task<ActionResult<Doctor>> GetDoctor(Guid id);
        Task<ActionResult<IEnumerable<Doctor>>> GetDoctors();
    }
}