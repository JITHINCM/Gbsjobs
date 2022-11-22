using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using System.Data;
using System.Linq;
using Service.Repository.Core;
using Service.Repository.news;
using GRAMPRO.Platform.Utility.Model.news;

namespace Service.Repository.news
{
    public class newRepository : DBRepositoryBase, InewRepository
    {


        //-----------------------------------------------API to get job details by job Id-------------------------
        public IEnumerable<newR> Getjobdetailsbyid(int id)
        {
            var newList = new List<newR>();
            SqlCommand command = base.CreateCommand("usp_GBSJobs_Job_Details", CommandType.StoredProcedure) as SqlCommand;
            if (command != null)
            {
                 command.Parameters.AddWithValue("@Job_id", id);

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    if (reader != null && (reader as SqlDataReader) != null && (reader as SqlDataReader).HasRows)
                    {
                        while (reader.Read())
                        {
                            newList.Add(new newR//Job_Id,Category_Id,JobName,Openings,Description,Experience,Skills,LastDateForApplying,ContactNumber,SalaryPackage,JobType
                            {
                                Job_Id = !reader.IsDBNull("Job_Id") ? reader.GetInt32("Job_Id") : 0,
                                Category_Id = !reader.IsDBNull("Category_Id") ? reader.GetInt32("Category_Id") : 0,
                                JobName = !reader.IsDBNull("JobName") ? reader.GetString("JobName") : "",
                                Openings = !reader.IsDBNull("Openings") ? reader.GetInt32("Openings") : 0,
                                Description = !reader.IsDBNull("Description") ? reader.GetString("Description") : "",
                                Experience = !reader.IsDBNull("Experience") ? reader.GetInt32("Experience") : 0,
                                Skills = !reader.IsDBNull("Skills") ? reader.GetString("Skills") : "",
                                LastDateForApplying =reader.GetDateTime("LastdateForApplying"),
                                // !reader.IsDBNull("LastDateForApplying") ? reader.GetDateTime("LastdateForApplying"),
                                ContactNumber = !reader.IsDBNull("ContactNumber") ? reader.GetString("ContactNumber") : "",
                                SalaryPackage = !reader.IsDBNull("SalaryPackage") ? reader.GetString("SalaryPackage") : "",
                                JobType = !reader.IsDBNull("JobType") ? reader.GetString("JobType") : "",

                            }
                            );
                        }
                    }

                }

            }
            return newList;

        }



        //---------------------------------------API to return user details when email is passed------------------------



