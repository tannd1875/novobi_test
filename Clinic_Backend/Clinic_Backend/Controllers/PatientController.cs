using Clinic_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Data;

namespace Clinic_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public PatientController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public JsonResult Get(string key)
        {
            string query = $@"select *
                             from clinicdb.patient
                             where CONCAT(firstName, ' ', lastName) LIKE '%{key}%' or phoneNumber = '{key}' or email = '{key}'
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ClinicAppCon");
            MySqlDataReader myReader;
            using(MySqlConnection mycon = new MySqlConnection(sqlDataSource)) {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    mycon.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Patient patient)
        {
            string query = @"
                        insert into clinicdb.patient (firstName, lastName, gender, dob, status, phoneNumber, email, line1, line2) 
                        values (@firstName, @lastName, @gender, @dob, @status, @phoneNumber, @email, @line1, @line2);
                        
            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ClinicAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@firstName", patient.firstName);
                    myCommand.Parameters.AddWithValue("@lastName", patient.lastName);
                    myCommand.Parameters.AddWithValue("@gender", patient.gender);
                    myCommand.Parameters.AddWithValue("@dob", patient.dob);
                    myCommand.Parameters.AddWithValue("@status", patient.status);
                    myCommand.Parameters.AddWithValue("@phoneNumber", patient.phoneNumber);
                    myCommand.Parameters.AddWithValue("@email", patient.email);
                    myCommand.Parameters.AddWithValue("@line1", patient.line1);
                    myCommand.Parameters.AddWithValue("@line2", patient.line2);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    mycon.Close();
                }
            }
            return new JsonResult("Create new patient sucessfully!");
        }

        [HttpPut]
        public JsonResult Put(Patient patient)
        {
            string query = @"
                        update clinicdb.patient set firstName = @firstName,
                                                    lastName = @lastName,
                                                    gender = @gender,
                                                    dob = @dob,
                                                    status = @status,
                                                    phoneNumber = @phoneNumber,
                                                    email = @email,
                                                    line1 = @line1,
                                                    line2 = @line2,
                                                    deactivateReason = @deactivateReason
                        where id = @id;";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ClinicAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@id", patient.id);
                    myCommand.Parameters.AddWithValue("@firstName", patient.firstName);
                    myCommand.Parameters.AddWithValue("@lastName", patient.lastName);
                    myCommand.Parameters.AddWithValue("@gender", patient.gender);
                    myCommand.Parameters.AddWithValue("@dob", patient.dob);
                    myCommand.Parameters.AddWithValue("@status", patient.status);
                    myCommand.Parameters.AddWithValue("@phoneNumber", patient.phoneNumber);
                    myCommand.Parameters.AddWithValue("@email", patient.email);
                    myCommand.Parameters.AddWithValue("@line1", patient.line1);
                    myCommand.Parameters.AddWithValue("@line2", patient.line2);
                    myCommand.Parameters.AddWithValue("@deactivateReason", patient.deactivateReason);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    mycon.Close();
                }
            }
            return new JsonResult("Update patient data sucessfully!");
        }
    }
}
