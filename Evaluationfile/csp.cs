using System;

// Delegate for billing strategy
public delegate double BillingStrategy(Patient patient);

// Base Patient class
public abstract class Patient
{
    public string Name { get; set; }
    public int ID { get; set; }
    public string Type { get; set; }
    public double BaseCost { get; set; }

    public Patient(string name, int id, string type, double baseCost)
    {
        Name = name;
        ID = id;
        Type = type;
        BaseCost = baseCost;
    }

    public abstract double CalculateBill();
}

// InPatient class
public class InPatient : Patient
{
    public int RoomNumber { get; set; }
    public int DaysAdmitted { get; set; }

    public InPatient(string name, int id, int roomNumber, int daysAdmitted)
        : base(name, id, "InPatient", 500)
    {
        RoomNumber = roomNumber;
        DaysAdmitted = daysAdmitted;
    }

    public override double CalculateBill()
    {
        // Implementation
        return BaseCost * DaysAdmitted;
    }
}

// OutPatient class
public class OutPatient : Patient
{
    public DateTime VisitDate { get; set; }

    public OutPatient(string name, int id, DateTime visitDate)
        : base(name, id, "OutPatient", 200)
    {
        VisitDate = visitDate;
    }

    public override double CalculateBill()
    {
        // Implementation
        return BaseCost;
    }
}

// Billing strategies
public static class BillingStrategies
{
    public static double StandardBilling(Patient patient)
    {
        return patient.CalculateBill();
    }

    public static double DiscountedBilling(Patient patient)
    {
        return patient.CalculateBill() * 0.9;
    }

    public static double PremiumBilling(Patient patient)
    {
        return patient.CalculateBill() * 1.2;
    }
}

// Event arguments
public class PatientEventArgs : EventArgs
{
    public Patient Patient { get; set; }
    public string Message { get; set; }

    public PatientEventArgs(Patient patient, string message)
    {
        Patient = patient;
        Message = message;
    }
}

public class BillEventArgs : EventArgs
{
    public Patient Patient { get; set; }
    public double Amount { get; set; }

    public BillEventArgs(Patient patient, double amount)
    {
        Patient = patient;
        Amount = amount;
    }
}

// Hospital class with events
public class Hospital
{
    public event EventHandler<PatientEventArgs> PatientAdmitted;
    public event EventHandler<BillEventArgs> BillGenerated;

    public void AdmitPatient(Patient patient)
    {
        // Trigger event
        PatientAdmitted?.Invoke(this, new PatientEventArgs(patient, $"Patient {patient.Name} admitted as {patient.Type}"));
    }

    public void GenerateBill(Patient patient, double amount)
    {
        // Trigger event
        BillGenerated?.Invoke(this, new BillEventArgs(patient, amount));
    }
}

// Departments
public class BillingDepartment
{
    public void OnBillGenerated(object sender, BillEventArgs e)
    {
        // Handle bill generated
    }
}

public class NursingDepartment
{
    public void OnPatientAdmitted(object sender, PatientEventArgs e)
    {
        // Handle patient admitted
    }
}

public class AdministrationDepartment
{
    public void OnPatientAdmitted(object sender, PatientEventArgs e)
    {
        // Handle patient admitted
    }
}

// Main program
class Program
{
    static void Main(string[] args)
    {
        // Implementation for console flow
    }
}