        public IEnumerable<newuser> Getuserdetailsbyid(string email)
        {
            var newList1 = new List<newuser>();
            SqlCommand command = base.CreateCommand("usp_GBSJobs_UserDetailsByEmail", CommandType.StoredProcedure) as SqlCommand;
            if (command != null)
            {
                 command.Parameters.AddWithValue("@Email", email);

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    if (reader != null && (reader as SqlDataReader) != null && (reader as SqlDataReader).HasRows)
                    {
                        while (reader.Read())
                        {
                            newList1.Add(new newuser
                            {
                                
                                Name = !reader.IsDBNull("Name") ? reader.GetString("Name") : "",
                                Email = !reader.IsDBNull("Email") ? reader.GetString("Email") : "",
                                Password = !reader.IsDBNull("Password") ? reader.GetString("Password") : "",
                                DateOfBirth =reader.GetDateTime("DateOfBirth"),
                                Mobile = !reader.IsDBNull("Mobile") ? reader.GetString("Mobile") : "",
                                Image = !reader.IsDBNull("Image") ? reader.GetString("Image") : "",
                                Skills = !reader.IsDBNull("Skills") ? reader.GetString("Skills") : "",
                                Gender = !reader.IsDBNull("Gender") ? reader.GetString("Gender") : "",
                                Address = !reader.IsDBNull("Address") ? reader.GetString("Address") : "",
                                Experience = !reader.IsDBNull("Experience") ? reader.GetInt32("Experience") : 0,
                                HighestQualification = !reader.IsDBNull("HighestQualification") ? reader.GetString("HighestQualification") : "",
                                UploadCV = !reader.IsDBNull("UploadCV") ? reader.GetString("UploadCV") : "",
                                UserType = !reader.IsDBNull("UserType") ? reader.GetString("UserType") : ""
                                

                            }
                            );
                        }
                    }

                }

            }
            return newList1;

        }






        public IEnumerable<newcount> GetOpeningsCount()
        {
            var newList2 = new List<newcount>();
            SqlCommand command = base.CreateCommand("usp_GetJobOpenings", CommandType.StoredProcedure) as SqlCommand;
            if (command != null)
            {
                //command.Parameters.AddWithValue("@Job_id", id);

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    if (reader != null && (reader as SqlDataReader) != null && (reader as SqlDataReader).HasRows)
                    {
                        while (reader.Read())
                        {
                            newList2.Add(new newcount
                            {
                               
                                CategoryName = !reader.IsDBNull("CategoryName") ? reader.GetString("CategoryName") : "",
                                TotalCount = !reader.IsDBNull("TotalCount") ? reader.GetInt32("TotalCount") : 0,

                            }
                            );
                        }
                    }

                }

            }
            return newList2;

        }





        public IEnumerable<newuserapplication> Getuserapplication(string status)
        {
            var newList3 = new List<newuserapplication>();
            SqlCommand command = base.CreateCommand("usp_GetUserApplication", CommandType.StoredProcedure) as SqlCommand;
            if (command != null)
            {
                 command.Parameters.AddWithValue("@status", status);

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    if (reader != null && (reader as SqlDataReader) != null && (reader as SqlDataReader).HasRows)
                    {
                        while (reader.Read())
                        {
                            newList3.Add(new newuserapplication
                            {
                                
                                Application_Id = !reader.IsDBNull("Application_Id") ? reader.GetInt32("Application_Id") : 0,
                                User_Id = !reader.IsDBNull("User_Id") ? reader.GetInt32("User_Id") : 0,
                                Category_Id = !reader.IsDBNull("Category_Id") ? reader.GetInt32("Category_Id") : 0,
                                Job_Id =!reader.IsDBNull("Job_Id")?reader.GetInt32("Job_Id"):0,
                                Email = !reader.IsDBNull("Email") ? reader.GetString("Email") : "",
                                JobName = !reader.IsDBNull("JobName") ? reader.GetString("JobName") : "",
                                AppliedDate =reader.GetDateTime("AppliedDate"),
                                Response = !reader.IsDBNull("Response") ? reader.GetString("Response") : "",
                                Status = !reader.IsDBNull("Status") ? reader.GetString("Status") : "",
                                //UserType = !reader.IsDBNull("UserType") ? reader.GetString("UserType") : ""
                                

                            }
                            );
                        }
                    }

                }

            }
            return newList3;

        }


        public IEnumerable<newapplicationsbyuser> Getapplicationsbyuser(int userid)
        {
            var newList4 = new List<newapplicationsbyuser>();
            SqlCommand command = base.CreateCommand("usp_GBSJobs_User_AppliedJobDetailsByUserId", CommandType.StoredProcedure) as SqlCommand;
            if (command != null)
            {
                 command.Parameters.AddWithValue("@userid", userid);

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    if (reader != null && (reader as SqlDataReader) != null && (reader as SqlDataReader).HasRows)
                    {
                        while (reader.Read())
                        {
                            newList4.Add(new newapplicationsbyuser
                            {
                                
                                CategoryName = !reader.IsDBNull("CategoryName") ? reader.GetString("CategoryName") : "",
                                Job_Id = !reader.IsDBNull("Job_Id") ? reader.GetInt32("Job_Id") : 0,
                                AppliedDate =reader.GetDateTime("AppliedDate"),
                                User_Id = !reader.IsDBNull("User_Id") ? reader.GetInt32("User_Id") : 0,
                                JobName = !reader.IsDBNull("JobName") ? reader.GetString("JobName") : "",
                                Status = !reader.IsDBNull("Status") ? reader.GetString("Status") : "",
                                
                            }
                            );
                        }
                    }

                }

            }
            return newList4;

        }





         public IEnumerable<newusertype> GetUsertype(string email)
        {
            var newList5 = new List<newusertype>();
            SqlCommand command = base.CreateCommand("usp_GetUsertype", CommandType.StoredProcedure) as SqlCommand;
            if (command != null)
            {
                 command.Parameters.AddWithValue("@email", email);

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    if (reader != null && (reader as SqlDataReader) != null && (reader as SqlDataReader).HasRows)
                    {
                        while (reader.Read())
                        {
                            newList5.Add(new newusertype
                            {
                                
                                User_Id = !reader.IsDBNull("User_Id") ? reader.GetInt32("User_Id") : 0,
                                UserType = !reader.IsDBNull("UserType") ? reader.GetString("UserType") : "",
                               
                            }
                            );
                        }
                    }

                }

            }
            return newList5;

        }







         public IEnumerable<newsearch> Getsearch(string filter)
        {
            var newList5 = new List<newsearch>();
            SqlCommand command = base.CreateCommand("usp_GBSJobs_User_Search", CommandType.StoredProcedure) as SqlCommand;
            if (command != null)
            {
                 command.Parameters.AddWithValue("@filtertext", filter);

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    if (reader != null && (reader as SqlDataReader) != null && (reader as SqlDataReader).HasRows)
                    {
                        while (reader.Read())
                        {
                            newList5.Add(new newsearch
                            {
                                
                                
                                JobName = !reader.IsDBNull("JobName") ? reader.GetString("JobName") : "",
                                Openings = !reader.IsDBNull("Openings") ? reader.GetInt32("Openings") : 0,
                                //Address = !reader.IsDBNull("Address") ? reader.GetString("Address") : "",
                                Experience = !reader.IsDBNull("Experience") ? reader.GetInt32("Experience") : 0,
                                //UserType = !reader.IsDBNull("UserType") ? reader.GetString("UserType") : ""
                                

                            }
                            );
                        }
                    }

                }

            }
            return newList5;

        }


        public IEnumerable<newreport> Getreport()
        {
            var newList6 = new List<newreport>();
            SqlCommand command = base.CreateCommand("usp_GetApplicationreport", CommandType.StoredProcedure) as SqlCommand;
            if (command != null)
            {
                //command.Parameters.AddWithValue("@Job_id", id);

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    if (reader != null && (reader as SqlDataReader) != null && (reader as SqlDataReader).HasRows)
                    {
                        while (reader.Read())
                        {
                            newList6.Add(new newreport
                            {
                                Application_Id = !reader.IsDBNull("Application_Id") ? reader.GetInt32("Application_Id") : 0,
                                Category_Id = !reader.IsDBNull("Category_Id") ? reader.GetInt32("Category_Id") : 0,
                                CategoryName = !reader.IsDBNull("CategoryName") ? reader.GetString("CategoryName") : "",
                               // TotalCount = !reader.IsDBNull("TotalCount") ? reader.GetInt32("TotalCount") : 0,
                                Job_Id = !reader.IsDBNull("Job_Id") ? reader.GetInt32("Job_Id") : 0,
                                JobName = !reader.IsDBNull("JobName") ? reader.GetString("JobName") : "",
                                Needed_Skills = !reader.IsDBNull("Needed_Skills") ? reader.GetString("Needed_Skills") : "",
                                Needed_Experience = !reader.IsDBNull("Needed_Experience") ? reader.GetInt32("Needed_Experience"):0,
                                User_Id = !reader.IsDBNull("User_Id") ? reader.GetInt32("User_Id") : 0,
                                Name = !reader.IsDBNull("Name") ? reader.GetString("Name") : "",
                                Email = !reader.IsDBNull("Email") ? reader.GetString("Email") : "",
                                Mobile = !reader.IsDBNull("Mobile") ? reader.GetString("Mobile") : "",
                                User_Skills = !reader.IsDBNull("User_Skills") ? reader.GetString("User_Skills") : "",
                                User_Experience = !reader.IsDBNull("User_Experience") ? reader.GetInt32("User_Experience"):0,
                                AppliedDate =reader.GetDateTime("AppliedDate") ,
                                LastDateForApplying = reader.GetDateTime("LastDateForApplying") ,
                                Response = !reader.IsDBNull("Response") ? reader.GetString("Response") : "",
                                Status = !reader.IsDBNull("Status") ? reader.GetString("Status") : "",


                            }
                            );
                        }
                    }

                }

            }
            return newList6;

        }



    }

}