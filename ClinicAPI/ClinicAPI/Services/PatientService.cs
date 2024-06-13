using ClinicAPI.Abstract;
using ClinicAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace ClinicAPI.Services
{
    public class PatientService : IPatientService
    {
        private readonly IPatientRepos _patientRepos;

        public PatientService(IPatientRepos patientRepos)
        {
            _patientRepos = patientRepos;

        }
        public async Task<ActionResult<Patient>> CreatePatient([FromBody] PatientRequest patientRequest)
        {
            return await _patientRepos.Create(patientRequest);
        }
    }

}
