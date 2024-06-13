using ClinicAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClinicAPI.Abstract
{
    public interface ICabinetRepos
    {
        public Task<ActionResult<IEnumerable<Cabinet>>> GetCabinets();
        public Task<ActionResult<Cabinet>> GetCabinet(Guid id);
    }
}