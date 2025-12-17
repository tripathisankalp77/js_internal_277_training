using System;

// Base abstract class for Patients
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

// Example patient type: Consultation
public class Consult : Patient
{
    public DateTime VisitDate { get; set; }

    public Consult(string name, int id, DateTime visitDate)
        : base(name, id, "Consult", 150)
    {
        VisitDate = visitDate;
    }

    public override double CalculateBill()
    {
        return BaseCost; // simple logic, can be extended
    }
}

// Delegate for billing strategy
public delegate double BillingStrategy(double amount);

// Event publisher class
public class HospitalNotifier
{
    // Event declaration
    public event Action<string> DepartmentNotified;

    public void Notify(string message)
    {
        DepartmentNotified?.Invoke(message);
    }
}

// Main Program
class Program
{
    static void Main()
    {
        // Step 1: Admit patient
        Patient p1 = new Consult("John Doe", 101, DateTime.Now);

        // Step 2: Select patient type (already done via class)

        // Step 3: Calculate treatment bill
        double bill = p1.CalculateBill();

        // Step 4: Apply billing strategy (delegate)
        BillingStrategy discountStrategy = amt => amt * 0.9; // 10% discount
        double finalBill = discountStrategy(bill);

        // Step 5: Generate bill
        Console.WriteLine($"Patient: {p1.Name}, Type: {p1.Type}, Final Bill: {finalBill}");

        // Step 6: Trigger events and notify departments
        HospitalNotifier notifier = new HospitalNotifier();
        notifier.DepartmentNotified += msg => Console.WriteLine($"[Pharmacy] {msg}");
        notifier.DepartmentNotified += msg => Console.WriteLine($"[Accounts] {msg}");

        notifier.Notify($"Patient {p1.Name} admitted. Bill generated: {finalBill}");
    }
}
