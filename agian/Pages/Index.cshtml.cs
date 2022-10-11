using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Data.SqlClient;
using System.Net.Mail;
using System.Net;

namespace agian.Pages
{
    public class IndexModel : PageModel
    {
        
        public void OnGet()
        {

        }
        public void OnPost()
        {
            string FN = Request.Form["FirstName"];
            string LN = Request.Form["LastName"];
            string email = Request.Form["Email"];
            string phoneNo = Request.Form["PhoneNo"];
            string DOB = Request.Form["DOB"];
            string gender = Request.Form["Gender"];
            string city = Request.Form["City"];
            string pinCode = Request.Form["Pincode"];
            string curr_Add = Request.Form["Address"];
            string pre_Add = Request.Form["AddressP"];
            string institute = Request.Form["Institute"];
            string year = Request.Form["Year"];
            string type = Request.Form["Field"];
            string duration = Request.Form["Duration"];
            string skills = Request.Form["Skills"];
            string major = Request.Form["Major"];
            string qualification = Request.Form["Qualification"];
            string AOI = Request.Form["Interest"];
            string expr = Request.Form["Experience"];
            string PWP = Request.Form["WorkProfile"];
            string POWE = Request.Form["WorkExperience"];
            string CTC = Request.Form["CTC"];

            string connectionString = "Data Source=DESKTOP-PV6H4SA\\SQLEXPRESS;Initial Catalog=BI_form;Integrated Security=True;TrustServerCertificate=True";


            string sqlQuery =
                " INSERT INTO Information(FirstName,LastName,email,phoneNo,city,gender,pincode,c_address,p_address,Instituet_Name,year_of_com,type_of_training,duration,skills,Major,qualification,AreaOfIntrest,expr,past_profile,past_exp,current_CTC)"
+
"VALUES (" +
" ' " + FN + " ' " +","
+
" ' " + LN + " ' " + ","
+
" ' " + email + " ' " + ","
+
" ' " + phoneNo + " ' " + ","
+
" ' " + city + " ' " + ","
+
" ' " + gender + " ' " + ","
+
" ' " + pinCode + " ' " + ","
+
" ' " + curr_Add + " ' " + ","
+
" ' " + pre_Add + " ' " + ","
+
" ' " + institute + " ' " + ","
+
" ' " + year + " ' " + ","
+
" ' " + type + " ' " + ","
+
" ' " + duration + " ' " + ","
+
" ' " + skills + " ' " + ","
+
" ' " + major + " ' " + ","
+
" ' " + qualification + " ' " + ","
+
" ' " + AOI + " ' " + ","
+
" ' " + expr + " ' " + ","
+
" ' " + PWP + " ' " + ","
+
" ' " + POWE + " ' " + ","
+
" ' " + CTC + " ' " + " ) ";
            SqlConnection con = new SqlConnection(connectionString);
            con.Open();
            SqlCommand sc = new SqlCommand(sqlQuery, con);
            sc.ExecuteNonQuery();
            con.Close();
            string fullName = FN + " " + LN;
            string Message = "Thank you for Showing your interest" + FN + " " + LN;
            SendMail(fullName, email, Message);

        }
        public bool SendMail(string name, string email, string Message)
        {
            MailMessage message = new MailMessage();
            SmtpClient smtpClient = new SmtpClient();
            message.From = new MailAddress("noreply@zebit.tech");
            message.To.Add("rishabh.sharma13@outlook.com");
            message.Subject = "Test email";
            message.IsBodyHtml = true;
            message.Body = "<h1>" + name + "</h1>";

            smtpClient.Port = 587;
            smtpClient.Host = "smtp.office365.com";
            smtpClient.EnableSsl = true;
            smtpClient.UseDefaultCredentials = false;
            smtpClient.Credentials = new NetworkCredential("rishabh.sharma13@outlook.com", "R8770300675s");
            smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
            
            smtpClient.Send(message);
            return true;


        }
    }
}