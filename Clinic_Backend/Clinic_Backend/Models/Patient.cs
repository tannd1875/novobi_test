namespace Clinic_Backend.Models
{
    public class Patient
    {
        public int id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string gender { get; set; }
        public DateTime dob { get; set; }
        public string status { get; set; }
        public string phoneNumber { get; set; }
        public string email { get; set; }
        public string line1 { get; set; }
        public string line2 { get; set; }
        public string deactivateReason { get; set; } = "";
    }
}
