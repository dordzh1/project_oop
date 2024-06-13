using ClinicAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace ClinicAPI.Abstract
{
    public interface IPatientService
    {
        Task<ActionResult<Patient>> CreatePatient([FromBody] PatientRequest patientRequest);
    }
}