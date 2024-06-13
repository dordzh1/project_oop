using ClinicAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace ClinicAPI.Abstract
{
    public interface IPatientRepos
    {
        Task<ActionResult<Patient>> Create([FromBody] PatientRequest patientRequest);
    }
}