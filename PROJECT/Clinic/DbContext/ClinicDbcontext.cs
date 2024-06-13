﻿using Microsoft.EntityFrameworkCore;
using Clinic.Models;

public class ClinicDbContext : DbContext
{
    public ClinicDbContext(DbContextOptions<ClinicDbContext> options)
    : base(options)

    {
        Database.EnsureCreated();
   
    }

    public DbSet<Doctor> Doctors { get; set; }
    public DbSet<Patient> Patients { get; set; }
    public DbSet<Appointment> Appointments { get; set; }
    public DbSet<Cabinet> Cabinets { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Doctor>()
        .Property(d => d.Photo)
        .HasColumnType("bytea");

        modelBuilder.Entity<Appointment>()
        .HasOne(a => a.Doctor)
        .WithMany(d => d.Appointments)
        .HasForeignKey(a => a.DoctorId);

        modelBuilder.Entity<Appointment>()
        .HasOne(a => a.Patient)
        .WithMany(p => p.Appointments)
        .HasForeignKey(a => a.PatientId);

        modelBuilder.Entity<Cabinet>()
        .HasMany(c => c.Doctors)
        .WithOne(d => d.Cabinet);
    }   
}
