using ClinicAPI.Abstract;
using ClinicAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClinicAPI.Repos
{
    public class PatientRepos : IPatientRepos
    {
        private readonly ClinicDbContext _context;
        public PatientRepos(ClinicDbContext context)
        {
            _context = context;
        }
        public async Task<ActionResult<Patient>> Create([FromBody] PatientRequest patientRequest)
        {
            var patient = new Patient();
            patient.Id = Guid.NewGuid();
            patient.Name = patientRequest.Name;
            patient.Email = patientRequest.Email;
            _context.Patients.Add(patient);
            await _context.SaveChangesAsync();
            return (patient);
        }
    }
}
